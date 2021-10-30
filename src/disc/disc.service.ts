import { Injectable } from '@nestjs/common';
import { DiscRepository } from './disc.repository';
import { CreateDiscDto } from './dto/create-disc.dto';
import { UpdateDiscDto } from './dto/update-disc.dto';
import { Disc } from './entities/disc.entity';

@Injectable()
export class DiscService {
  constructor(private readonly repository: DiscRepository) {}

  async create(createDiscDto: CreateDiscDto) {
    return await this.repository.save(createDiscDto);
  }

  async findAll() {
    return await this.repository.find();
  }

  async findByEmployeeId(employeeId: number) {
    return await this.repository.find({
      where: { employee: employeeId },
      order: { creationDate: 'DESC' },
    });
  }

  async findByCompanyId(companyId: number, onlyRecent?: boolean) {
    const qb = this.repository.createQueryBuilder('disc');

    qb.innerJoinAndSelect('disc.employee', 'employee')
      .innerJoin('employee.company', 'company')
      .where('company.id = :companyId', { companyId });

    if (onlyRecent) {
      qb.innerJoinAndSelect(
        (qb) =>
          qb
            .select('employee_id')
            .addSelect('max(creation_date)', 'recent')
            .groupBy('employee_id')
            .from(Disc, 'most_recent'),
        'most_recent',
        'most_recent.employee_id = disc.employee',
      ).andWhere('disc.creation_date = most_recent.recent');
    }

    return await qb.getMany();
  }

  async findOne(id: number) {
    return await this.repository.findOne(id);
  }

  async update(id: number, updateDiscDto: UpdateDiscDto) {
    await this.repository.update(id, updateDiscDto);
    return `This action updates a #${id} disc`;
  }

  async remove(id: number) {
    await this.repository.delete(id);
    return `This action removes a #${id} disc`;
  }
}
