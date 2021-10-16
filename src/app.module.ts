import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeesModule } from './employees/employees.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getConnectionOptions } from 'typeorm';
import { QuestionsModule } from './questions/questions.module';
import { AssessementsModule } from './assessements/assessements.module';
import { CompaniesModule } from './companies/companies.module';
import { GoalsModule } from './goals/goals.module';
import { TasksModule } from './tasks/tasks.module';
import { AuthModule } from './auth/auth.module';
import { DiscModule } from './disc/disc.module';
import { SurveyDiscModule } from './survey-disc/survey-disc.module';

@Module({
  imports: [
    EmployeesModule,
    AssessementsModule,
    QuestionsModule,
    TypeOrmModule.forRootAsync({
      useFactory: async () =>
        Object.assign(await getConnectionOptions(), {
          autoLoadEntities: true,
        }),
    }),
    CompaniesModule,
    GoalsModule,
    TasksModule,
    AuthModule,
    DiscModule,
    SurveyDiscModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
