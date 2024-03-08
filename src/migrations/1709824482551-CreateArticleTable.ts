import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateArticleTable1709824482551 implements MigrationInterface {
    name = 'CreateArticleTable1709824482551'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`article\` ADD \`creationDate\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`article\` DROP COLUMN \`creationDate\``);
    }

}
