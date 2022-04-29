import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Xptos extends BaseSchema {
  protected tableName = 'xptos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nome', 30).notNullable()
      table.string('apelido', 30).notNullable()
      table.string('email', 254).unique()
      table.boolean('cliente').defaultTo(false)

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
