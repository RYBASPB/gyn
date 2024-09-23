import { Scale } from '../entities/scale.entity';

export interface ScaleRepository{
  create(scale: Scale): Promise<Scale>;
  findAll(): Promise<Scale[]>;
  findOne(id: number): Promise<Scale>;
  update(id: number, scale: Partial<Scale>): Promise<Scale>;
  delete(id: number): Promise<void>;
}