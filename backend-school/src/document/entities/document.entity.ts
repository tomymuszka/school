
import { Subject } from "src/subject/entities/subject.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('document')
export class Document {

    @PrimaryGeneratedColumn()
    id:number

    @Column('text')
    name:string

    @Column('text',{
        array:true
    })
    images:string[]

    @ManyToOne(
        ()=>Subject,
        (subject)=>subject.documents
    )
    subject:Subject

    @CreateDateColumn()
    created_at:Date

    @UpdateDateColumn()
    updated_at:Date
}
