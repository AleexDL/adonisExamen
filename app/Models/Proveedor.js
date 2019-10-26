'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Proveedor extends Model {
    inventario(){
        return this.belongsToMany('App/Model/Producto','id');
    }
}

module.exports = Proveedor
