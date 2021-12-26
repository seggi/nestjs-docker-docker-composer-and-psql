import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { States } from "./states.entity";
import { User } from "./user.entity";

@Entity()
export class Cities {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => User, (user: User) => user.city)
    public user: User[];

    @ManyToOne(() => States, (state: States) => state.city)
    @Column({ nullable: true })
    public state: States[];

    @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    public updateDateTime: Date

    @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    public createDateTime: Date;

    @DeleteDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    public deleteDateTime: Date;

}