import { Route } from "react-router-dom";
import { ControlYAlistamientoDeVehiculos } from "../pages/ControlYAlistamientoDeVehiculos";
import { FormatoGESP_FT_49_V3 } from "../pages/controlyalistamientodevehiculos/FormatoGESP_FT_49_V3";

export const AdminRoutes = () => (
    <Route path="sesp/">
        <Route path="ctrlyalstmntdevhcls" element={<ControlYAlistamientoDeVehiculos />} />
        <Route path="formato" element={<FormatoGESP_FT_49_V3 />} />
    </Route>
);