import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinColumn, OneToOne, ManyToOne, UpdateDateColumn, CreateDateColumn, DeleteDateColumn } from 'typeorm';
import { Professions } from './profession.entity';
import { User } from "./user.entity";

@Entity()
export class UserProfile {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({ nullable: true })
    public address: string;

    @Column({ nullable: true })
    public image: string;

    @Column({ nullable: true })
    public professions: string;

    @ManyToOne(() => User, (user: User) => user.userProfile)
    public user: User;

    @ManyToOne(() => Professions, (profession: Professions) => profession.userProfile)
    public prefession: User;

    @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    public updateDateTime: Date

    @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    public createDateTime: Date;

    @DeleteDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    public deleteDateTime: Date;

}