import { Question } from "./question.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Scale } from './scale.entity';

@Entity()
export class Group {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public name: string;

  @Column()
  public description: string;

  @OneToMany(() => Question, q => q.group)
  public questions: Question[];

  @ManyToOne(()=> Scale, s => s.groups)
  public scale: Scale;

}