# Podcaster

Esta es una SPA (Single Page Application) que lista una serie de colecciones de podcasts con sus respectivas vistas de detalle y la posibilidad de reprodocir cada uno de sus podcasts.

Para desarrollar esta SPA he utilizado las siguientes tecnologías:

- **Next.js**: framework de React.
- **Tailwind**: para dar estilos.
- **Axios**: llamadas a la API.
- **React Context**: gestión del estado de la aplicación.
- **Local Storage**: almacenamiento de datos de forma local.
- **Moment**: para trabajar con formatos de fecha.
- **Ramda**: utilidades para manejo de objetos y arrays.
- **RSS Parser**: conversiones de formato.

La aplicación cuenta con un modo _development_, en el que se sirven los assets sin minimizar; y un modo _production_, donde se sirven los assets concatenados y minimizados.

## Instalación local

Se deberá clonar el repositorio:

```
https://github.com/ihcuesta/podcasts-app.git
```

Se deben instalar las dependencias desde el directorio _podcasts-app_:

```
npm install
```

## Ejecutar la aplicación en modo _development_

Para correr la aplicación en desarrollo, ejecutar desde el directorio _podcasts-app_:

```
npm run dev
```

Este comando inicia un servidor local de desarrollo en [http://localhost:3000](http://localhost:3000). Este modo recarga la página al guardar cambios, por lo que es el ideal en la fase de desarrollo.

## Ejecutar la aplicación en modo _production_

Para correr la aplicación en producción primero debe compilarse el código. Ejecutar desde el directorio _podcasts-app_:

```
npm run build
```

Seguidamente, debe iniciarse la versión compilada de la aplicación. Ejecutar desde el directorio _podcasts-app_:

```
npm run start
```

Este comando inicia un servidor local de producción en [http://localhost:3000](http://localhost:3000). Este modo sirve una versión compilada del código, con los assets minificados y ficheros optimizados para un mejor rendimiento.

### Contacto:

Iván Herranz Cuesta

Linkedin: [www.linkedin.com/in/ivanherranzcuesta/](https://www.linkedin.com/in/ivanherranzcuesta/)

Web: [ivanherranz.com/](https://ivanherranz.com/)
