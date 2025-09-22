import { TablaRegistros } from "react-ecosistema-unp/tables"
import { InfoSolicitante } from "../modales/InfoSolicitante"
import data from '../../services/HistorialDeVehiculos.json'
import { TipoSolicitud } from "../../shared/TipoDeSolicitud"
import type { Analista } from "../../utils/Interfaces"
import { InfoResolucion } from "../modales/InfoResolucion"



TablaRegistros
export const TablaAlistamientoControlVehiculos = () => {

    const columnsHistorialDeVehiculos: any[] = [
        {
            key: "tipo_solicitud",
            label: "Gestión",
            renderComponent: (rowData: Analista) => (
                <TipoSolicitud solicitud={rowData.tipo_solicitud ?? ""} />
            ),
        },
        { key: "numero_resolucion", label: "Número Resolución", hasModal: true },
        { key: "nombre_analista", label: "Nombre del Beneficiario" },
        { key: "identificacion", label: "Identificación", hasModal: true },
        { key: "tipo_vehiculo", label: "Tipo de Vehiculo" },
        { key: "departamento", label: "Departamento" },
        { key: "municipio", label: "Municipio" },
    ];

    const renderModalContent = (row: any, column: any) => {
        switch (column.key) {
            case "identificacion":
                return <InfoSolicitante data={row}></InfoSolicitante>;
                break;
            case "numero_resolucion":
                return <InfoResolucion data={row}></InfoResolucion>;
                break;
                return (
                    <p className="text-center text-muted">
                        No hay información adicional disponible.
                    </p>
                );
        }
    };


    return (

        <TablaRegistros
            columns={columnsHistorialDeVehiculos}
            data={data}
            title="Subdirección de Especializada de Seguridad y Protección"
            subtitle="Control y Alistamiento de Vehículos"
            enableColumnSearch={true}
            enableColumnSorter={true}
            renderModalContent={renderModalContent}
        >
        </TablaRegistros>
    )
}
