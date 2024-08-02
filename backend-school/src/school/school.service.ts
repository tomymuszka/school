import { BadRequestException, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { CreateSchoolDto } from './dto/create-school.dto';
import { UpdateSchoolDto } from './dto/update-school.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { School } from './entities/school.entity';
import { PaginationDto } from 'src/common/dtos/pagination.dto';

@Injectable()
export class SchoolService {

  private readonly logger = new Logger('schoolService')

  constructor(
    @InjectRepository(School)
    private readonly schoolRepository:Repository<School>
  ){}


  async create(createSchoolDto: CreateSchoolDto) {
    try {
      const school = this.schoolRepository.create(createSchoolDto)
      return await this.schoolRepository.save(school)

    } catch (error) {
      this.handleDBExceptions(error)
    }
  }

  findAll(paginationDto:PaginationDto) {
    const{offset=0, limit=10 } = paginationDto

    return this.schoolRepository.find({
      take:limit,
      skip:offset
    })
  }

  async findOne(id: number) {
    try {
      const school = await this.schoolRepository.findOneBy({id})
      if(!school) throw new NotFoundException(`School with id ${id} not found`)
      return 
    
    } catch (error) {
      this.handleDBExceptions(error)
    }
  }

  async update(id: number, updateSchoolDto: UpdateSchoolDto) {
    const school = await this.schoolRepository.preload({
      id,
      ...updateSchoolDto
    })
    if(!school) throw new NotFoundException(`School with id ${id} not found`)
      try {
        await this.schoolRepository.save(school)
        return school
      } catch (error) {
        this.handleDBExceptions(error)
      }
  }

  remove(id: number) {
    return `This action removes a #${id} school`;
  }


  private handleDBExceptions(error:any){
    if(error.code==='23505'){
      throw new BadRequestException(error.detail)
    }

    this.logger.error(error)
    throw new InternalServerErrorException('Check server logs')
  }
}
