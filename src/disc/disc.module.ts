import { Module } from '@nestjs/common';
import { DiscService } from './disc.service';
import { DiscController } from './disc.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DiscRepository } from './disc.repository';

@Module({
  imports: [TypeOrmModule.forFeature([DiscRepository])],
  controllers: [DiscController],
  providers: [DiscService],
})
export class DiscModule {}
