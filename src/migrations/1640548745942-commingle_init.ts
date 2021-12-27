import {MigrationInterface, QueryRunner} from "typeorm";

export class commingleInit1640548745942 implements MigrationInterface {
    name = 'commingleInit1640548745942'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "User" RENAME COLUMN "conformed_on" TO "conformedOn"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "User" RENAME COLUMN "conformedOn" TO "conformed_on"`);
    }

}
