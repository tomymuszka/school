import { Grade } from "src/grade/entities/grade.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import {Document} from 'src/document/entities/document.entity'

@Entity('subject')
export class Subject {

    @PrimaryGeneratedColumn()
    id:number

    @Column('text')
    name:string

    @ManyToOne(() => Grade, grade => grade.subjects)
    grade: Grade;

    @OneToMany(()=>Document, document=>document.subject)
    documents:Document[]

    @CreateDateColumn()
    created_at:Date

    @UpdateDateColumn()
    updated_at:Date


}
