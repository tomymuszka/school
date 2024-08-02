import { Module } from '@nestjs/common';
import { SubjectService } from './subject.service';
import { SubjectController } from './subject.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Grade } from 'src/grade/entities/grade.entity';
import { Subject } from './entities/subject.entity';
import {Document} from './../document/entities/document.entity'

@Module({
  controllers: [SubjectController],
  providers: [SubjectService],
  imports: [TypeOrmModule.forFeature([Subject, Grade, Document])], 
})
export class SubjectModule {}
