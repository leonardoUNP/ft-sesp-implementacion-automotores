import { DatosBasicos } from "../../../shared/DatosBasicos";
import { dataGeneral } from "../../../utils/Constants";
import { Form } from "react-bootstrap";
import { FaUserShield } from "react-icons/fa";
import { ExpandableCard } from "../../../shared/ExpandableCard";
import { DatosComplementarios } from "../forms/consentimiento/components/DatosComplemetarios";
import { useState } from "react";
import { initialConsentimientoData } from "../forms/consentimiento/utils/initialState";
import { useNavigate } from "react-router-dom";
import { Paginador } from 'react-ecosistema-unp/ui'
import Swal from "sweetalert2";
import { DescripcionVehiculo } from "../forms/consentimiento/components/DescripcionVehiculo";





export const FormularioGestFt49V3 = () => {
    const [formData, setFormData] = useState(initialConsentimientoData);
    const [_validated, setValidated] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<any>) => {
        const { name, value, type, checked } = e.target;
        const fieldValue = type === "checkbox" || type === "switch" ? checked : value;

        // Verificamos si es un campo anidado
        if (name.includes(".")) {
            const [parent, child] = name.split(".");

            setFormData((prevState: any) => ({
                ...prevState,
                [parent]: {
                    ...prevState[parent],
                    [child]: fieldValue,
                },
            }));
        } else {
            setFormData((prevState: any) => ({
                ...prevState,
                [name]: fieldValue,
            }));
        }
    };

    const handleFieldChange = (e: React.ChangeEvent<any>, location: string) => {
        const { name, value, type, checked } = e.target;
        const fieldValue = type === "checkbox" ? checked : value;
        setFormData((prevState: any) => ({
            ...prevState,
            [location + "Fields"]: {
                ...prevState[location + "Fields"],
                [name]: fieldValue,
            },
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.stopPropagation();
        } else {
            Swal.fire({
                icon: 'success',
                title: 'Formulario enviado',
                text: 'El formulario ha sido enviado con éxito.',
                confirmButtonColor: '#28a745'
            }).then(() => {
                console.log('Formulario enviado:', formData)
                navigate('/')
            })
        }
        setValidated(true);
    };



    const paginas = [{
        label: 'Información General',
        icon: FaUserShield,
        content: (
            <>
                <ExpandableCard title="Información general del Consentimiento">
                    <DatosComplementarios
                        formData={formData}
                        handleChange={handleChange}
                        handleFieldChange={handleFieldChange}
                        updateFormData={(field, value) => setFormData((prevState: any) => ({ ...prevState, [field]: value }))}
                    />
                </ExpandableCard>
                <ExpandableCard title="DESCRIPCIÓN DEL VEHÍCULO">
                    <DescripcionVehiculo />
                </ExpandableCard>
            </>

        )
    }]

    return (
        <div>
            <DatosBasicos
                title="Datos Basicos del Beneficiario"
                sections={dataGeneral}
            />
            <Form onSubmit={handleSubmit}>
                <Paginador stepContent={paginas} canJump onSubmit={handleSubmit} />
            </Form>
        </div>
    );
}
