import { VentanaLienzo } from "react-ecosistema-unp/shared";
import { Tab, Tabs } from "react-bootstrap";
import { useState } from "react";
import { TablaAlistamientoControlVehiculos } from "../components/tablas/TablaAlistamientoControlVehiculos";


export const ControlYAlistamientoDeVehiculos: React.FC = () => {

    const [activeKey, setActiveKey] = useState<"Alistamiento" | "Rentadora">("Alistamiento");
    const breadcrumbItems = [
        { label: "Inicio", link: "/" },
        { label: "Administrador de equipos" }
    ];

    return (
        <>
            <VentanaLienzo items={breadcrumbItems}>
                <Tabs
                    id="bandeja-roles-tabs"
                    activeKey={activeKey}
                    onSelect={(k) => setActiveKey(k as "Alistamiento" | "Rentadora")}
                    className="mb-3"
                >

                    <Tab eventKey="Alistamiento" title="Historial de Vehículo">
                        <TablaAlistamientoControlVehiculos />
                    </Tab>
                    <Tab disabled={true} eventKey="Rentadora" title="Rentadora">
                        <h1>Revisores</h1>
                    </Tab>
                </Tabs>

            </VentanaLienzo>
        </>
    )
}
