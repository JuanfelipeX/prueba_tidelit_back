import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { FirebaseModule } from './firebase/firebase.module';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
    AuthModule, FirebaseModule, TasksModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
