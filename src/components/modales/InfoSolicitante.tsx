import React from 'react'
import type { AnalistaProps } from "../../utils/Interfaces"
import { ContenidoModal } from "react-ecosistema-unp/ui"
import SeccionDesplegable from "../../shared/SeccionDesplegable"
import { FaUser } from 'react-icons/fa6'
import { FaCar } from "react-icons/fa";


export const InfoSolicitante: React.FC<AnalistaProps> = ({ data }) => {


    const datosComplementarios = [
        { label: 'Correo electrónico', value: data.correo_electronico },
        { label: 'Celular', value: data.celular },
        { label: 'Fecha de último año', value: data.fec_ultimo_año },
    ]

    const datosSolicitudVehiculo = [
        { label: 'Fecha Resolución', value: data.fec_resolucion },
        { label: 'Día Solicitud de Vehículo', value: data.dia_solicitud },
        { label: 'Tipo de Vehículo', value: data.tipo_vehiculo },
        { label: 'Tipo de esquema', value: data.tipo_esquema },
        { label: 'Dia de presentación personal de protección', value: data.fecha_ingreso_ser },

    ]
    return (
        <ContenidoModal title={data.nombre_analista}>
            <SeccionDesplegable
                titulo='Datos complementarios'
                icono={FaUser}
                datos={datosComplementarios}
            />

            <SeccionDesplegable
                titulo='Solicitud de Vehículo'
                icono={FaCar}
                datos={datosSolicitudVehiculo}
            />

        </ContenidoModal>
    )
}
