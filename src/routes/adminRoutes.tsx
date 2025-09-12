import { Route } from "react-router-dom";
import { ControlYAlistamientoDeVehiculos } from "../pages/ControlYAlistamientoDeVehiculos";

export const AdminRoutes = () => (
    <Route path="sesp/">
        <Route path="ctrlyalstmntdevhcls" element={<ControlYAlistamientoDeVehiculos />} />
    </Route>
);