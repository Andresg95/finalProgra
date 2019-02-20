# Práctica 04-webpack

## Introducción

En esta práctica vas a crear, junto a tus compañeros de equipo, un proyecto de front-end desde cero.

## Contexto

### Dependencias

En las prácticas anteriores, has utilizado `React`, `ReactDOM` y `ReactRouterDOM`. Estos objetos estaban disponibles (ie "en scope") en el archivo `index.js`, pero ¿cómo?. Para responder a esta pregunta, observa el contenido de el archivo `index.html` de la práctica `03-c-react`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  ...
</head>
<body>
  <div id="root"></div>

  <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
  <script src="https://unpkg.com/react-router-dom/umd/react-router-dom.js"></script>
  <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
  <script src="./index.js" type="text/babel"></script>
</body>
</html>
```

Las dependencias externas se cargan como `scripts` desde un servidor externo (`pnpkg`). Estos scripts insertan los objectos `React`, etc. como variables globales en la página. Es decir, los insertan en el objeto `window`. Se puede acceder a estos objetos desde cualquier otro script* del documento, utilizando, por ejemplo, `window.ReactRouterDOM` (ver `03-c-react/index.js`) o, simplemente, `ReactRouterDOM`.

*Siempre y cuando éste se ejecute más tarde que los de las dependencias.

Ésta es la forma más simple de importar dependencias en una aplicación web. Sin embargo, a medida que la complejidad de la aplicación crece, el número de dependencias crece con ella. Gestionarlas manualmente, insertando `scripts`, se vuelve costoso. 

### Transpiladores

En la última clase introduje el lenguaje JSX. Entre otros detalles, hice incapié en que el JSX no es JavaScript válido y, por lo tanto, no puede ser interpretado por el runtime de los navegadores web. ¿Cómo es posible, entonces, que el código de las prácticas anteriores funcionara? Una vez más, la respuesta está en el contenido del archivo `index.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  ...
</head>
<body>
  <div id="root"></div>

  <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
  <script src="https://unpkg.com/react-router-dom/umd/react-router-dom.js"></script>
  <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
  <script src="./index.js" type="text/babel"></script>
</body>
</html>
```

Por una parte, uno de los `scripts` incluido en el documento es el de `babel`. Babel es una librería que permite, entre otras cosas, transpilar código que contiene JSX para producir JavaScript válido. Internamente, convierte los tags JSX en llamadas a `React.createComponent`.

Por otra parte, el script principal de la aplicación, `index.js`, está declarado con tipo `"text/babel"`. Ésto permite a `babel-standalone` identificar este archivo como susceptible de ser transpilado.

Sin embargo, transpilar el código de la aplicación de esta manera es muy ineficiente (ver [documentación de React al respecto](https://reactjs.org/docs/add-react-to-a-website.html#quickly-try-jsx)). Cada vez que el usuario visite la página, tendrá que esperar a que `babel` realice el transpilado. Además, el navegador tendrá que descargar el código del transpilador, aunque no es estrictamente parte de la aplicación.

En una aplicación real, se utiliza un transpilador para generar el código en el formato deseado, como parte del proceso de despliegue. Después, se sirve al usuario el código ya transpilado.

### Bundlers

Un bundler es una librería que permite agrupar los contenidos de varios archivos y dependencias en un solo archivo, para ser distrubuido. ¿Para qué puede ser eso útil?

En las secciones anteriores, he introducido dos problemas comunes en las aplicaciones web: la gestión de dependencias y la necesidad de transpilar el código de cliente. Tradicionalmente, estos problemas se resolvían con herramientas diferentes, que eran ejecutadas en serie por un "task runner", como `gulp` o `grunt`. Más recientemente, han proliferado las herramientas que simplifican estos proceso, unificándolos. Las más populares son `webpack`, `rollup` y `parcel`. Como "rule of thumb": `parcel` es apropiado para proyectos simples; `rollup`, para librerías y `webpack`, para proyectos más complejos. En general, son bundlers que, además, ofrecen, a través de plugins, otras capacidades, como la de transpilar código.

## Objetivo

Tu objetivo para esta práctica es crear, junto a tus compañeros de equipo, una aplicación web con las siguientes características:

* Debe cumplir los requisitos de la práctica `03-c-react` (contener dos páginas, mostrar el histórico de peticiones y respuestas, etc.).
* No puede importar scripts de ningún dominio externo.

## Instrucciones

Ten paciencia y dedica tiempo a leer detenidamente la documentación que consideres relevante.

1. Utiliza npm para instalar las dependencias de tu proyecto (`react`, `react-dom` y `react-router-dom`).
1. Lee la sección ["Adding parcel to your project"](https://parceljs.org/getting_started.html#adding-parcel-to-your-project) de la documentación de `parcel` y sigue sus pasos para instalar `parcel`.
1. Crea los archivos `index.html` etc. tal y como se indica en la sección ["Hello World"](https://parceljs.org/) de la documentación de `parcel`.
1. Ejecuta `npm run dev` y comprueba que puedes acceder a la página web.
1. Importa las dependencias de tu proyecto desde el archivo `index.js`. Ten en cuenta que, tal y como indica la documentación de `parcel`, la sintáxis que debes usar es `import/export`.
1. ¡Programa!
