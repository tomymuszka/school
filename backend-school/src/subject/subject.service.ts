import { Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Subject } from './entities/subject.entity';
import { Grade } from 'src/grade/entities/grade.entity';

@Injectable()
export class SubjectService {

  private readonly logger = new Logger('SubjectService')

  constructor(
    @InjectRepository(Subject)
    private readonly subjectRepository:Repository<Subject>,
    @InjectRepository(Grade)
    private readonly gradeRepository:Repository<Grade>
  ){}


  async create(createSubjectDto: CreateSubjectDto) {
    const {gradeId, ...subjectData} = createSubjectDto
    const grade = await this.gradeRepository.findOneBy({id:gradeId})
    if(!grade) throw new NotFoundException(`Grade with id ${gradeId} not found`)

    const subject = this.subjectRepository.create({
      grade,
      ...subjectData
    })

    try {
      await this.subjectRepository.save(subject)
      return{
        id:subject.id,
        name:subject.name,
        created_at:subject.created_at,
        gradeId:subject.grade.id

      }
    } catch (error) {
      this.handleDBExeptions(error)
    }
  }

  async findAll() {
    const subjects =  await this.subjectRepository.find()
    return subjects
  }

  async findByGradeId(gradeId: number): Promise<Subject[]> {
    return await this.subjectRepository.createQueryBuilder('subject')
      .leftJoinAndSelect('subject.grade', 'grade')
      .where('grade.id = :gradeId', { gradeId })
      .select([
        'subject.id',
        'subject.name',
        'subject.created_at',
        'subject.updated_at'
      ])
      .addSelect('grade.id', 'gradeId')
      .getRawMany();
  }

  findOne(id: number) {
    const subject = this.subjectRepository.findOneBy({id})
    if(!subject) throw new NotFoundException(`Subject with id ${id} not found`)
      return subject
  }

  async update(id: number, updateSubjectDto: UpdateSubjectDto) {
    const {gradeId, ...gradeData} = updateSubjectDto

    const subjectUpdate = await this.subjectRepository.findOneBy({id})
    if(!subjectUpdate) throw new NotFoundException(`Subject with id ${id} not found`)

    if(gradeId){
    const grade = await this.gradeRepository.findOneBy({id:gradeId})
    if(!grade) throw new NotFoundException(`Grade with id ${gradeId} not found`)
    subjectUpdate.grade = grade
    }

    Object.assign(subjectUpdate, gradeData)

    try {
      await this.subjectRepository.save(subjectUpdate)
      return {
        id:subjectUpdate.id,
        name:subjectUpdate.name,
        created_at:subjectUpdate.created_at,
        grade_id:subjectUpdate.grade.id
      }
      
    } catch (error) {
      this.handleDBExeptions(error)
    }
  }

  remove(id: number) {
    return `This action removes a #${id} subject`;
  }

  private handleDBExeptions(error:any){
    this.logger.error(error)
    throw new InternalServerErrorException('Check server logs')
  }
}
