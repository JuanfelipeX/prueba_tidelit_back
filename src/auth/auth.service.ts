// src/auth/auth.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  async validateUserById(userId: string): Promise<any> {
    // Implementa la búsqueda real del usuario en la base de datos aquí
    return {
      id: userId,
      username: 'exampleUser',
    };
  }
}
