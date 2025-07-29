import { MigrationInterface, QueryRunner } from "typeorm";

export class AddedManyTables1753724840960 implements MigrationInterface {
    name = 'AddedManyTables1753724840960'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."menus_category_enum" AS ENUM('Veg', 'Non_Veg')`);
        await queryRunner.query(`CREATE TABLE "menus" ("id" SERIAL NOT NULL, "foodItem" character varying NOT NULL, "price" integer NOT NULL, "quantity" integer NOT NULL, "category" "public"."menus_category_enum" NOT NULL DEFAULT 'Veg', "restaurantId" integer, CONSTRAINT "PK_3fec3d93327f4538e0cbd4349c4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "carts-items" ("id" SERIAL NOT NULL, "quantity" integer NOT NULL, "cartId" integer, "menuItemId" integer, CONSTRAINT "PK_3f6d5581d701934c28dda38718c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "ratings" ("id" SERIAL NOT NULL, "rating" integer NOT NULL, "restaurantId" integer, "userId" integer, CONSTRAINT "PK_0f31425b073219379545ad68ed9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "order_item" ("id" SERIAL NOT NULL, "quantity" integer NOT NULL, "orderId" integer, "menuItemId" integer, CONSTRAINT "PK_d01158fe15b1ead5c26fd7f4e90" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "orders" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "status" character varying NOT NULL DEFAULT 'pending', "totalPrice" numeric(10,2) NOT NULL, "userId" integer, "restaurantId" integer, CONSTRAINT "PK_710e2d4957aa5878dfe94e4ac2f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "notification" ("id" SERIAL NOT NULL, "message" character varying NOT NULL, "isRead" boolean NOT NULL DEFAULT false, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "recipientId" integer, "orderId" integer, "restaurantId" integer, CONSTRAINT "PK_705b6c7cdf9b2c2ff7ac7872cb7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "cart" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "totalPrice" integer NOT NULL, "userId" integer, "restaurantId" integer, CONSTRAINT "PK_c524ec48751b9b5bcfbf6e59be7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "restarents" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "menus" ADD CONSTRAINT "FK_62f6422b138b02c889426a1bf47" FOREIGN KEY ("restaurantId") REFERENCES "restarents"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "carts-items" ADD CONSTRAINT "FK_1b9e042cc8c99b5e8913130a07b" FOREIGN KEY ("cartId") REFERENCES "cart"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "carts-items" ADD CONSTRAINT "FK_9200e3e10f54e7917c6313f04c9" FOREIGN KEY ("menuItemId") REFERENCES "menus"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "ratings" ADD CONSTRAINT "FK_4af3ac86baa03d9ef74f2c3a5cd" FOREIGN KEY ("restaurantId") REFERENCES "restarents"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "ratings" ADD CONSTRAINT "FK_4d0b0e3a4c4af854d225154ba40" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order_item" ADD CONSTRAINT "FK_646bf9ece6f45dbe41c203e06e0" FOREIGN KEY ("orderId") REFERENCES "orders"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order_item" ADD CONSTRAINT "FK_caa901372ba1b5aa30d1950b458" FOREIGN KEY ("menuItemId") REFERENCES "menus"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_151b79a83ba240b0cb31b2302d1" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_2312cd07a04f50ba29d76c9564e" FOREIGN KEY ("restaurantId") REFERENCES "restarents"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "notification" ADD CONSTRAINT "FK_ab7cbe7a013ecac5da0a8f88884" FOREIGN KEY ("recipientId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "notification" ADD CONSTRAINT "FK_158290aea1aeac94f43ff5ac34b" FOREIGN KEY ("orderId") REFERENCES "orders"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "notification" ADD CONSTRAINT "FK_7119981278b03a1f91d418eda5b" FOREIGN KEY ("restaurantId") REFERENCES "restarents"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cart" ADD CONSTRAINT "FK_756f53ab9466eb52a52619ee019" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cart" ADD CONSTRAINT "FK_bf8624312d1f6d08b85dc68f484" FOREIGN KEY ("restaurantId") REFERENCES "restarents"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cart" DROP CONSTRAINT "FK_bf8624312d1f6d08b85dc68f484"`);
        await queryRunner.query(`ALTER TABLE "cart" DROP CONSTRAINT "FK_756f53ab9466eb52a52619ee019"`);
        await queryRunner.query(`ALTER TABLE "notification" DROP CONSTRAINT "FK_7119981278b03a1f91d418eda5b"`);
        await queryRunner.query(`ALTER TABLE "notification" DROP CONSTRAINT "FK_158290aea1aeac94f43ff5ac34b"`);
        await queryRunner.query(`ALTER TABLE "notification" DROP CONSTRAINT "FK_ab7cbe7a013ecac5da0a8f88884"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_2312cd07a04f50ba29d76c9564e"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_151b79a83ba240b0cb31b2302d1"`);
        await queryRunner.query(`ALTER TABLE "order_item" DROP CONSTRAINT "FK_caa901372ba1b5aa30d1950b458"`);
        await queryRunner.query(`ALTER TABLE "order_item" DROP CONSTRAINT "FK_646bf9ece6f45dbe41c203e06e0"`);
        await queryRunner.query(`ALTER TABLE "ratings" DROP CONSTRAINT "FK_4d0b0e3a4c4af854d225154ba40"`);
        await queryRunner.query(`ALTER TABLE "ratings" DROP CONSTRAINT "FK_4af3ac86baa03d9ef74f2c3a5cd"`);
        await queryRunner.query(`ALTER TABLE "carts-items" DROP CONSTRAINT "FK_9200e3e10f54e7917c6313f04c9"`);
        await queryRunner.query(`ALTER TABLE "carts-items" DROP CONSTRAINT "FK_1b9e042cc8c99b5e8913130a07b"`);
        await queryRunner.query(`ALTER TABLE "menus" DROP CONSTRAINT "FK_62f6422b138b02c889426a1bf47"`);
        await queryRunner.query(`ALTER TABLE "restarents" DROP COLUMN "name"`);
        await queryRunner.query(`DROP TABLE "cart"`);
        await queryRunner.query(`DROP TABLE "notification"`);
        await queryRunner.query(`DROP TABLE "orders"`);
        await queryRunner.query(`DROP TABLE "order_item"`);
        await queryRunner.query(`DROP TABLE "ratings"`);
        await queryRunner.query(`DROP TABLE "carts-items"`);
        await queryRunner.query(`DROP TABLE "menus"`);
        await queryRunner.query(`DROP TYPE "public"."menus_category_enum"`);
    }

}
