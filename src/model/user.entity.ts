import { PrimaryGeneratedColumn, Column, UpdateDateColumn, CreateDateColumn, Entity, OneToMany, OneToOne, ManyToOne, DeleteDateColumn, JoinColumn } from "typeorm";
import { Cities } from "./cities.entity";
import { Countries } from "./countries.entity";
import { Languages } from "./languages.entity";
import { States } from "./states.entity";
import { UserProfile } from "./user_profile.entity";

@Entity({ name: "User" })
export class User {
    @PrimaryGeneratedColumn('uuid')
    public id: number;

    @Column()
    public first_name: string;

    @Column()
    public last_name: string;

    @Column({ type: 'varchar', length: 10 })
    public gender: string;

    @Column({ type: 'varchar', length: 11 })
    public birthDate: string;

    @Column({ unique: true })
    public email: string;

    @Column({ type: 'varchar', length: 50, nullable: true })
    public phone: string;

    @Column({ default: false })
    public isClient: boolean;

    @Column({ default: false })
    public isServiceOffer: boolean;

    @ManyToOne(() => Languages, (language: Languages) => language.user)
    public language: Languages;

    @ManyToOne(() => Countries, (country: Countries) => country.user)
    public country: Countries[] | null;

    @ManyToOne(() => Cities, (city: Cities) => city.user)
    public city: Cities[] | null;

    @ManyToOne(() => States, (state: States) => state.user)
    public state: States[] | null;

    @Column({ nullable: false })
    public username: string;

    @Column({ nullable: false })
    public password: string;

    @Column({ type: 'boolean', default: true })
    public isActive: boolean;

    @OneToMany(() => UserProfile, (userProfile: UserProfile) => userProfile.user)
    public userProfile: UserProfile[];

    @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    public conformed_on: Date;

    @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    public updateDateTime: Date

    @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    public createDateTime: Date;

    @DeleteDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    public deleteDateTime: Date;


}