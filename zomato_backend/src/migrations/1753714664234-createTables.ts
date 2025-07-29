import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTables1753714664234 implements MigrationInterface {
    name = 'CreateTables1753714664234'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."users_gender_enum" AS ENUM('Male', 'Female', 'Other')`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "email" character varying NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "gender" "public"."users_gender_enum" NOT NULL DEFAULT 'Male', "age" integer NOT NULL, "password" character varying NOT NULL, "role" "public"."users_role_enum" NOT NULL DEFAULT 'User', CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "restarents" ("id" SERIAL NOT NULL, "description" character varying NOT NULL, "address" character varying NOT NULL, "ownerId" integer, CONSTRAINT "PK_07c7be234a6abd34680eaa83d14" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "restarents" ADD CONSTRAINT "FK_2a57fbd8925dc60b20b6c9df8f2" FOREIGN KEY ("ownerId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "restarents" DROP CONSTRAINT "FK_2a57fbd8925dc60b20b6c9df8f2"`);
        await queryRunner.query(`DROP TABLE "restarents"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TYPE "public"."users_gender_enum"`);
    }

}
