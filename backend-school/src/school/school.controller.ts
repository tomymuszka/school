import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseIntPipe } from '@nestjs/common';
import { SchoolService } from './school.service';
import { CreateSchoolDto } from './dto/create-school.dto';
import { UpdateSchoolDto } from './dto/update-school.dto';
import { PaginationDto } from '../common/dtos/pagination.dto';

@Controller('school')
export class SchoolController {
  constructor(private readonly schoolService: SchoolService) {
  }

  @Post()
  create(@Body() createSchoolDto: CreateSchoolDto) {
    return this.schoolService.create(createSchoolDto);
  }

  @Get()
  findAll(@Query() paginationDto:PaginationDto) {
    return this.schoolService.findAll(paginationDto);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.schoolService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id:number, @Body() updateSchoolDto: UpdateSchoolDto) {
    return this.schoolService.update(id, updateSchoolDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.schoolService.remove(id);
  }
}
