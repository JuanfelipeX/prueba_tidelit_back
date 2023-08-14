import { Injectable, ExecutionContext } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  canActivate(context: ExecutionContext) {
    // Puedes personalizar la lógica aquí antes de activar el guardia JWT.
    // Por ejemplo, verificar si un usuario tiene un rol específico para acceder a la ruta.
    return super.canActivate(context);
  }
}
