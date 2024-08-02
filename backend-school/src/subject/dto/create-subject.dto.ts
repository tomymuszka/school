import { Type } from "class-transformer";
import { IsPositive, IsString, MinLength } from "class-validator";

export class CreateSubjectDto {

    @IsString()
    @MinLength(1)
    name:string

    @Type(()=>Number)
    @IsPositive()
    gradeId:number
}
