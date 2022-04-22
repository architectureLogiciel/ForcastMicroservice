import { Type } from 'class-transformer';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { TimeStampEntity } from '../../generics/db/timestamp.entity';

@Entity('product')
export class Product extends TimeStampEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;


    @Type((newType) => Number)
    @Column()
    price: number;


    @Column()
    store: string;

    @Type((newType) => Number)
    @Column()
    quantity: number;

}
