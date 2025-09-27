
import { Col, Form, Row, Container } from "react-bootstrap";
import { Subtitulo } from "react-ecosistema-unp/ui";


import type { InspeccionBlindajeProps } from "../../utils/interfaces"

export const InspeccionVehiculo = ({ detalles, onChange, values, itemName }: InspeccionBlindajeProps) => {
    return (
        <>
            <Subtitulo subtitle={itemName ?? ""} />
            <Row className="mb-4 text-center ">
                <Col md={6}>
                    <label className="input_label_container">DETALLE</label>
                </Col>
                <Col md={6}>
                    <label className="input_label_container">ESTADO/NIVEL</label>
                </Col>
            </Row>

            <Row className="mb-4">
                {detalles.map((detalle) => (
                    <Col md={6} key={detalle.name} className="mb-3">
                        <div
                            style={{
                                border: "1px solid #dee2e6",
                                borderRadius: "0.75rem",
                                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                                padding: "1rem",
                                background: "#fff",
                                width: "100%",
                                height: "100%", // Para que las tarjetas tengan la misma altura
                                boxSizing: "border-box",
                            }}
                        >
                            <Row>
                                <Col className="text-center" md={12}>
                                    <label className="input_label_container mb-2">{detalle.label}</label>
                                </Col>
                                <Col
                                    md={12}
                                    className="d-flex flex-wrap justify-content-center"
                                    style={{ gap: "0.5rem" }}
                                >
                                    {detalle.options.map((option, idx) => (
                                        <Container
                                            className="bg-section-small"
                                            key={option.value}
                                            style={{ flex: "1 1 80px", minWidth: "80px", padding: "0.25rem" }}
                                        >
                                            <Form.Check
                                                inline
                                                label={option.label}
                                                name={detalle.name}
                                                type="radio"
                                                id={`inline-radio-${detalle.name}-${idx}`}
                                                value={option.value}
                                                checked={values?.[detalle.name] === option.value}
                                                onChange={onChange ? (e) => onChange(detalle.name, e.target.value) : undefined}
                                            />
                                        </Container>
                                    ))}
                                </Col>
                            </Row>
                        </div>
                    </Col>
                ))}
            </Row>

        </>
    );
};
