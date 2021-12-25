import {MigrationInterface, QueryRunner} from "typeorm";

export class commingleInit1640463093242 implements MigrationInterface {
    name = 'commingleInit1640463093242'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user_profile" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "first_name" character varying(300) NOT NULL, "last_name" character varying(300) NOT NULL, "sex" character varying(10) NOT NULL, "email" character varying(300) NOT NULL, "phone" character varying(50) NOT NULL, "isActive" boolean NOT NULL DEFAULT true, "createDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "address" character varying(300) NOT NULL, "image" character varying NOT NULL, "professions" character varying NOT NULL, CONSTRAINT "PK_f44d0cd18cfd80b0fed7806c3b7" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user_profile"`);
    }

}
