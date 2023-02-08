import { Controller, Get, UseGuards, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/guard/local-auth.guard';
import { AuthenticatedGuard } from './auth/guard/authenticated.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
    console.log('AppController Created');
  }

  // // login authentication
  // @UseGuards(LocalAuthGuard)
  // @Post('login')
  // async login(@Req() req: Request, @Ip() ip: string, @Body() body: LoginDto) {

  // }

  // @UseGuards(AuthenticatedGuard)
  // @Get('protected')
  // getHello(@Req() req: Request): string {
  //   return req.user.toString();
  // }
}
