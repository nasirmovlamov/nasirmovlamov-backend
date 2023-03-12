import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('actions')
export class Action {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
