import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DiscService } from './disc.service';
import { CreateDiscDto } from './dto/create-disc.dto';
import { UpdateDiscDto } from './dto/update-disc.dto';

@Controller('disc')
export class DiscController {
  constructor(private readonly discService: DiscService) {}

  @Post()
  async create(@Body() createDiscDto: CreateDiscDto) {
    return await this.discService.create(createDiscDto);
  }

  @Get()
  async findAll() {
    return await this.discService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.discService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateDiscDto: UpdateDiscDto) {
    return await this.discService.update(+id, updateDiscDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.discService.remove(+id);
  }
}
