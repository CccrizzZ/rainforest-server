import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { sign, verify } from 'jsonwebtoken';
import User from '../users/entities/users.entity';
import RefreshToken from './entities/refresh-token.entity';

@Injectable()
export class AuthService {
  // array of refresh tokens
  private refreshTokens: RefreshToken[] = [];

  constructor(private usersService: UsersService) {}

  async refresh(refreshStr: string): Promise<string | undefined> {
    const refreshToken = await this.retrieveRefreshToken(refreshStr);
    if (!refreshToken) {
      return undefined;
    }

    // validate user
    const user = await this.usersService.findById(refreshToken.id);
    if (!user) {
      return undefined;
    }

    // pass validation and return refresh str
    const accessToken = {
      userId: refreshToken.userId,
    };

    return sign(accessToken, process.env.ACCESS_SECRET, { expiresIn: '1h' });
  }

  // get refresh token
  private retrieveRefreshToken(
    refreshStr: string,
  ): Promise<RefreshToken | undefined> {
    try {
      const decoded = verify(refreshStr, process.env.REFRESH_SECRET);
      if (typeof (decoded === 'string')) {
        return undefined;
      }
      return Promise.resolve(
        this.refreshTokens.find(
          (token: RefreshToken) => token.id === decoded.id,
        ),
      );
    } catch (e) {
      return undefined;
    }
  }

  // user login
  async login(
    email: string,
    password: string,
    values: { userAgent: string; ipAddress: string },
  ): Promise<{ accessToken: string; refreshToken: string } | undefined> {
    const user = await this.usersService.findByEmail(email);
    if (!user) return undefined;

    // verify user, use argon2 for password hashing
    if (user.passWord !== password) {
      return undefined;
    }

    // login success return the token
    return this.newRefreshAccessToken(user, values);
  }

  // get new refresh token
  private async newRefreshAccessToken(
    user: User,
    values: { userAgent: string; ipAddress: string },
  ): Promise<{ accessToken: string; refreshToken: string }> {
    // new refresh token object
    const refreshObject = new RefreshToken({
      id:
        this.refreshTokens.length === 0
          ? 0
          : this.refreshTokens[this.refreshTokens.length - 1].id + 1,
      ...values,
      userId: user.id,
    });

    // add refresh token to array
    this.refreshTokens.push(refreshObject);

    return {
      refreshToken: refreshObject.sign(),
      accessToken: sign(
        {
          userId: user.id, // payload
        },
        process.env.ACCESS_SECRET,
        {
          expiresIn: '1h', // option
        },
      ),
    };
  }

  async logout(refreshStr): Promise<void> {
    const refreshToken = await this.retrieveRefreshToken(refreshStr);
    if (!refreshToken) {
      return;
    }

    // delete refreshtoken from db
    this.refreshTokens = this.refreshTokens.filter(
      (refreshToken) => refreshToken.id !== refreshToken.id,
    );
  }
}
