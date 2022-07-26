import { MigrationInterface, QueryRunner } from "typeorm";

export class usersTable1658842282804 implements MigrationInterface {
    name = 'usersTable1658842282804'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "user_id" character varying NOT NULL, "email" character varying NOT NULL, "last_name" character varying NOT NULL, "first_name" character varying NOT NULL, "gender" character varying NOT NULL DEFAULT '0', "user_status" character varying NOT NULL DEFAULT '0', "created_at" TIMESTAMP(0) NOT NULL DEFAULT now(), "updated_at" TIMESTAMP(0) NOT NULL DEFAULT now(), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
