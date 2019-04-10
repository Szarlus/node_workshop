class Migration1554906815792 {
  async up(queryRunner) {
    await queryRunner.query(
      `CREATE TABLE "todo" ("id" uuid NOT NULL, "name" character varying NOT NULL, "done" boolean NOT NULL, CONSTRAINT "PK_d429b7114371f6a35c5cb4776a7" PRIMARY KEY ("id"))`
    );
  }

  async down(queryRunner) {
    await queryRunner.query(`DROP TABLE "todo"`);
  }
}

module.exports = {
  Migration1554906815792
};
