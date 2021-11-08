import { Injectable } from '@nestjs/common';
import { addDays } from 'date-fns';
import { CyclesRepository } from './cycles.repository';
import { CreateCycleDto } from './dto/create-cycle.dto';
import { UpdateCycleDto } from './dto/update-cycle.dto';
import { Cycle } from './entities/cycle.entity';

@Injectable()
export class CyclesService {
  constructor(private readonly repository: CyclesRepository) {}

  async create({
    typeAssessment,
    cadency,
    periodStart,
    periodEnd,
    company,
  }: CreateCycleDto) {
    const days: any = {
      '2 Semanas': 14,
      '2 Meses': 60,
      '3 Meses': 90,
      '6 Meses': 180,
      '1 Ano': 365,
    };
    const cycles: any = [];
    let nextCycleStart = periodStart;
    let index = 0;
    while (new Date(periodEnd) > new Date(nextCycleStart)) {
      const currentCycleEnd = addDays(new Date(nextCycleStart), days[cadency]);
      const cycle = {
        company,
        typeAssessment,
        cadency: days[cadency],
        status: index === 0 ? 'inprogress' : 'pending',
        periodStart: new Date(nextCycleStart),
        periodEnd: currentCycleEnd,
      };
      cycles.push(cycle);
      nextCycleStart = currentCycleEnd;
      index += 1;
    }
    return await this.repository.save(cycles);
  }

  async findCurrentCycles(companyId: number) {
    const qb = this.repository.createQueryBuilder('cycle');
    qb.select('cycle.id', 'id');
    qb.addSelect('cycle.uuid', 'uuid');
    qb.addSelect('cycle.type_assessment', 'typeAssessment');
    qb.addSelect('cycle.status', 'status');
    qb.addSelect('cycle.cadency', 'cadency');
    qb.addSelect('cycle.period_start', 'periodStart');
    qb.addSelect('cycle.period_end', 'periodEnd');
    qb.addSelect('c2.period_start', 'nextCycleStart');
    qb.addSelect('c2.period_end', 'nextCycleEnd');
    return qb
      .leftJoin(
        'cycle',
        'c2',
        'cycle.type_assessment = c2.type_assessment and cycle.period_end = c2.period_start',
        {
          typeAssessement: 'inprogress',
        },
      )
      .where(`cycle.status = 'inprogress' and cycle.company_id = :companyId`, {
        companyId,
      })
      .getRawMany();
  }

  async findAll() {
    return await this.repository.find();
  }

  async findOne(id: number) {
    return await this.repository.findOne(id);
  }

  async update(id: number, updateCycleDto: UpdateCycleDto) {
    return null; //await this.repository.update(id, updateCycleDto);
  }

  async remove(id: number) {
    return await this.repository.delete(id);
  }
}
