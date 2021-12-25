import { PrimaryGeneratedColumn, Column, UpdateDateColumn, CreateDateColumn } from "typeorm";

export abstract class UsersEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar', length: 300 })
    first_name: string;

    @Column({ type: 'varchar', length: 300 })
    last_name: string;

    @Column({ type: 'varchar', length: 10 })
    gender: string;

    @Column({ type: 'varchar', length: 300 })
    email: string;

    @Column({ type: 'varchar', length: 50 })
    phone: string;

    @Column({ type: 'boolean', default: true })
    isActive: boolean;

    @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    createDateTime: Date
}