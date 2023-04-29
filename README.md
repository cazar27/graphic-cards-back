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

- `GET /api/graphic-cards`: Devuelve todas las tarjetas gráficas registradas en la base de datos, paginadas.
- `GET /api/graphic-cards/:id`: Devuelve la tarjeta gráfica con el ID especificado.
- `GET /api/graphic-cards?name=:name`: Devuelve todas las tarjetas gráficas que coincidan con el nombre especificado.
- `POST /api/graphic-cards`: Crea una nueva tarjeta gráfica con los datos enviados en el cuerpo de la solicitud.

## Contribuciones

Si quieres contribuir al proyecto, por favor sigue los siguientes pasos:

1. Haz un fork del repositorio.
2. Crea una rama con el nombre de tu nueva funcionalidad (`git checkout -b nueva-funcionalidad`).
3. Haz tus cambios y haz commit de los mismos (`git commit -am 'Agrega nueva funcionalidad'`).
4. Haz push de tus cambios a tu repositorio (`git push origin nueva-funcionalidad`).
5. Crea un Pull Request en el repositorio original.
