import { Column, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity('categories')
export class Category {
  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }

  @PrimaryColumn()
  id?: string;

  @Column('varchar', { length: '200' })
  name: string;

  @Column('varchar', { length: '250' })
  description: string;


  created_at?: Date;
}
