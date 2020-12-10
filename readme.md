# Tyba API

Proyecto desarrollado con Node.js para la prueba tecnica de Backend Developer en Tyba
## Instalación

Instalar en su equipo la ultima version estable de [Node.js](https://nodejs.org/en/).

Navegar hasta la carpeta donde se descargó este repositorio, y ejecutar el siguiente comando.

```bash
npm install
```

## Correr el proyecto

Navegar hasta la carpeta donde se descargó este repositorio, y ejecutar el siguiente comando.

```bash
npm start

```

## Tener en cuenta
Este proyecto lee y escribe en una base de datos de MariaDB. Debe crear su DB y tablas corriendo el script que se encuentra en la ruta:

```bash
./src/data/script.sql

```

Luego es necesario cambiar los datos de conexcion que se encuentran en el archivo src/mysql/mysql.js

```javascript
const connection = mysql.createConnection({
    connectionLimit: 10,
    host: 'su localhost',
    user: 'su usuario',
    password: 'su contraseña',
    database: 'jplata'
});
```

## Licencia 
[MIT](https://choosealicense.com/licenses/mit/)