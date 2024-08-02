import { IsNumber, IsString, MinLength } from "class-validator"

export class CreateSchoolDto {
    
    @MinLength(1)
    @IsString()
    name:string
}
