export const initialConsentimientoData: any = {
    fechaHora: "",
    departamento: "",
    municipio: "",
    ubicacion: "",
    ruralFields: {},
    urbanaFields: {},
    informacionPoblacional: [
        {
            antiguoIntegranteFarc: false,
            subPoblacion: ''
        },
        {
            integranteNuevoPartido: false,
            subPoblacion: ''
        },
        {
            familiarAnteriores: false,
            subPoblacion: ''
        }
    ],
    factoresDiferenciales: [],
    numeroContacto: "",
    correoElectronico: "",
    tipoContacto: '',
    autorizaNotificacion: false,
    personaContacto: {
        primerNombre: '',
        segundoNombre: '',
        primerApellido: '',
        segundoApellido: '',
        parentesco: '',
        numeroContacto: '',
        correoElectronico: ''
    },
    consentimiento: {
        terminosCondiciones: false,
        autorizaMedidasPreventivas: false,
        constanciaInformacion: false,
        informaEvalucionObligatoria: false,
        actualizacionDatos: false
    }

}