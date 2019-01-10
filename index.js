'use strict';
var dotenv = require('dotenv');
dotenv.load();
let datos = {};
const express = require('express');
const app = express();
const uuidv1 = require('uuid/v1');

const ACCESS_TOKEN = process.env.ACCESS_TOKEN;
const AI_SESSION_ID = uuidv1();

const dialogflow = require('apiai');
const ai = dialogflow(ACCESS_TOKEN);

const servicioAfiliadoEPS = require('./services/consultaAfiliadoEPS');
const utilities = require('./public/js/utilities');
var arregloDias = [];

app.use(express.static(__dirname + '/views')); // HTML Pages
app.use(express.static(__dirname + '/public')); // CSS, JS & Images

const server = app.listen(process.env.PORT || 9780, function () {
  console.log('listening on  port %d', server.address().port);
});

const socketio = require('socket.io')(server);
socketio.on('connection', function (socket) {
  console.log('a user connected');
});

//Serve UI
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/app.html');
});


socketio.on('connection', function (socket) {
  socket.on('chat request', (text) => {
    console.log('Message: ' + text);

    // Get a reply from API.ai

    let aiReq = ai.textRequest(text, {
      sessionId: AI_SESSION_ID
    });

    aiReq.on('response', (response) => {
      console.log("TODO: " + JSON.stringify(response));

      let aiResponse = response.result.fulfillment.speech;
      let intentId = response.result.metadata.intentId;
      /*  console.log('AI Response: ' + aiResponse);
       
       console.log('Intent ID: ', intentId);
       socket.emit('Intent ID: ', intentId); */

      /*Si el intent de DialogFlow es el de ingresar documento,
      llamar el servicio para confirmar afiliación.*/
      consultarServicio("CC", text);

      if (intentId == '26cf2070-fed7-4bff-b1db-6ba04b5d8f25') {

        let promise = new Promise((resolve, reject) => {
          setTimeout(() => {
            /*  console.log('DATOS', consultarServicio("CC", text));
  */
            resolve(datos);

          }, 1000);
        });

        promise.then((res) => {

          console.log('res', res);
          var availableDate = '';

          arregloDias.forEach((element, index) => {
            console.log('heyy', index, element);
            index = index + 1;
            availableDate += '*' + index + '.' + element.text + '*' + "\n";
          });


          if (JSON.parse(res).responseMessageOut.body.response.consultaAfiliadoResponse.afiliado != undefined) {
            let afiliado = JSON.parse(res).responseMessageOut.body.response.consultaAfiliadoResponse.afiliado;
            let calidadAfiliado = afiliado.calidadAfiliado;
            let fechaAfiliacion = afiliado.fechaAfiliacionSistema;
            let tipoAfiliado = afiliado.tipoAfiliado;
            let correos = afiliado.email;
            console.log("Calidad afiliado: " + calidadAfiliado + "  Fecha afiliación: " + fechaAfiliacion);
            let mensaje = "Tu calidad es de: " + calidadAfiliado + ", estás afiliado desde: " + fechaAfiliacion + " y tu tipo de afiliación es: " + tipoAfiliado + " y los días disponibles para citas son: " + availableDate;
            socket.emit('ai response', mensaje);
          }
        });
      } else {
        socket.emit('ai response', aiResponse);
      }
    });

    aiReq.on('error', (error) => {
      console.log(error);
    });

    aiReq.end();

  });
});


function consultarServicio(tipo, cedula) {
  servicioAfiliadoEPS.servicioAfiliadoEPS.armaObjetos(tipo, cedula, (x) => {
    console.log('RESPONSE: ', x);
    datos = x;
  });
  return datos;
}