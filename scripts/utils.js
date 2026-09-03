
function calcularCuota(prestamo, n, i){
    const P = Number(prestamo);
    const nMeses = Number(n);
    const interes = Number(i);
    return P * interes / (1 - Math.pow(1 + interes, -nMeses));
}

function crearPaginaRespuesta(nombre, prestamo, n, i, cuota){
    let newCuota = cuota.toFixed(2);
    const nPage = `
        <!DOCTYPE html>
        <head>
            <title>Ejemplo Backend</title>
            <style>
                body {
                    background-color: lightcyan;
                    font-size: 20px;
                }

                .elEstilo {
                    display: flex;
                    flex-flow: column nowrap;
                    justify-content: center;
                    align-items: center;
                }
                    
                h1 {
                    color: darkgreen;
                    text-align: center;
                    font-size: 25px;
                }

                footer{
                    text-align: center;
                    font-size: 15px;
                }

                table {
                    width: 400px;
                    margin: 20px auto;
                    padding: 5px auto;
                    border: 2px solid;
                    align-content: center;
                }

                th, td, tr {
                    border: 1px solid;
                }

                textarea{
                    width: 300px;
                    height: 80px;
                    padding: 5px auto;
                }
            </style>    
        </head>
        <body>
            <main> 
                <div class="elEstilo">
                    <h1>Calculadora de Cuota de Préstamo</h1>
                    <form action="/prestamo" enctype="application/x-www-form-urlencoded" method="post">
                        <table>
                            <caption>Calculadora Online</caption>
                            <tbody>
                                <tr>
                                    <td>Nombre</td>
                                    <td><input type="text" value="${nombre}" name="nombre" required></td>
                                </tr>
                                <tr>
                                    <td>Préstamo</td>
                                    <td><input type="text" value="${prestamo}" name="prestamo" required></td>
                                </tr>
                                <tr>
                                    <td>N° de meses</td>
                                    <td><input type="text" value="${n}" name="n" required></td>
                                </tr>
                                <tr>
                                    <td>Interés (ej: 0.15)</td>
                                    <td><input type="text" value="${i}" name="interes" required></td>
                                </tr>
                                <tr>
                                    <td>Acción:</td> 
                                    <td>   
                                        <input type="radio" value="Calcular" name="accion" checked>Calcular
                                        </label><input type="radio" value="Historial" name="accion">Historial          
                                    </td>
                                </tr>      
                                <tr>
                                    <td colspan="2" style="text-align: center;"><input type="submit"  value="Enviar"></td>              
                                </tr>                                 
                            </tbody>
                        </table>                          
                    </form>
                    <textarea readonly>${nombre} – $ ${newCuota} -- $ ${prestamo} -- ${n} meses -- interés ${i*100}%</textarea>
                </div>
            </main>
            <footer> 
                <hr>    
                Fuente propia para el curso de Estructura de Datos 1 en la Universidad Autónoma de Occidente
            </footer>
        </body>
        </html>`
    return nPage;
}

// se indican las funciones a importar
module.exports = {calcularCuota, crearPaginaRespuesta};



