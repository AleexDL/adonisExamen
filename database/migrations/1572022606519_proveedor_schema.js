'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProveedorSchema extends Schema {
  up () {
    this.create('proveedors', (table) => {
      table.increments()
      table.timestamps()
      table.string('proovedor',50).notNullable();
    })
  }

  down () {
    this.drop('proveedors')
  }
}

module.exports = ProveedorSchema
