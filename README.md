# TecnoloG Store
 
La aplicación es un ecommerce cuyos productos son artículos electrónicos.
 
# Componentes Principales
 
## ItemList
Este componente renderiza una lista de Items, mostrando la información en forma de un catálogo.
Al acceder a los links del NavBar esta vista cambia según la categoría que se selecciona.
 
## Item
Renderiza cada ítem en ItemList.
 
## ItemDetail
Renderiza un Item con información detallada del producto. Tiene una imágen, detalle, precio, stock disponible
y un botón para agregar el producto al carrito. Se puede acceder a esta vista haciendo click en uno de los
productos de ItemList.
 
## Navbar
Es una barra que muestra el logotipo y el nombre del ecommerce. Tiene enlaces a las distintas
categorías de productos y el "Home" (que muestra todos los productos juntos). Y también cuenta
con un CartWidget.
 
## CartWidget
Es un widget que muestra la cantidad total de los productos agregados al carrito. Si se hace click en el,
te redirige a la ruta "/cart" que muestra la información del carrito. Si el carrito está vacío el widget
desaparece.
 
## ItemCount
Es un control que sirve para aumentar/disminuir la cantidad de producto seleccionado. Es usado en la
vista detalle y en el carrito.
 
## Cart
Contiene una lista de los productos seleccionados por el cliente, un formulario con los datos del
cliente y un botón para confirmar la compra. Puede accederse a través del detalle de producto luego de
agregar el producto al carrito y hacer click en "terminar mi compra" o bien haciendo click en el CartWidget.
 
## CartForm
Es un formulario en el cual se ingresan los datos del cliente antes de confirmar la compra.
 
## CartItem
Es un elemento de la lista que se muestra en el carrito. Cada ítem cuenta con controles para aumentar y
disminuir la cantidad (se debe presionar el botón actualizar, para que ese cambio tenga efecto), además
cuenta con un botón para eliminar al ítem del carrito.
 
# Componentes Contenedores

## ItemListContainer
## DetailContainer 
Estos componentes se encargan de hacer fetching de los datos, para luego pasarlos como props
a los componentes que contienen (ItemList e ItemDetail).
 
# Otros Componentes
 
## Header
Es un componente gráfico con una franja oscura, que muestra un cartel. El cartel muestra la categoría
si se muestran varios productos (TecnoloG Products si se está en la ruta "/"), se muestra el nombre del producto en la vista detalle y se muestra "Carrito" cuando está en la ruta "/cart".
 
## Common
Contiene componentes que son usados en distintos lugares del proyecto.
 
## Spinner
Muestra una animación cuando se está cargando un componente que requiere datos de Firebase. Se muestra mientras se carga el ItemList, ItemDetail y cuando se presiona el botón de "confirmar compra".
 
# Provider y Context
 
## CartProvider y CartContext
CartProvider contiene un context, CartContext, por lo cual puede ser accedido por todos los componentes
que estén "escuchando" a ese context. En este caso CartProvider envuelve a todos los componentes y por lo tanto puede ser accedido por todos los mismos.
Este provider provee un conjunto de operaciones que se pueden hacer sobre el carrito, por ejemplo: agregar,
actualizar y borrar un item, calcular el costo total de la compra, etc.
 
# Rutas
 
'/' navega a <ItemListContainer />
'/category/:categoryName' navega a <ItemListContainer />
'/item/:id' navega a <ItemDetailContainer />
'/cart' navega a <Cart>
 
# Datos - Firebase
 
La aplicación utiliza datos que se obtienen de Firebase.
Los ítems de ItemList se obtienen de una colección en Firestore llamada "itemsCollection" (los documentos que tiene esta colección son los items).
Luego de apretar el botón de "confirmar compra" se genera una orden que se guarda en otra colección llamada
"orders" y se devuelve el id de esa orden para mostrárselo al usuario en caso de que se haya hecho correctamente la operación.
 
### `npm start`
 
Corre la aplicación en modo development.
 
### `npm install`
 
Instala las dependencias necesarias para correr el proyecto.
 

