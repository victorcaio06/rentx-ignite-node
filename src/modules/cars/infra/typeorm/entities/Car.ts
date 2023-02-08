import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

import { Category } from './Category';

@Entity('cars')
export class Car {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  daily_rate: number;

  @Column({ type: 'boolean', default: true })
  available: boolean;

  @Column({ unique: true })
  license_plate: string;

  @Column()
  find_amount: number;

  @Column()
  brand: string;

  @CreateDateColumn()
  created_at?: Date;

  @ManyToOne(() => Category, (category) => category.id)
  category: Category;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
      this.available = true;
      this.created_at = new Date();
    }
  }
}
