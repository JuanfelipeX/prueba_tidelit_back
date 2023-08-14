import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { AuthService } from './auth.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'P1NOcxwALkkNGUCJ4RO37Y5iT8XKsNQRNBMsGPeHqlY',
    });
  }

  async validate(payload: any) {
    console.log('JWT Payload:', payload);

    const user = await this.authService.validateUserById(payload.sub);

    if (!user) {
      console.log('User not found');
      throw new UnauthorizedException();
    }

    console.log('User authenticated:', user);
    return user;
  }
}
