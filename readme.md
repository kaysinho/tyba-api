# Tyba API

Proyecto desarrollado con Node.js para la prueba tecnica de Backend Developer en Tyba
## Instalación

Instalar en su equipo la ultima version estable de [Node.js](https://nodejs.org/en/).

Navegar hasta la carpeta donde se descargó este repositorio, y ejecutar el siguiente comando.

```bash
npm install
```

## Tener en cuenta
Este proyecto lee y escribe en una base de datos de MariaDB. Usted debe hacer las instalaciones necesarias por ejemplo Xampp o la que usted guste para poder trabajar con MySQL. Luego debe crear la DB y tablas corriendo el script que se encuentra en la ruta:

```bash
./src/data/script.sql

```

Tambien es necesario cambiar los datos de conexcion que se encuentran en el archivo src/mysql/mysql.js

```javascript
const connection = mysql.createConnection({
    connectionLimit: 10,
    host: 'su localhost',
    user: 'su usuario',
    password: 'su contraseña',
    database: 'jplata'
});
```
## Correr el proyecto

Navegar hasta la carpeta donde se descargó este repositorio, y ejecutar el siguiente comando.

```bash
npm start

```

Es necesario abrir la siguiente url [http://localhost:3000/](http://localhost:3000) en Postman o su explorador.
En el proyecto hay una carpeta llamada 'examples postman' donde encontrará ejemplos de como consumir el API.
## Licencia 
[MIT](https://choosealicense.com/licenses/mit/)