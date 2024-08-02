import { Type } from 'class-transformer';
import { IsInt, IsPositive, IsString, MinLength } from 'class-validator';

export class CreateGradeDto {

    @IsString()
    @MinLength(1)
    name:string

    @IsInt()
    @IsPositive()
    @Type(()=>Number)
    schoolId:number

}
