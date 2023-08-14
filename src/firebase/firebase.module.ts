import { Module } from '@nestjs/common';
import * as admin from 'firebase-admin';

@Module({
  providers: [
    {
      provide: 'FIREBASE_ADMIN',
      useValue: admin.initializeApp({
        credential: admin.credential.cert(require('/path/to/your/serviceAccountKey.json')),
        // ... otras configuraciones de Firebase
      }),
    },
  ],
  exports: ['FIREBASE_ADMIN'],
})
export class FirebaseModule {}
