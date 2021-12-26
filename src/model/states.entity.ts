import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Cities } from "./cities.entity";
import { Countries } from "./countries.entity";
import { User } from "./user.entity";

@Entity()
export class States {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => User, (user: User) => user.state)
    public user: User[];

    @ManyToOne(() => Countries, (country: Countries) => country.state)
    public country: States[] | null;

    @OneToMany(() => Cities, (city: Cities) => city.state)
    public city: Cities[];

    @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    public updateDateTime: Date

    @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    public createDateTime: Date;

    @DeleteDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    public deleteDateTime: Date;

}