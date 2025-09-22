import { DatosBasicos } from "../../../shared/DatosBasicos";
import { dataGeneral, dataReparto } from "../../../utils/Constants";
import { Form } from "react-bootstrap";





export const FormularioGestFt49V3 = () => {
    return (
        <Form>
            <DatosBasicos
                title="Datos Basicos del Beneficiario"
                otNumber={dataReparto.ot}
                sections={dataGeneral}
            />
        </Form>
    )
}
