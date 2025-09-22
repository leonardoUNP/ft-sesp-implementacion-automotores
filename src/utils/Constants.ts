import dataReparto from '../services/dataReparto.json'
import { FaUserShield, FaUserEdit } from "react-icons/fa";
import type { Section } from '../models/formularioGespFt49V3/IDatosBasicos';

export const datosEvaluado = [
    [
        {
            label: "Nombre",
            value: [
                dataReparto.primerNombre,
                dataReparto.segundoNombre,
                dataReparto.primerApellido,
                dataReparto.segundoApellido,
            ]
                .filter(Boolean)
                .join(" "),
        },
        {
            label: "Identificación",
            value: `${dataReparto.tipoIdentificacion} ${dataReparto.numeroIdentificacion}`,
        },
        {
            label: "Tipo de Evaluación",
            value: dataReparto.tipoEstudio,
        },
    ],
    [
        { label: "Fecha Solicitud UNP", value: dataReparto.fechaSolicitudUNP },
        { label: "Fecha Recepción SESP", value: dataReparto.fechaReciboER },
        { label: "Fecha Asignación OT", value: dataReparto.fechaExpedicion },
    ],
];

export const datosAnalista = [
    [
        { label: "Nombre", value: dataReparto.analistaNombre },
        {
            label: "Fecha de ingreso UNP",
            value: dataReparto.analistaFechaIngresoUNP,
        },
        {
            label: "Tipo de vinculación",
            value: dataReparto.analistaTipoVinculacion,
        },
    ],
];



export const dataGeneral: Section[] = [
    {
        title: "Datos básicos del Evaluado/a",
        icon: FaUserShield,
        items: datosEvaluado,
    },
    {
        title: "Datos del Analista de Riesgo",
        icon: FaUserEdit,
        items: datosAnalista,
    },
];

export { dataReparto }