## Proyecto en React.js Desarrollo Front end Coder House

Instalacion del entorno - Node.js

1. Ingresar a https://nodejs.org/en/ 
1.   Ejecutar comandos:
         - npm install -g  create-react-app 
         -  create-react-app 
		 - npx create-react-app my-app
		 - cd  my-app
		 - npm start 

##Descripción
Este proyecto forma parte de la carrera Desarrollo Front end de **Coder house **
Se utiliza  para la maquetacion del sitio HTML5 , css ( Sass) 
                            -   npm install --save-dev node-sass
                                                                 
Esta realizado con React.js con conexion al servidor** Firebase **.
　

```javascript
 useEffect( () => {
        const DB = getFirestore()
        const COLLECTION = DB.collection("orden")
        COLLECTION.get().then(response=> {
            let ordenes = (response.docs.map( doc =>{ return { ...doc.data(), id: doc.id } } ) ) 
            console.log(ordenes)
  },[]);
```

##A mejorar  👇
- Responsive Design







###Fin