import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { School } from '../../school/entities/school.entity';
import { Subject } from "src/subject/entities/subject.entity";

@Entity('grade')
export class Grade {

    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    name: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
    
    @ManyToOne(() => School, (school) => school.grades, { cascade: false })
    school: School;

    @OneToMany(() => Subject, (subject) => subject.grade)
    subjects: Subject[]; 
}
