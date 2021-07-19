import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployerModule } from './employer/employer.module';
import { CompanyModule } from './company/company.module';
import { AssessementModule } from './assessement/assessement.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [EmployerModule, CompanyModule, AssessementModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
