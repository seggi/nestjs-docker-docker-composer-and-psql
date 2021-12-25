import { Entity, Column } from "typeorm";
import { UsersEntity } from "./users.entity";

@Entity({ name: 'user_profile' })
export class UserProfileEntity extends UsersEntity {
    @Column({ type: 'varchar', length: 300 })
    address: string;

    @Column({ type: "varchar" })
    image: string;

    @Column({ type: "varchar" })
    profession: string;

}