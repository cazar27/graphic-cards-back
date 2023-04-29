# Proyecto de Tarjetas Gráficas

Este proyecto es una API para administrar tarjetas gráficas. Se ha desarrollado con Node.js y Express, y utiliza una base de datos MongoDB para almacenar los datos.

## Requerimientos

- Node.js
- MongoDB

## Instalación

1. Clonar el repositorio.
2. Instalar las dependencias con `npm install`.
3. Crear un archivo `.env` en la raíz del proyecto con las siguientes variables:


4. Iniciar el servidor con `npm start`.
5. El puerto en el que la aplicacion localmente correria por defecto es 4000.

## Uso

La API cuenta con los siguientes endpoints:

- `GET /graphic-cards`: Devuelve todas las tarjetas gráficas registradas en la base de datos.
- `GET /graphic-cards?page=:page&limit=:limit`: Devuelve todas las tarjetas gráficas registradas en la base de datos paginadas segun pagina y cantidad limite de graficas.
- `POST /graphic-cards/name/` Devuelve una de las tarjetas gráficas que coincidan con el nombre especificado en el body.
- `POST /graphic-cards-by-name` Devuelve todas las tarjetas gráficas que coincidan con el nombre especificado en el body.
- `POST /graphic-cards/id/`: Devuelve la tarjeta gráfica con el ID especificado en el body.
- `POST /graphic-cards/new`: Crea una nueva tarjeta gráfica con los datos enviados en el body de la solicitud.
- `PUT /graphic-cards/new`: Crea una nueva tarjeta gráfica con los datos enviados en el body de la solicitud necesita un id.

## Contribuciones

Si quieres contribuir al proyecto, por favor sigue los siguientes pasos:

1. Haz un fork del repositorio.
2. Crea una rama con el nombre de tu nueva funcionalidad (`git checkout -b nueva-funcionalidad`).
3. Haz tus cambios y haz commit de los mismos (`git commit -am 'Agrega nueva funcionalidad'`).
4. Haz push de tus cambios a tu repositorio (`git push origin nueva-funcionalidad`).
5. Crea un Pull Request en el repositorio original.
