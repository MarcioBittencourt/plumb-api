import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CyclesService } from './cycles.service';
import { CreateCycleDto } from './dto/create-cycle.dto';
import { UpdateCycleDto } from './dto/update-cycle.dto';

@Controller('cycles')
export class CyclesController {
  constructor(private readonly cyclesService: CyclesService) {}

  @Post()
  async create(@Body() createCycleDto: CreateCycleDto) {
    return await this.cyclesService.create(createCycleDto);
  }

  @Get()
  async findAll() {
    return await this.cyclesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.cyclesService.findOne(+id);
  }

  @Get('findCurrentCycles/:companyId')
  async findCurrentCycles(@Param('companyId') id: string) {
    return await this.cyclesService.findCurrentCycles(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateCycleDto: UpdateCycleDto,
  ) {
    return await this.cyclesService.update(+id, updateCycleDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.cyclesService.remove(+id);
  }
}
