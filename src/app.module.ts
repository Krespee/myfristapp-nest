import { Module } from '@nestjs/common';
import { TaskModule } from './tasks/tasks.module';
import { ProjectsModule } from './projects/projects.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { HomeController } from './home/home.controller';
import { PaymentsModule } from './payments/payments.module';

@Module({
  imports: [TaskModule, ProjectsModule, AuthModule, UsersModule, PaymentsModule],
  controllers: [HomeController],


})
export class AppModule {}
