export class servicioAfiliadoEPS {

  static servicio = "https://virtual.comfenalcovalle.com.co/esb/RESTJSONChannelAdapter/Afiliado";
  static cuerpo = {}
  static request = require('request');
  static tipoDocumento: string = "";
  static fechaExpedicion: string = "";
  static response: any;
  constructor() { }

  static armaObjetos(tipo: string, cedula: number, callback: any): any {

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
    }
    console.log("Cuerpo: " + JSON.stringify(this.cuerpo));
    this.request.post(
      {
        "headers": { "content-type": "application/json" },
        "url": this.servicio,
        "body": JSON.stringify(this.cuerpo)
      }, (error: any, response: any, body: any) => {
        console.log('THIS IS THE BODY: ', body);

        if (!error && response.statusCode == 200) {
          callback(body);
        }
        else {
          console.log(error);
        }
      });
  }

  static servicioQuemado(tipo: string, cedula: string) {
    let res;

    return res = `{
      "statusCode": 200,
      "body": {
        "responseMessageOut": {
          "header": {
            "invokerDateTime": "2017-11-11 08:49:45",
            "moduleId": "TAQUILLA1",
            "systemId": "PEEWAH",
            "messageId": "PEEWAH|TAQUILLA1|CC901097473",
            "logginData": {
              "sourceSystemId": {},
              "destinationSystemId": {}
            },
            "destination": {
              "namespace": "http:/co/com/comfenalcovalle/esb/ws/ValidadorConsultaAfiliadosCaja",
              "name": "ValidadorConsultaAfiliadosCaja",
              "operation": "execute"
            },
            "responseStatus": {
              "statusCode": "SUCESS"
            }
          },
          "body": {
            "response": {
              "consultaAfiliadoResponse": {
                "afiliado": {
                  "idTiid": "1",
                  "abreviatura": "CC",
                  "identificacion": "1107063182",
                  "idPers": "101139559",
                  "primerNombre": "JENNIFER",
                  "segundoNombre": {},
                  "primerApellido": "VASQUEZ",
                  "segundoApellido": "HUERTAS",
                  "sexo": "F",
                  "fechaAfiliacionSistema": "2012-01-12",
                  "idEstr": "5",
                  "estrato": "ESTRATO 5",
                  "edad": "28",
                  "idCaaf": "3",
                  "calidadAfiliado": "COTIZANTE",
                  "cabeza": "S",
                  "principal": "S",
                  "idCate": "2",
                  "categoria": "B",
                  "activo": "S",
                  "fechaDefuncion": {},
                  "direccionResidencia": "CL 1 C    66 A   35",
                  "telefonoResidencia": "3740495",
                  "celular": "3166199940",
                  "email": "vasquezh0312@hotmail.com",
                  "idMuniResidencia": "239",
                  "codigoLeyMunicipioRes": "76001",
                  "municipioResidencia": "CALI - VALLE",
                  "idBarrResidencia": "2956",
                  "codigoLeyBarrioRes": "1901",
                  "barrioResidencia": "EL REFUGIO",
                  "idTiaf": "1",
                  "tipoAfiliado": "DEPENDIENTE",
                  "fechaNacimiento": "1990-12-03",
                  "idEsci": "2",
                  "estadoCivil": "CASADO",
                  "subsidio": "S",
                  "idTidi": "4",
                  "porcentajeDiscapacidad": {},
                  "descripcionDiscapacidad": "SIN DISCAP."
                },
                "empresas": {
                  "informacionEmpresa": [
                    {
                      "idTiid": "3",
                      "abreviatura": "NI",
                      "identificacion": "890399011",
                      "idSuem": "4587",
                      "codigoSucursal": "224",
                      "razonSocial": "INS EDUC TEC IND DONALD RODRIGO TAF",
                      "idPers": "101139559",
                      "idTiidCotizante": "1",
                      "abreviaturaCotizante": "CC",
                      "identificacionCotizante": "1107063182",
                      "primerNombreCotizante": "JENNIFER",
                      "segundoNombreCotizante": {},
                      "primerApellidoCotizante": "VASQUEZ",
                      "segundoApellidoCotizante": "HUERTAS",
                      "fechaInicialContrato": "2018-06-05",
                      "fechaFinalContrato": {},
                      "fechaIngreso": "2018-06-05",
                      "fechaRetiro": {},
                      "idClaf": "1",
                      "descripcionClaf": "DEPENDIENTE",
                      "idEsla": "1",
                      "descripcionEsla": "ACTIVO",
                      "direccion": "CR  43  B   40   11",
                      "telefono": "3377730",
                      "ley1429": "N",
                      "porcentajeLey1429": "100"
                    },
                    {
                      "idTiid": "3",
                      "abreviatura": "NI",
                      "identificacion": "890301398",
                      "idSuem": "3189",
                      "codigoSucursal": "1",
                      "razonSocial": "COLEGIO LACORDAIRE",
                      "idPers": "101139559",
                      "idTiidCotizante": "1",
                      "abreviaturaCotizante": "CC",
                      "identificacionCotizante": "1107063182",
                      "primerNombreCotizante": "JENNIFER",
                      "segundoNombreCotizante": {},
                      "primerApellidoCotizante": "VASQUEZ",
                      "segundoApellidoCotizante": "HUERTAS",
                      "fechaInicialContrato": "2016-11-22",
                      "fechaFinalContrato": "2019-05-18",
                      "fechaIngreso": "2016-11-22",
                      "fechaRetiro": "2018-05-18",
                      "idClaf": "1",
                      "descripcionClaf": "DEPENDIENTE",
                      "idEsla": "4",
                      "descripcionEsla": "RETIRADO SERVICIOS",
                      "direccion": "CL 5   89 70",
                      "telefono": "3325706",
                      "ley1429": "N",
                      "porcentajeLey1429": "100"
                    }
                  ]
                },
                "grupoFamiliar": {
                  "beneficiario": [
                    {
                      "tipoIdentificacion": "RC",
                      "identificacion": "1232792604",
                      "primerNombre": "MARTIN",
                      "segundoNombre": {},
                      "primerApellido": "VASQUEZ",
                      "segundoApellido": "VASQUEZ",
                      "fechaNacimiento": "2015-05-17",
                      "correo": {},
                      "idPare": "4",
                      "parentezco": "HIJO",
                      "cotizante": "N"
                    },
                    {
                      "tipoIdentificacion": "CC",
                      "identificacion": "1107063182",
                      "primerNombre": "JENNIFER",
                      "segundoNombre": {},
                      "primerApellido": "VASQUEZ",
                      "segundoApellido": "HUERTAS",
                      "fechaNacimiento": "1990-12-03",
                      "correo": "vasquezh0312@hotmail.com",
                      "idPare": {},
                      "parentezco": {},
                      "cotizante": "S"
                    }
                  ]
                }
              }
            },
            "exceptionList": {}
          }
        }
      },
      "headers": {
        "server": "Apache-Coyote/1.1",
        "content-length": "3407",
        "access-control-allow-origin": "*",
        "access-control-allow-methods": "POST, HEAD, OPTIONS, GET, PUT, DELETE",
        "access-control-allow-headers": "content-type, origin, accept",
        "content-type": "application/json; charset=iso-8859-1",
        "date": "Thu, 03 Jan 2019 20:42:30 GMT",
        "connection": "close",
        "set-cookie": [
          "cookiesession1=13FA0278YBMDT5FOATYTYIC2AGMN8930;Path=/;HttpOnly"
        ]
      },
      "request": {
        "uri": {
          "protocol": "https:",
          "slashes": true,
          "auth": null,
          "host": "virtual.comfenalcovalle.com.co",
          "port": 443,
          "hostname": "virtual.comfenalcovalle.com.co",
          "hash": null,
          "search": null,
          "query": null,
          "pathname": "/esb/RESTJSONChannelAdapter/Afiliado",
          "path": "/esb/RESTJSONChannelAdapter/Afiliado",
          "href": "https://virtual.comfenalcovalle.com.co/esb/RESTJSONChannelAdapter/Afiliado"
        },
        "method": "POST",
        "headers": {
          "content-type": "application/json",
          "content-length": 569
        }
      }
    }`;
  }
}