import { Module } from '@nestjs/common';
import * as admin from 'firebase-admin';
import * as path from 'path';

@Module({
  providers: [
    {
      provide: 'FIREBASE_ADMIN',
      useValue: admin.initializeApp({
        credential: admin.credential.cert(require(path.join(__dirname, './serviceAccountKey.json'))),
        // ... otras configuraciones de Firebase
      }),
    },
  ],
  exports: ['FIREBASE_ADMIN'],
})
export class FirebaseModule {}
