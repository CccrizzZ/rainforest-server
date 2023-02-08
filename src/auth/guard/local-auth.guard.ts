import { AuthGuard } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

// strategy passed in here
@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {}
