// OPCIONAL - importa funciones que son exportadas en el archivo utils.js
const misFunciones = require('./scripts/utils')


// importa a express y cors
const express = require('express')


// crea aplicación usando express y puerto
const app = express()
const port = 3000

// OPCIONAL - arreglo para almacenar los datos tomados desde el cliente web 
let transactionArr = []

//#region 
// como la información se va a enviar urlencoded, es necesario incluir la propiedad
// extended y que su valor sea true, para parsear los datos URL-encoded con la libreria qs,
// que es activamente mantenida.
app.use(express.urlencoded({extended: true}))

//app.use(express.json())

//#endregion

// Routes - se debe ajustar las rutas y lógica corrrespondiente
app.get('/', (req, res) => {
  res.redirect('/prestamo');
})

app.get('/prestamo', (req, res) => {
  console.log('en get/prestamo');
  res.sendFile(__dirname+"/static/initial.html");
})
  
   
// 
app.post('/prestamo', (req, res) => {
  console.log('en post/prestamo');

  const transaction = req.body;
  console.log(transaction)

  if (transaction.accion =='Calcular'){
    const nombre = transaction.nombre;
    const prestamo = transaction.prestamo;
    const n = transaction.n;
    const interes = transaction.interes;
    // calcula la cuota
    const cuota = misFunciones.calcularCuota(prestamo, n, interes);
    // Crea objeto JavaScript
    const newData = {nombre, prestamo, n, interes, cuota};
    // Adiciona el nuevo objeto JavaScript
    transactionArr.push(newData);
    // obtiene string con la pagina HTML a retornar
    const nPage = misFunciones.crearPaginaRespuesta(nombre, prestamo, n, interes, cuota);
    res.send(nPage);  
  }else{  // Se solicita mostrar el Historial
    res.send(JSON.stringify(transactionArr));
    console.log(transactionArr);
  }
})

// indicación de los archivos que pueden accesarse publicamente
// de deben dar los nombres completos
app.use(express.static('public'))

// se pone en escucha y despliega el primer mensaje
app.listen(port, () => {
  console.log('Estoy ejecutandome en http://localhost:'+port);
})