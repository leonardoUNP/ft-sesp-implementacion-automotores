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
import { InspeccionVehiculo } from "../forms/consentimiento/components/inspeccionVehiculo/InspeccionVehiculo";
import { GiLayeredArmor } from "react-icons/gi";
// import { detallesBlindaje, sistemaElectrico } from "../forms/consentimiento/utils/constants";
import { inspeccionVehiculo } from "../forms/consentimiento/utils/constants";
import Carrusel from "../../../shared/carrusel";
import { DescripcionBlindaje } from "../forms/consentimiento/components/descripcionBlindaje/DescripcionBlindaje";






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






    // Maneja los cambios en los detalles de cada sección
    const handleDetalleChange = (section: string, name: string, value: string) => {
        setFormData((prev: any) => ({
            ...prev,
            [section]: {
                ...prev[section],
                [name]: value
            }
        }));
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
                <ExpandableCard title="Description del vehículo">
                    <DescripcionVehiculo
                        formData={formData}
                        handleChange={handleChange}
                        handleFieldChange={handleFieldChange}
                        updateFormData={(field, value) => setFormData((prevState: any) => ({ ...prevState, [field]: value }))}
                    />
                </ExpandableCard>
            </>

        )
    }, {
        label: 'Descripción de blindaje',
        icon: FaUserShield,
        content: (
            <>
                <ExpandableCard title="Description del vehículo">
                    <DescripcionBlindaje
                        formData={formData}
                        handleChange={handleChange}
                    />
                </ExpandableCard>
            </>

        )
    }, {
        label: "Inspección de Vehiculo",
        icon: GiLayeredArmor,
        content: (
            <ExpandableCard title="Inspección de vehículo">
                <Carrusel delay={500} goToLastSlideOnChildrenCountChange={true}>
                    {inspeccionVehiculo.map((seccion) => (
                        <div key={seccion.item} className="mb-3 p-3 border border-gray-300 rounded-3">
                            <h5 className="mb-3">{seccion.item}</h5>
                            <InspeccionVehiculo
                                detalles={seccion.detalles}
                                values={formData[seccion.item] || {}}
                                onChange={(name, value) => handleDetalleChange(seccion.item, name, value)}
                            />
                        </div>
                    ))}
                </Carrusel>
            </ExpandableCard>
        )
    },
    ]

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