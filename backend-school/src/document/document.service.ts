import { Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { CreateDocumentDto } from './dto/create-document.dto';
import { UpdateDocumentDto } from './dto/update-document.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Document } from './entities/document.entity';
import { Subject } from 'src/subject/entities/subject.entity';

@Injectable()
export class DocumentService {

  private readonly logger = new Logger('documentService')

  constructor(
    @InjectRepository(Document)
    private readonly documentRepository:Repository<Document>,
    @InjectRepository(Subject)
    private readonly subjectRepository:Repository<Subject>
  ){}

  async create(createDocumentDto: CreateDocumentDto) {
    const {subjectId, ...documentData}= createDocumentDto
    const subject = await this.subjectRepository.findOneBy({id:subjectId})
    if(!subject) throw new NotFoundException(`Subject with id ${subjectId} not found`)
      console.log(createDocumentDto)

      const document = this.documentRepository.create(
      {
        subject,
      ...documentData}
      )
      console.log(document)
      try {
        await this.documentRepository.save(document)
        return({
          id:document.id,
          name:document.name,
          images:document.images,
          subject_id:document.subject.id
        })
      } catch (error) {
        this.handleDBExeptions(error)
      }
  }

  findAll() {
    return this.documentRepository.find()
  }

  findOne(id: number) {
    return this.documentRepository.findBy({id})
  }

  async update(id: number, updateDocumentDto: UpdateDocumentDto) {
    const {subjectId, ...documentData} = updateDocumentDto

    const documentUpdate = await this.documentRepository.findOneBy({id})
    if(!documentUpdate) throw new NotFoundException(`Document with id ${id} not found`)

    if(subjectId){
    const subject = await this.subjectRepository.findOneBy({id:subjectId})
    if(!subject) throw new NotFoundException(`Grade with id ${subjectId} not found`)
    documentUpdate.subject = subject
    }

    Object.assign(documentUpdate, documentData)

    try {
      await this.documentRepository.save(documentUpdate)
      return {
        id:documentUpdate.id,
        name:documentUpdate.name,
        created_at:documentUpdate.created_at,
        subject_id:documentUpdate.subject.id
      }
      
    } catch (error) {
      this.handleDBExeptions(error)
    }
  }

  remove(id: number) {
    return `This action removes a #${id} document`;
  }

  private handleDBExeptions(error:any){
    this.logger.error(error.detail)
    throw new InternalServerErrorException('Check server logs')
  }
}
