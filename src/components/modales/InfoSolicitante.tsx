import React from 'react'
import type { AnalistaProps } from "../../utils/Interfaces"
import { ContenidoModal } from "react-ecosistema-unp/ui"
import SeccionDesplegable from "../../shared/SeccionDesplegable"
import { FaUser } from 'react-icons/fa6'



export const InfoSolicitante: React.FC<AnalistaProps> = ({ data }) => {


    const datosComplementarios = [
        { label: 'Correo electrónico', value: data.correo_electronico },
        { label: 'Celular', value: data.celular },
        { label: 'Fecha de último año', value: data.fec_ultimo_año },
    ]


    return (
        <ContenidoModal title={data.nombre_analista}>
            <SeccionDesplegable
                titulo='Datos complementarios'
                icono={FaUser}
                datos={datosComplementarios}
            />
        </ContenidoModal>
    )
}
