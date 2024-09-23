import { Group } from './group.entity';

export class Scale {
  constructor(
    public id: number,
    public name: string,
    public shortname: string,
    public description: string,
    public groups: Group[]
  ) {}
}
