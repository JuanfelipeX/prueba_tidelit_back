import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { AuthService } from './auth.service'; // Asegúrate de crear AuthService

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'your-secret-key', // Debe coincidir con el que usaste al firmar el token
    });
  }

  async validate(payload: any) {
    // Aquí realizamos la validación del usuario basado en la información del token
    const user = await this.authService.validateUserById(payload.sub);

    if (!user) {
      throw new UnauthorizedException();
    }

    return user; // Esto permitirá que el usuario se adjunte en la solicitud (request.user)
  }
}
