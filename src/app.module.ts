import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployerModule } from './employer/employer.module';
import { CompanyModule } from './company/company.module';
import { AssessementModule } from './assessement/assessement.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getConnectionOptions } from 'typeorm';
import { DatabaseModule } from './database/database.module';
import { AssessementsModule } from './assessements/assessements.module';
import { EmployerModule } from './employer/employer.module';
import { AssessementsModule } from './assessements/assessements.module';

@Module({
  imports: [
    EmployerModule,
    CompanyModule,
    AssessementModule,
    DatabaseModule,
    TypeOrmModule.forRootAsync({
      useFactory: async () =>
        Object.assign(await getConnectionOptions(), {
          autoLoadEntities: true,
        }),
    }),
    AssessementsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
