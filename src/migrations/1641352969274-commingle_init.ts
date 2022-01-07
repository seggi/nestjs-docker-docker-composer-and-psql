import {MigrationInterface, QueryRunner} from "typeorm";

export class commingleInit1641352969274 implements MigrationInterface {
    name = 'commingleInit1641352969274'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "User" RENAME COLUMN "conformedOn" TO "isEmailConfirmed"`);
        await queryRunner.query(`ALTER TABLE "User" DROP COLUMN "isEmailConfirmed"`);
        await queryRunner.query(`ALTER TABLE "User" ADD "isEmailConfirmed" boolean NOT NULL DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "User" DROP COLUMN "isEmailConfirmed"`);
        await queryRunner.query(`ALTER TABLE "User" ADD "isEmailConfirmed" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "User" RENAME COLUMN "isEmailConfirmed" TO "conformedOn"`);
    }

}
