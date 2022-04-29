import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Xptos extends BaseSchema {
  protected tableName = 'xptos'

  public async up () {
    this.schema.dropTable(this.tableName)

  }

  public async down () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nome', 254).notNullable()
      table.string('email', 254)
      table.string('telefone', 25)
      table.string('endereco', 254)
      table.string('nome_operadora', 254)
      table.string('valor', 10)
      table.string('qualidade', 10)
      table.string('velocidade', 10)
      table.string('opiniao', 254)

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }
}
