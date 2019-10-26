'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductoSchema extends Schema {
  up () {
    this.create('productos', (table) => {
      table.increments()
      table.timestamps()
      table.string('producto',50);
      table.integer('codigo').notNullable();
      table.integer('precio').notNullable();
      table.string('marca',50).notNullable();
      table.integer('idProveedor').unsigned().references('id').inTable('proveedors').onDelete('cascade');
    })
  }

  down () {
    this.drop('productos')
  }
}

module.exports = ProductoSchema
