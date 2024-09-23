import { Group } from './group.entity';

export class Question {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public value: number,
    public group: Group
  ) {}
}