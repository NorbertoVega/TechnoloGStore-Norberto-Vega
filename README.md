# TecnoloG Store

La aplicación es un ecommerce cuyos productos son artículos electrónicos.

## Componentes Principales

ItemList
Item
ItemDetail
Navbar
CartWidget
ItemCount

## Componentes Contenedores
ItemListContainer
DetailContainer

## Otros Componentes

Header
Common

## Rutas

‘/’ navega a <ItemListContainer />
‘/category/:categoryName’ navega a <ItemListContainer />
‘/item/:id’ navega a <ItemDetailContainer />

## Datos

La aplicación utiliza datos mock, que se encuentran en el archivo mockData.js.
Para simular el delay que se produce al traer estos datos se usan promises, efectos y hooks. 


### `npm start`

Corre la aplicacción en modo development.

### `npm install`

Instala las dependencias necesarias para correrr el proyecto.
