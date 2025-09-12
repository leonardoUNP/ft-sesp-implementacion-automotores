import type { Icolumns } from "./Interfaces"

//Columnas tabla de Analistas
export const columnsHistorialDeVehiculos: Icolumns[] = [
    { key: "nombre_analista", label: "Nombre del solicitante" },
    { key: "identificacion", label: "Identificación", hasModal: true },
    { key: "genero", label: "Género" },
    { key: "departamento", label: "Departamento" },
    { key: "municipio", label: "Municipio" },
    { key: "fec_ultimo_año", label: "Fecha de Solicitud" },
    { key: "tipo_solicitud", label: "Tipo de solicitud" },

]