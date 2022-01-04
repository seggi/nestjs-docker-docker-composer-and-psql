import {MigrationInterface, QueryRunner} from "typeorm";

export class commingleInit1641333719631 implements MigrationInterface {
    name = 'commingleInit1641333719631'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "languages" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "updateDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "createDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleteDateTime" TIMESTAMP WITH TIME ZONE DEFAULT now(), CONSTRAINT "PK_b517f827ca496b29f4d549c631d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "professions" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "updateDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "createDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleteDateTime" TIMESTAMP WITH TIME ZONE DEFAULT now(), CONSTRAINT "PK_9247c0d4b30fc6b796d59262058" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user_profile" ("id" SERIAL NOT NULL, "address" character varying, "image" character varying, "professions" character varying, "updateDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "createDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleteDateTime" TIMESTAMP WITH TIME ZONE DEFAULT now(), "userId" uuid, "prefessionId" integer, CONSTRAINT "PK_f44d0cd18cfd80b0fed7806c3b7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "User" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "first_name" character varying NOT NULL, "last_name" character varying NOT NULL, "gender" character varying(10) NOT NULL, "birthDate" character varying(11) NOT NULL, "email" character varying NOT NULL, "phone" character varying(50), "isClient" boolean NOT NULL DEFAULT false, "isServiceOffer" boolean NOT NULL DEFAULT false, "username" character varying NOT NULL, "password" character varying NOT NULL, "isActive" boolean NOT NULL DEFAULT true, "conformedOn" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updateDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "createDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleteDateTime" TIMESTAMP WITH TIME ZONE DEFAULT now(), "languageId" integer, "countryId" integer, "cityId" integer, "stateId" integer, CONSTRAINT "UQ_4a257d2c9837248d70640b3e36e" UNIQUE ("email"), CONSTRAINT "PK_9862f679340fb2388436a5ab3e4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "countries" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "updateDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "createDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleteDateTime" TIMESTAMP WITH TIME ZONE DEFAULT now(), CONSTRAINT "PK_b2d7006793e8697ab3ae2deff18" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "states" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "updateDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "createDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleteDateTime" TIMESTAMP WITH TIME ZONE DEFAULT now(), "countryId" integer, CONSTRAINT "PK_09ab30ca0975c02656483265f4f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "cities" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "updateDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "createDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleteDateTime" TIMESTAMP WITH TIME ZONE DEFAULT now(), "stateId" integer, CONSTRAINT "PK_4762ffb6e5d198cfec5606bc11e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "user_profile" ADD CONSTRAINT "FK_51cb79b5555effaf7d69ba1cff9" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_profile" ADD CONSTRAINT "FK_fed790a91c933935695af03bd6b" FOREIGN KEY ("prefessionId") REFERENCES "professions"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "User" ADD CONSTRAINT "FK_6be4b9a468f76e02abbf30e77b1" FOREIGN KEY ("languageId") REFERENCES "languages"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "User" ADD CONSTRAINT "FK_fb0ad10d4fad0e70a906e2b5e1e" FOREIGN KEY ("countryId") REFERENCES "countries"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "User" ADD CONSTRAINT "FK_5ff8096e66b9b5a199528132ec6" FOREIGN KEY ("cityId") REFERENCES "cities"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "User" ADD CONSTRAINT "FK_d189a161ae309be4b89caa2e11a" FOREIGN KEY ("stateId") REFERENCES "states"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "states" ADD CONSTRAINT "FK_76ac7edf8f44e80dff569db7321" FOREIGN KEY ("countryId") REFERENCES "countries"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cities" ADD CONSTRAINT "FK_ded8a17cd090922d5bac8a2361f" FOREIGN KEY ("stateId") REFERENCES "states"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cities" DROP CONSTRAINT "FK_ded8a17cd090922d5bac8a2361f"`);
        await queryRunner.query(`ALTER TABLE "states" DROP CONSTRAINT "FK_76ac7edf8f44e80dff569db7321"`);
        await queryRunner.query(`ALTER TABLE "User" DROP CONSTRAINT "FK_d189a161ae309be4b89caa2e11a"`);
        await queryRunner.query(`ALTER TABLE "User" DROP CONSTRAINT "FK_5ff8096e66b9b5a199528132ec6"`);
        await queryRunner.query(`ALTER TABLE "User" DROP CONSTRAINT "FK_fb0ad10d4fad0e70a906e2b5e1e"`);
        await queryRunner.query(`ALTER TABLE "User" DROP CONSTRAINT "FK_6be4b9a468f76e02abbf30e77b1"`);
        await queryRunner.query(`ALTER TABLE "user_profile" DROP CONSTRAINT "FK_fed790a91c933935695af03bd6b"`);
        await queryRunner.query(`ALTER TABLE "user_profile" DROP CONSTRAINT "FK_51cb79b5555effaf7d69ba1cff9"`);
        await queryRunner.query(`DROP TABLE "cities"`);
        await queryRunner.query(`DROP TABLE "states"`);
        await queryRunner.query(`DROP TABLE "countries"`);
        await queryRunner.query(`DROP TABLE "User"`);
        await queryRunner.query(`DROP TABLE "user_profile"`);
        await queryRunner.query(`DROP TABLE "professions"`);
        await queryRunner.query(`DROP TABLE "languages"`);
    }

}
