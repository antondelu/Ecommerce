## Proyecto en React.js Desarrollo Front end Coder House

Instalacion del entorno - Node.js

1. Ingresar a https://nodejs.org/en/
1. Ejecutar comandos:<br>
   - git clone <br>
   - npm install <br>
   - npm start .

<h2>Descripción </h2>
Este proyecto forma parte de la carrera Desarrollo Front end de <b> Coder house. </b> <br>
Se utiliza  para la maquetacion del sitio HTML5 , css ( Sass) <br>
                                                                 
 <b> React.js + Firebase </b> como persistencia.
　

```javascript
 useEffect( () => {
        const db = getFirestore()
        const collection = DB.collection("orden")
        collection.get().then(response=> {
            let ordenes = (response.docs.map( doc =>{ return { ...doc.data(), id: doc.id } } ) )
  },[]);
```

<h2> A mejorar  👇 </h2>
- Responsive Design

<h2>Fin </h2>
