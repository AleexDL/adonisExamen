'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Producto extends Model {
    inventario(){
        return this.belongsTo('App/Model/Inventario','idProducto');
    }
    proveedor(){
        return this.belongsTo('App/Model/Proveedor','idProveedor');
    }
}

module.exports = Producto
