import { TablaRegistros } from "react-ecosistema-unp/tables"
import { columnsHistorialDeVehiculos } from "../../utils/Constants"
import { InfoSolicitante } from "../modales/InfoSolicitante"
import data from '../../services/HistorialDeVehiculos.json'

TablaRegistros
export const TablaAlistamientoControlVehiculos = () => {

    const renderModalContent = (row: any, column: any) => {
        switch (column.key) {
            case "identificacion":
                return <InfoSolicitante data={row}></InfoSolicitante>;
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
