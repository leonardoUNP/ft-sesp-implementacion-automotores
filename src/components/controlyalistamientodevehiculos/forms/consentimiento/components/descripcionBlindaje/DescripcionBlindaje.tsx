
import { Subtitulo } from "react-ecosistema-unp/ui";
import { Col, Form, Row } from "react-bootstrap";
import { FaCar } from "react-icons/fa";
import type { DescripcionBlindajeProps } from "../../utils/interfaces";




export const DescripcionBlindaje = ({ formData, handleChange }: DescripcionBlindajeProps) => {
    return (
        <>
            <Subtitulo subtitle="Información detallada de blindaje" icon={FaCar} />
            <Row className="mb-4">
                <Col md={4}>
                    <Form.Group controlId="inclusion_blindaje" className="d-flex flex-column align-items-center">
                        <Form.Label>¿Incluye blindaje?</Form.Label>
                        <div>
                            <Form.Check
                                type="radio"
                                label="Sí"
                                name="blindajeDescription.inclusion_blindaje"
                                value="si"
                                checked={formData.blindajeDescription?.inclusion_blindaje === "si"}
                                onChange={handleChange}
                                inline
                            />
                            <Form.Check
                                type="radio"
                                label="No"
                                name="blindajeDescription.inclusion_blindaje"
                                value="no"
                                checked={formData.blindajeDescription?.inclusion_blindaje === "no"}
                                onChange={handleChange}
                                inline
                            />
                        </div>
                    </Form.Group>
                </Col>
                <Col md={4}>
                    <Form.Group controlId="varilla_blindaje" className="d-flex flex-column align-items-center">
                        <Form.Label>Varilla Blindaje</Form.Label>
                        <div>
                            <Form.Check
                                type="radio"
                                label="Sí"
                                name="blindajeDescription.varilla_blindaje"
                                value="si"
                                checked={formData.blindajeDescription?.varilla_blindaje === "si"}
                                onChange={handleChange}
                                inline
                            />
                            <Form.Check
                                type="radio"
                                label="No"
                                name="blindajeDescription.varilla_blindaje"
                                value="no"
                                checked={formData.blindajeDescription?.varilla_blindaje === "no"}
                                onChange={handleChange}
                                inline
                            />
                        </div>
                    </Form.Group>
                </Col>
                <Col md={4}>
                    <Form.Group controlId="resolucion_blindaje">
                        <Form.Label>Resolución de blindaje #</Form.Label>
                        <Form.Control
                            type="text"
                            name="blindajeDescription.resolucion_blindaje"
                            value={formData.blindajeDescription?.resolucion_blindaje || ""}
                            onChange={handleChange}
                            placeholder="Ingresa el número de resolución"
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Row className="mb-4">
                <Col md={4}>
                    <Form.Group controlId="fecha_resolucion">
                        <Form.Label>Fecha de resolución</Form.Label>
                        <Form.Control
                            type="text"
                            name="blindajeDescription.fecha_resolucion"
                            value={formData.blindajeDescription?.fecha_resolucion || ""}
                            onChange={handleChange}
                            placeholder="Ingresa la fecha de resolución"
                        />
                    </Form.Group>
                </Col>
                <Col md={4}>
                    <Form.Group controlId="autorizacion_blindaje_uso">
                        <Form.Label>Autorización de blindaje y uso</Form.Label>
                        <Form.Control
                            type="text"
                            name="blindajeDescription.autorizacion_blindaje_uso"
                            value={formData.blindajeDescription?.autorizacion_blindaje_uso || ""}
                            onChange={handleChange}
                            placeholder="Ingresa la autorización"
                        />
                    </Form.Group>
                </Col>
                <Col md={4}>
                    <Form.Group controlId="concuerda_licencia_transito" className="d-flex flex-column align-items-center">
                        <Form.Label>Concuerda con licencia de tránsito</Form.Label>
                        <div>
                            <Form.Check
                                type="radio"
                                label="Sí"
                                name="blindajeDescription.concuerda_licencia_transito"
                                value="si"
                                checked={formData.blindajeDescription?.concuerda_licencia_transito === "si"}
                                onChange={handleChange}
                                inline
                            />
                            <Form.Check
                                type="radio"
                                label="No"
                                name="blindajeDescription.concuerda_licencia_transito"
                                value="no"
                                checked={formData.blindajeDescription?.concuerda_licencia_transito === "no"}
                                onChange={handleChange}
                                inline
                            />
                        </div>
                    </Form.Group>
                </Col>
            </Row>
        </>
    );
}
