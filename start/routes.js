'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')
Route.post('producto/crear', 'ProductoController.create');
Route.post('producto/editar/:id', 'ProductoController.edit');
Route.delete('producto/eliminar/:id','ProductoController.destroy');
Route.get('producto/mostrar/:id','ProductoController.show');
Route.get('productos','ProductoController.index');

Route.post('proveedor/crear', 'ProveedorController.create');
Route.post('proveedor/editar/:id', 'ProveedorController.edit');
Route.delete('proveedor/eliminar/:id','ProveedorController.destroy');
Route.get('proveedor/mostrar/:id','ProveedorController.show');
Route.get('proveedor','ProveedorController.index');

Route.post('inventario/crear', 'InventarioController.create');
Route.post('inventario/editar/:id', 'InventarioController.edit');
Route.delete('inventario/eliminar/:id','InventarioController.destroy');
Route.get('inventario/mostrar/:id','InventarioController.show');
Route.get('inventario','InventarioController.index');



