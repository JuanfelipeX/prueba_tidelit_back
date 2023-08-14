import { Injectable, Inject } from '@nestjs/common';
import * as admin from 'firebase-admin';

@Injectable()
export class FirebaseService {
  constructor(@Inject('FIREBASE_ADMIN') private readonly firebaseAdmin: admin.app.App) {}

  // Aquí puedes implementar tus funciones que utilicen el cliente de Firebase Admin SDK
}
