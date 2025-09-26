
import { Col, Form, Row, Container } from "react-bootstrap";
import { Subtitulo } from "react-ecosistema-unp/ui";
import { GiLevelEndFlag } from "react-icons/gi";

import type { DescripcionBlindajeProps } from "../../utils/interfaces"






export const DescripcionBlindaje = ({ detalles, onChange, values }: DescripcionBlindajeProps) => {
    return (
        <>
            <Subtitulo subtitle=" ITEM" icon={GiLevelEndFlag} />
            <Row className="mb-4 text-center ">
                <Col md={4}>
                    <label className="input_label_container">NIVELES</label>
                </Col>
                <Col md={8}>
                    <label className="input_label_container">ESTADO/NIVEL</label>
                </Col>
            </Row>

            {detalles.map((detalle) => (
                <Row className="mb-4" key={detalle.name}>
                    <Col md={12}>
                        <div
                            style={{
                                border: "1px solid #dee2e6",
                                borderRadius: "0.75rem",
                                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                                padding: "1rem",
                                background: "#fff",
                            }}
                        >
                            <Row>
                                <Col className="text-center" md={4}>
                                    <label className="input_label_container">{detalle.label}</label>
                                </Col>
                                <Col className="d-flex justify-content-around" md={8}>
                                    {detalle.options.map((option, idx) => (
                                        <Container className="bg-section-small">
                                            <Form.Check
                                                key={option.value}
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
                </Row>
            ))}
        </>
    );
};
