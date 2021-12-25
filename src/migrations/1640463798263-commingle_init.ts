import {MigrationInterface, QueryRunner} from "typeorm";

export class commingleInit1640463798263 implements MigrationInterface {
    name = 'commingleInit1640463798263'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_profile" RENAME COLUMN "sex" TO "gender"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_profile" RENAME COLUMN "gender" TO "sex"`);
    }

}
