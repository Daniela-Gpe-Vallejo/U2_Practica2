# usecontext-test

Ejercicio para compartir estado con `useContext` sin pasarlo por props.

## Cadena de componentes

Los componentes están anidados en este orden:

1. `Header` muestra **Items: 0**.
2. `Page` solo envuelve el contenido.
3. `Panel` muestra el producto.
4. `AddButton` renderiza **Add to cart**.

`Page` y `Panel` no usan el conteo. El valor lo necesitan el primero y el cuarto.

## Funcionalidad completada

- **Add to cart** agrega una unidad del producto.
- **Items** y la insignia del carrito muestran el total de unidades.
- El preview agrupa cada producto y muestra su cantidad actual.
- **Remove 1** descuenta una unidad y elimina el producto cuando llega a cero.

El estado y las acciones se comparten con `CartContext`; no se pasan por props a
través de `Page` ni de `Panel`.
