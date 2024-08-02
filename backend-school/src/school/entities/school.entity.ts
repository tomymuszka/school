
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { Grade } from "src/grade/entities/grade.entity";

@Entity('school')
export class School {

    @PrimaryGeneratedColumn()
    id:number

    @Column('text')
    name:string

    @CreateDateColumn()
    created_at:Date

    @UpdateDateColumn()
    updated_at?:Date

    @OneToMany(
        ()=>Grade,
        (grade)=>grade.school,
        {cascade:false}
    )
    grades?:Grade

}
