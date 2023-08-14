import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy'; // Asegúrate de crear JwtStrategy

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: 'P1NOcxwALkkNGUCJ4RO37Y5iT8XKsNQRNBMsGPeHqlY',
      signOptions: { expiresIn: '1d' },
    }),
  ],
  providers: [JwtStrategy, AuthService], // Asegúrate de que AuthService esté aquí
  exports: [JwtModule],
})
export class AuthModule {}
