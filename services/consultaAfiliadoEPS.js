"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var servicioAfiliadoEPS = /** @class */ (function () {
    function servicioAfiliadoEPS() {
    }
    servicioAfiliadoEPS.armaObjetos = function (tipo, cedula, callback) {
        console.log("Tipo: ", tipo, " cédula: ", cedula);
        this.cuerpo = {
            "requestMessageOut": {
                "header": {
                    "invokerDateTime": "2017-11-11 08:49:45",
                    "moduleId": "TAQUILLA1",
                    "systemId": "PEEWAH",
                    "messageId": "PEEWAH|TAQUILLA1|CC901097473",
                    "logginData": {
                        "sourceSystemId": "",
                        "destinationSystemId": ""
                    },
                    "destination": {
                        "namespace": "http://co/com/comfenalcovalle/esb/ws/ValidadorConsultaAfiliadosCaja",
                        "name": "ValidadorConsultaAfiliadosCaja",
                        "operation": "execute"
                    },
                    "securityCredential": {
                        "userName": "",
                        "userToken": ""
                    },
                    "classification": { "classification": "" }
                },
                "body": {
                    "request": {
                        "consultaAfiliadoRequest": {
                            "abreviatura": tipo,
                            "identificacion": cedula
                        }
                    }
                }
            }
        };
        console.log("Cuerpo: " + JSON.stringify(this.cuerpo));
        this.request.post({
            "headers": { "content-type": "application/json" },
            "url": this.servicio,
            "body": JSON.stringify(this.cuerpo)
        }, function (error, response, body) {
            console.log('THIS IS THE BODY: ', body);
            if (!error && response.statusCode == 200) {
                callback(body);
            }
            else {
                console.log(error);
            }
        });
    };
    servicioAfiliadoEPS.servicioQuemado = function (tipo, cedula) {
        var res;
        return res = "{\n      \"statusCode\": 200,\n      \"body\": {\n        \"responseMessageOut\": {\n          \"header\": {\n            \"invokerDateTime\": \"2017-11-11 08:49:45\",\n            \"moduleId\": \"TAQUILLA1\",\n            \"systemId\": \"PEEWAH\",\n            \"messageId\": \"PEEWAH|TAQUILLA1|CC901097473\",\n            \"logginData\": {\n              \"sourceSystemId\": {},\n              \"destinationSystemId\": {}\n            },\n            \"destination\": {\n              \"namespace\": \"http:/co/com/comfenalcovalle/esb/ws/ValidadorConsultaAfiliadosCaja\",\n              \"name\": \"ValidadorConsultaAfiliadosCaja\",\n              \"operation\": \"execute\"\n            },\n            \"responseStatus\": {\n              \"statusCode\": \"SUCESS\"\n            }\n          },\n          \"body\": {\n            \"response\": {\n              \"consultaAfiliadoResponse\": {\n                \"afiliado\": {\n                  \"idTiid\": \"1\",\n                  \"abreviatura\": \"CC\",\n                  \"identificacion\": \"1107063182\",\n                  \"idPers\": \"101139559\",\n                  \"primerNombre\": \"JENNIFER\",\n                  \"segundoNombre\": {},\n                  \"primerApellido\": \"VASQUEZ\",\n                  \"segundoApellido\": \"HUERTAS\",\n                  \"sexo\": \"F\",\n                  \"fechaAfiliacionSistema\": \"2012-01-12\",\n                  \"idEstr\": \"5\",\n                  \"estrato\": \"ESTRATO 5\",\n                  \"edad\": \"28\",\n                  \"idCaaf\": \"3\",\n                  \"calidadAfiliado\": \"COTIZANTE\",\n                  \"cabeza\": \"S\",\n                  \"principal\": \"S\",\n                  \"idCate\": \"2\",\n                  \"categoria\": \"B\",\n                  \"activo\": \"S\",\n                  \"fechaDefuncion\": {},\n                  \"direccionResidencia\": \"CL 1 C    66 A   35\",\n                  \"telefonoResidencia\": \"3740495\",\n                  \"celular\": \"3166199940\",\n                  \"email\": \"vasquezh0312@hotmail.com\",\n                  \"idMuniResidencia\": \"239\",\n                  \"codigoLeyMunicipioRes\": \"76001\",\n                  \"municipioResidencia\": \"CALI - VALLE\",\n                  \"idBarrResidencia\": \"2956\",\n                  \"codigoLeyBarrioRes\": \"1901\",\n                  \"barrioResidencia\": \"EL REFUGIO\",\n                  \"idTiaf\": \"1\",\n                  \"tipoAfiliado\": \"DEPENDIENTE\",\n                  \"fechaNacimiento\": \"1990-12-03\",\n                  \"idEsci\": \"2\",\n                  \"estadoCivil\": \"CASADO\",\n                  \"subsidio\": \"S\",\n                  \"idTidi\": \"4\",\n                  \"porcentajeDiscapacidad\": {},\n                  \"descripcionDiscapacidad\": \"SIN DISCAP.\"\n                },\n                \"empresas\": {\n                  \"informacionEmpresa\": [\n                    {\n                      \"idTiid\": \"3\",\n                      \"abreviatura\": \"NI\",\n                      \"identificacion\": \"890399011\",\n                      \"idSuem\": \"4587\",\n                      \"codigoSucursal\": \"224\",\n                      \"razonSocial\": \"INS EDUC TEC IND DONALD RODRIGO TAF\",\n                      \"idPers\": \"101139559\",\n                      \"idTiidCotizante\": \"1\",\n                      \"abreviaturaCotizante\": \"CC\",\n                      \"identificacionCotizante\": \"1107063182\",\n                      \"primerNombreCotizante\": \"JENNIFER\",\n                      \"segundoNombreCotizante\": {},\n                      \"primerApellidoCotizante\": \"VASQUEZ\",\n                      \"segundoApellidoCotizante\": \"HUERTAS\",\n                      \"fechaInicialContrato\": \"2018-06-05\",\n                      \"fechaFinalContrato\": {},\n                      \"fechaIngreso\": \"2018-06-05\",\n                      \"fechaRetiro\": {},\n                      \"idClaf\": \"1\",\n                      \"descripcionClaf\": \"DEPENDIENTE\",\n                      \"idEsla\": \"1\",\n                      \"descripcionEsla\": \"ACTIVO\",\n                      \"direccion\": \"CR  43  B   40   11\",\n                      \"telefono\": \"3377730\",\n                      \"ley1429\": \"N\",\n                      \"porcentajeLey1429\": \"100\"\n                    },\n                    {\n                      \"idTiid\": \"3\",\n                      \"abreviatura\": \"NI\",\n                      \"identificacion\": \"890301398\",\n                      \"idSuem\": \"3189\",\n                      \"codigoSucursal\": \"1\",\n                      \"razonSocial\": \"COLEGIO LACORDAIRE\",\n                      \"idPers\": \"101139559\",\n                      \"idTiidCotizante\": \"1\",\n                      \"abreviaturaCotizante\": \"CC\",\n                      \"identificacionCotizante\": \"1107063182\",\n                      \"primerNombreCotizante\": \"JENNIFER\",\n                      \"segundoNombreCotizante\": {},\n                      \"primerApellidoCotizante\": \"VASQUEZ\",\n                      \"segundoApellidoCotizante\": \"HUERTAS\",\n                      \"fechaInicialContrato\": \"2016-11-22\",\n                      \"fechaFinalContrato\": \"2019-05-18\",\n                      \"fechaIngreso\": \"2016-11-22\",\n                      \"fechaRetiro\": \"2018-05-18\",\n                      \"idClaf\": \"1\",\n                      \"descripcionClaf\": \"DEPENDIENTE\",\n                      \"idEsla\": \"4\",\n                      \"descripcionEsla\": \"RETIRADO SERVICIOS\",\n                      \"direccion\": \"CL 5   89 70\",\n                      \"telefono\": \"3325706\",\n                      \"ley1429\": \"N\",\n                      \"porcentajeLey1429\": \"100\"\n                    }\n                  ]\n                },\n                \"grupoFamiliar\": {\n                  \"beneficiario\": [\n                    {\n                      \"tipoIdentificacion\": \"RC\",\n                      \"identificacion\": \"1232792604\",\n                      \"primerNombre\": \"MARTIN\",\n                      \"segundoNombre\": {},\n                      \"primerApellido\": \"VASQUEZ\",\n                      \"segundoApellido\": \"VASQUEZ\",\n                      \"fechaNacimiento\": \"2015-05-17\",\n                      \"correo\": {},\n                      \"idPare\": \"4\",\n                      \"parentezco\": \"HIJO\",\n                      \"cotizante\": \"N\"\n                    },\n                    {\n                      \"tipoIdentificacion\": \"CC\",\n                      \"identificacion\": \"1107063182\",\n                      \"primerNombre\": \"JENNIFER\",\n                      \"segundoNombre\": {},\n                      \"primerApellido\": \"VASQUEZ\",\n                      \"segundoApellido\": \"HUERTAS\",\n                      \"fechaNacimiento\": \"1990-12-03\",\n                      \"correo\": \"vasquezh0312@hotmail.com\",\n                      \"idPare\": {},\n                      \"parentezco\": {},\n                      \"cotizante\": \"S\"\n                    }\n                  ]\n                }\n              }\n            },\n            \"exceptionList\": {}\n          }\n        }\n      },\n      \"headers\": {\n        \"server\": \"Apache-Coyote/1.1\",\n        \"content-length\": \"3407\",\n        \"access-control-allow-origin\": \"*\",\n        \"access-control-allow-methods\": \"POST, HEAD, OPTIONS, GET, PUT, DELETE\",\n        \"access-control-allow-headers\": \"content-type, origin, accept\",\n        \"content-type\": \"application/json; charset=iso-8859-1\",\n        \"date\": \"Thu, 03 Jan 2019 20:42:30 GMT\",\n        \"connection\": \"close\",\n        \"set-cookie\": [\n          \"cookiesession1=13FA0278YBMDT5FOATYTYIC2AGMN8930;Path=/;HttpOnly\"\n        ]\n      },\n      \"request\": {\n        \"uri\": {\n          \"protocol\": \"https:\",\n          \"slashes\": true,\n          \"auth\": null,\n          \"host\": \"virtual.comfenalcovalle.com.co\",\n          \"port\": 443,\n          \"hostname\": \"virtual.comfenalcovalle.com.co\",\n          \"hash\": null,\n          \"search\": null,\n          \"query\": null,\n          \"pathname\": \"/esb/RESTJSONChannelAdapter/Afiliado\",\n          \"path\": \"/esb/RESTJSONChannelAdapter/Afiliado\",\n          \"href\": \"https://virtual.comfenalcovalle.com.co/esb/RESTJSONChannelAdapter/Afiliado\"\n        },\n        \"method\": \"POST\",\n        \"headers\": {\n          \"content-type\": \"application/json\",\n          \"content-length\": 569\n        }\n      }\n    }";
    };
    servicioAfiliadoEPS.servicio = "https://virtual.comfenalcovalle.com.co/esb/RESTJSONChannelAdapter/Afiliado";
    servicioAfiliadoEPS.cuerpo = {};
    servicioAfiliadoEPS.request = require('request');
    servicioAfiliadoEPS.tipoDocumento = "";
    servicioAfiliadoEPS.fechaExpedicion = "";
    return servicioAfiliadoEPS;
}());
exports.servicioAfiliadoEPS = servicioAfiliadoEPS;
