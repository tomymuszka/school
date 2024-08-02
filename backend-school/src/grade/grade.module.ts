import { Module } from '@nestjs/common';
import { GradeService } from './grade.service';
import { GradeController } from './grade.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Grade } from './entities/grade.entity';
import { School } from 'src/school/entities/school.entity';
import { Subject } from 'src/subject/entities/subject.entity'; // Corrige la importación

@Module({
  controllers: [GradeController],
  providers: [GradeService],
  imports: [TypeOrmModule.forFeature([Grade, School, Subject])], // Corrige la importación
})
export class GradeModule {}
