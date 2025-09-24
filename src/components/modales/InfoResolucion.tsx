import { ContenidoModal } from "react-ecosistema-unp/ui"
import type { AnalistaProps } from "../../utils/Interfaces";
import { FaCar } from "react-icons/fa";
import SeccionDesplegable from "../../shared/SeccionDesplegable"



export const InfoResolucion = ({ data }: AnalistaProps) => {

    const datosSolicitudVehiculo =
        [
            { label: 'Fecha Resolución', value: data.fec_resolucion },
            { label: 'Día Solicitud de Vehículo', value: data.dia_solicitud },
            { label: 'Tipo de Vehículo', value: data.tipo_vehiculo },
            { label: 'Dia de presentación personal de protección', value: data.fecha_ingreso_ser },
            { label: 'Medida', value: data.tipo_medida },
            { label: 'Tipo de esquema', value: data.tipo_esquema },
            { label: 'Vehiículos Asignados', value: data.vehiculos_asignados },
            { label: 'nivel_blindaje', value: data.nivel_blindaje },
            { label: 'Numero Personal de Protección', value: data.numero_personal_proteccion },
            { label: 'Apoyo rehubicacion temporal', value: data.apoyo_rehubicacion_temporal },
            { label: 'Enfoque de genero', value: data.enfoque_genero },
            { label: 'Subpoblación', value: data.sub_poblacion }
            // { label: 'Sub-Tipo', value: data.sub_tipo },
            // { label: 'componente #1', value: data.componente_1 },
            // { label: 'nivel_blindaje', value: data.nivel_blindaje },
            // { label: 'componente #2', value: data.componente_2 },
            // { label: 'componente #3', value: data.componente_3 },
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
