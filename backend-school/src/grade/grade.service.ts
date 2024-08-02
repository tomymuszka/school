import { Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { CreateGradeDto } from './dto/create-grade.dto';
import { UpdateGradeDto } from './dto/update-grade.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Grade } from './entities/grade.entity';
import { Repository } from 'typeorm';
import { School } from 'src/school/entities/school.entity';

@Injectable()
export class GradeService {
  private readonly logger = new Logger('gradeService')

  constructor(
    @InjectRepository(Grade)
    private readonly gradeRepository:Repository<Grade>,
    @InjectRepository(School)
    private readonly schoolRepository:Repository<School>
  ){}

  async create(createGradeDto: CreateGradeDto) {
    const{ schoolId, ...gradeData} = createGradeDto

    const school = await this.schoolRepository.findOneBy({id:schoolId})
    if(!school) throw new NotFoundException(`School with id ${schoolId} not found`)

    const grade = this.gradeRepository.create({
      school,
      ...gradeData
    })
    try {
      await this.gradeRepository.save(grade)
      return {
        id:grade.id,
        name:grade.name,
        created_at:grade.created_at,
        school: schoolId
      }
    } catch (error) {
    this.hableDBExeptions(error)
    }
  }

  findAll() {
    return this.gradeRepository.find()
  }

  async findOne(id: number) {
    const grade = await this.gradeRepository.findBy({id})
    if(!grade) throw new NotFoundException(`Grade with id ${id} not found`)
    return grade
    }

  async update(id: number, updateGradeDto: UpdateGradeDto) {
    const { schoolId, ...gradeData} = updateGradeDto

    const gradeUpdate = await this.gradeRepository.findOneBy({id})
    if(!gradeUpdate) throw new NotFoundException(`Grade with id ${id} not found`)

    if(schoolId){
    const school = await this.schoolRepository.findOneBy({id:schoolId})
    if(!school) throw new NotFoundException(`School with id ${schoolId} not found`)
    gradeUpdate.school = school
    }

    Object.assign(gradeUpdate, gradeData)

    try {
      await this.gradeRepository.save(gradeUpdate)
      return gradeUpdate
      
    } catch (error) {
      this.hableDBExeptions(error)
    }
  }

  remove(id: number) {
    return `This action removes a #${id} grade`;
  }

  private hableDBExeptions(error:any){
    this.logger.error(error)
    throw new InternalServerErrorException('Unkwon error, check server logs')
  }
}
