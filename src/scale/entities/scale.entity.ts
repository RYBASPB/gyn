import { Group } from './group.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Scale {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public name: string;

  @Column()
  public shortname: string;

  @Column()
  public description: string;

  @OneToMany(() => Group, g => g.scale)
  public groups: Group[];
}
