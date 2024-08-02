import { Module } from '@nestjs/common';
import { DocumentService } from './document.service';
import { DocumentController } from './document.controller';
import { Subject } from 'src/subject/entities/subject.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Document } from './entities/document.entity';


@Module({
  controllers: [DocumentController],
  providers: [DocumentService],
  imports:[TypeOrmModule.forFeature([Subject, Document])]
})
export class DocumentModule {}
