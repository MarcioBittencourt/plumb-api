import { IsArray, IsNumber, IsString } from 'class-validator';
import { Disc } from 'src/disc/entities/disc.entity';

export class CreateSurveyDiscDto {
  @IsArray()
  asking: string[];

  @IsString()
  more: string;

  @IsString()
  less: string;

  @IsNumber()
  disc: Disc | number;
}
