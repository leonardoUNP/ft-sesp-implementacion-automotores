import { ContenidoModal } from "react-ecosistema-unp/ui"
import type { AnalistaProps } from "../../utils/Interfaces";
import { FaCar } from "react-icons/fa";
import SeccionDesplegable from "../../shared/SeccionDesplegable"



export const InfoResolucion = ({ data }: AnalistaProps) => {

    const datosSolicitudVehiculo = [
        { label: 'Fecha Resolución', value: data.fec_resolucion },
        { label: 'Día Solicitud de Vehículo', value: data.dia_solicitud },
        { label: 'Tipo de Vehículo', value: data.tipo_vehiculo },
        { label: 'Tipo de esquema', value: data.tipo_esquema },
        { label: 'Dia de presentación personal de protección', value: data.fecha_ingreso_ser },

    ]

    return (
        <ContenidoModal title={data.numero_resolucion}>


            <SeccionDesplegable
                titulo='Solicitud de Vehículo'
                icono={FaCar}
                datos={datosSolicitudVehiculo}
            />

        </ContenidoModal>
    )
}
