import { Type } from "class-transformer";
import { IsArray, IsPositive, IsString, MinLength } from "class-validator";

export class CreateDocumentDto {

    @IsString()
    @MinLength(1)
    name:string

    @IsArray()
    images:string[]

    @IsPositive()
    @Type(()=>Number)
    subjectId:number

}
