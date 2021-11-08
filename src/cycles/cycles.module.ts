import { Module } from '@nestjs/common';
import { CyclesService } from './cycles.service';
import { CyclesController } from './cycles.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CyclesRepository } from './cycles.repository';

@Module({
  imports: [TypeOrmModule.forFeature([CyclesRepository])],
  controllers: [CyclesController],
  providers: [CyclesService],
})
export class CyclesModule {}
