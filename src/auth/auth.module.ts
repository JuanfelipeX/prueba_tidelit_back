import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy'; // Asegúrate de crear JwtStrategy

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: 'your-secret-key',
      signOptions: { expiresIn: '1d' },
    }),
  ],
  providers: [JwtStrategy], // Agrega tus providers aquí
  exports: [JwtModule],
})
export class AuthModule {}
