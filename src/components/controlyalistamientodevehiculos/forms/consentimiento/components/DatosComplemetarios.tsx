import { useEffect, useState } from "react";
import type { IDatosComplementariosProps } from "../utils/interfaces"
import { fetchDepartamentos, fetchMunicipios } from "../../../../../services/ubicacion";
import { Subtitulo } from "react-ecosistema-unp/ui";
import { Col, Form, Row } from "react-bootstrap";
import { RiUserLocationFill } from "react-icons/ri";
import CamposRurales from "../../../../../shared/camposRurales";
import CamposUrbanos from "../../../../../shared/camposUrbanos"
import { opcionesZona, SelectField } from "../utils/constants";

export const DatosComplementarios: React.FC<IDatosComplementariosProps> = ({ formData, handleChange, handleFieldChange, updateFormData }) => {

    const [departamentos, setDepartamentos] = useState<{ id: number; name: string }[]>([]);
    const [municipios, setMunicipios] = useState<{ id: number; name: string }[]>([]);
    const [ubicacion, setUbicacion] = useState<string>(formData.ubicacion);

    // Fetch Departamentos
    useEffect(() => {
        const fetchDepartamentosData = async () => {
            try {
                const data = await fetchDepartamentos();
                setDepartamentos(data);
            } catch (error) {
                console.error("Error al obtener departamentos:", error);
            }
        };
        fetchDepartamentosData();
    }, []);

    // Fetch Municipios
    useEffect(() => {
        if (formData.departamento) {
            const fetchMunicipiosData = async () => {
                try {
                    const data = await fetchMunicipios(formData.departamento);
                    setMunicipios(data);
                } catch (error) {
                    console.error("Error al obtener municipios de :", error);
                }
            };
            fetchMunicipiosData();
        } else {
            setMunicipios([]);
        }
    }, [formData.departamento]);

    //Handles
    const handleDepartamentoChange = (selected: any) => {
        updateFormData("departamento", selected ? selected.value : "");
        updateFormData("municipio", "");
        setMunicipios([]);
    };

    const handleMunicipioChange = (selected: any) => {
        updateFormData("municipio", selected ? selected.value : "");
    };

    const handleUbicacionChange = (selected: any) => {
        const value = selected ? selected.value : "";
        setUbicacion(value);
        updateFormData("ubicacion", value);
    };

    const opcionesDepartamentos = departamentos.map(dep => ({ label: dep.name, value: dep.id }));
    const opcionesMunicipios = municipios.map(mun => ({ label: mun.name, value: mun.id }));

    return (
        <>
            <Subtitulo subtitle="Fecha y lugar de diligenciamiento" icon={RiUserLocationFill} />
            <Row className="mb-3">
                <Col md={6}>
                    <Form.Group controlId="fechaHora">
                        <Form.Label>Fecha y hora</Form.Label>
                        <Form.Control
                            required
                            type="datetime-local"
                            name="fechaHora"
                            value={formData.fechaHora}
                            onChange={handleChange}
                            placeholder="Ingresa la fecha y la hora"
                        />
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group controlId="departamento">
                        <SelectField
                            id="departamento"
                            label="Departamento"
                            options={opcionesDepartamentos}
                            value={opcionesDepartamentos.find((opt: any) => opt.value === formData.departamento) || null}
                            onChange={handleDepartamentoChange}
                            placeholder="Selecciona un departamento"
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col md={6}>
                    <Form.Group controlId="municipio">
                        <SelectField
                            id="municipio"
                            label="Ciudad/Municipio"
                            options={opcionesMunicipios}
                            value={formData.municipio ? opcionesMunicipios.find((opt: any) => opt.value === formData.municipio) : null}
                            onChange={handleMunicipioChange}
                            placeholder="Selecciona un municipio"
                            isDisabled={!municipios.length}
                        />
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group controlId="ubicacion">
                        <SelectField
                            id="ubicacion"
                            label="Zona"
                            options={opcionesZona}
                            value={opcionesZona.find(opt => opt.value === ubicacion)}
                            onChange={handleUbicacionChange}
                            placeholder="Selecciona la ubicación"
                        />
                    </Form.Group>
                </Col>
            </Row>
            {ubicacion === "rural" && (
                <CamposRurales formData={formData.ruralFields} handleFieldChange={handleFieldChange} formDataField="rural" />
            )}
            {ubicacion === "urbana" && (
                <CamposUrbanos formData={formData.urbanaFields} handleFieldChange={handleFieldChange} formDataField="urbana" />
            )}
        </>
    )
}