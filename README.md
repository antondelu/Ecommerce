## Proyecto en React.js Desarrollo Front end Coder House

Instalacion del entorno - Node.js

1. Ingresar a https://nodejs.org/en/ 
1.   Ejecutar comandos:<br>
         - npm install -g  create-react-app <br>
         -  create-react-app  <br>
		 - npx create-react-app my-app >
		 - cd my-app 
		 - npm start .


<h2>Descripción </h2>
Este proyecto forma parte de la carrera Desarrollo Front end de <b> Coder house. </b> <br>
Se utiliza  para la maquetacion del sitio HTML5 , css ( Sass) <br>
                            -   npm install --save-dev node-sass
                                                                 
Esta realizado con React.js con conexion al servidor <b>Firebase </b>.
　

```javascript
 useEffect( () => {
        const DB = getFirestore()
        const COLLECTION = DB.collection("orden")
        COLLECTION.get().then(response=> {
            let ordenes = (response.docs.map( doc =>{ return { ...doc.data(), id: doc.id } } ) ) 
            console.log(ordenes)
  },[]);
```

<h2> A mejorar  👇 </h2>
- Responsive Design







<h2>Fin </h2>