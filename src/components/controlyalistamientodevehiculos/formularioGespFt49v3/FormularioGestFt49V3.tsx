import { DatosBasicos } from "../../../shared/DatosBasicos";
import { dataGeneral } from "../../../utils/Constants";
import { Form } from "react-bootstrap";





export const FormularioGestFt49V3 = () => {
    return (
        <Form>
            <DatosBasicos
                title="Datos Basicos del Beneficiario"
                sections={dataGeneral}
            />
        </Form>
    )
}
