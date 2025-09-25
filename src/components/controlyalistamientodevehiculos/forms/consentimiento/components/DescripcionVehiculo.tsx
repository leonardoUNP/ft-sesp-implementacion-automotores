import { Subtitulo } from "react-ecosistema-unp/ui";
import type { IDatosVehiculeDescription } from "../utils/interfaces";
import { Col, Form, Row } from "react-bootstrap";
import { FaCar } from "react-icons/fa";


export const DescripcionVehiculo: React.FC<IDatosVehiculeDescription> = ({ formData, handleChange }) => {
    return (
        <>
            <Subtitulo subtitle=" Infomación detallada de vehículo" icon={FaCar} />
            <Row className="mb-4">
                <Col md={4}>
                    <Form.Group controlId="placa">
                        <Form.Label>Placa del Vehículo</Form.Label>
                        <Form.Control
                            type="text"
                            name="vehiculeDescription.placa"
                            value={formData.vehiculeDescription.placa}
                            onChange={handleChange}
                            placeholder="Ingresa el número de placa"
                            maxLength={6}
                        />
                    </Form.Group>
                </Col>
                <Col md={4}>
                    <Form.Group controlId="marca">
                        <Form.Label>Marca del Vehículo</Form.Label>
                        <Form.Control
                            type="text"
                            name="vehiculeDescription.marca"
                            value={formData.vehiculeDescription.marca}
                            onChange={handleChange}
                            placeholder="Ingresa la marca"
                        />
                    </Form.Group>
                </Col>
                <Col md={4}>
                    <Form.Group controlId="linea">
                        <Form.Label>Linea del Vehículo</Form.Label>
                        <Form.Control
                            type="text"
                            name="vehiculeDescription.linea"
                            value={formData.vehiculeDescription.linea}
                            onChange={handleChange}
                            placeholder="Ingresa la linea"
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Row className="mb-4">
                <Col md={4}>
                    <Form.Group controlId="modelo">
                        <Form.Label>Modelo del Vehículo</Form.Label>
                        <Form.Control
                            type="text"
                            name="vehiculeDescription.modelo"
                            value={formData.vehiculeDescription.modelo}
                            onChange={handleChange}
                            placeholder="Ingresa el modelo"
                        />
                    </Form.Group>
                </Col>
                <Col md={4}>
                    <Form.Group controlId="Cilindraje">
                        <Form.Label>Cilindraje del Vehículo</Form.Label>
                        <Form.Control
                            type="text"
                            name="vehiculeDescription.cilindraje"
                            value={formData.vehiculeDescription.cilindraje}
                            onChange={handleChange}
                            placeholder="Ingresa el cilindraje"
                        />
                    </Form.Group>
                </Col>
                <Col md={4}>
                    <Form.Group controlId="color">
                        <Form.Label>Color del Vehículo</Form.Label>
                        <Form.Control
                            type="text"
                            name="vehiculeDescription.color"
                            value={formData.vehiculeDescription.color}
                            onChange={handleChange}
                            placeholder="Ingresa el color"
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Row className="mb-4">
                <Col md={4}>
                    <Form.Group controlId="clase_vehiculo">
                        <Form.Label>Clase del Vehículo</Form.Label>
                        <Form.Control
                            type="text"
                            name="vehiculeDescription.clase_vehiculo"
                            value={formData.vehiculeDescription.clase_vehiculo}
                            onChange={handleChange}
                            placeholder="Ingresa la clase"
                        />
                    </Form.Group>
                </Col>
                <Col md={4}>
                    <Form.Group controlId="carroceria">
                        <Form.Label>Carroceria del Vehículo</Form.Label>
                        <Form.Control
                            type="text"
                            name="vehiculeDescription.tipo_carroceria"
                            value={formData.vehiculeDescription.tipo_carroceria}
                            onChange={handleChange}
                            placeholder="Ingresa la carroceria"
                        />
                    </Form.Group>
                </Col>
                <Col md={4}>
                    <Form.Group controlId="combustible">
                        <Form.Label>Combustible del Vehículo</Form.Label>
                        <Form.Control
                            type="text"
                            name="vehiculeDescription.combustible"
                            value={formData.vehiculeDescription.combustible}
                            onChange={handleChange}
                            placeholder="Ingresa el tipo de combustible"
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Row className="mb-4">
                <Col md={4}>
                    <Form.Group controlId="capacidad">
                        <Form.Label>Capacidad del Vehículo</Form.Label>
                        <Form.Control
                            type="text"
                            name="vehiculeDescription.capacidad"
                            value={formData.vehiculeDescription.capacidad}
                            onChange={handleChange}
                            placeholder="Ingresa la capacidad"
                        />
                    </Form.Group>
                </Col>
                <Col md={4}>
                    <Form.Group controlId="potencia">
                        <Form.Label>Potencia del Vehículo</Form.Label>
                        <Form.Control
                            type="text"
                            name="vehiculeDescription.potencia"
                            value={formData.vehiculeDescription.potencia}
                            onChange={handleChange}
                            placeholder="Ingresa la potencia"
                        />
                    </Form.Group>
                </Col>
                <Col md={4}>
                    <Form.Group controlId="numero_puertas">
                        <Form.Label>Numero de puertas del Vehículo</Form.Label>
                        <Form.Control
                            type="text"
                            name="vehiculeDescription.numero_puertas"
                            value={formData.vehiculeDescription.numero_puertas}
                            onChange={handleChange}
                            placeholder="Ingresa el numero de puertas"
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Row className="mb-4">
                <Col md={4}>
                    <Form.Group controlId="licencia_trancito">
                        <Form.Label>Licencia de transito del Vehículo</Form.Label>
                        <Form.Control
                            type="text"
                            name="vehiculeDescription.licencia_trancito"
                            value={formData.vehiculeDescription.licencia_trancito}
                            onChange={handleChange}
                            placeholder="Ingresa la licencia de trancito"
                        />
                    </Form.Group>
                </Col>
                <Col md={4}>
                    <Form.Group controlId="fecha_vencimiento_socat">
                        <Form.Label>Fecha vencimiento SOAT</Form.Label>
                        <Form.Control
                            type="text"
                            name="vehiculeDescription.fecha_vencimiento_socat"
                            value={formData.vehiculeDescription.fecha_vencimiento_socat}
                            onChange={handleChange}
                            placeholder="Ingresa la Fecha de vencimiento del SOAT"
                        />
                    </Form.Group>
                </Col>
                <Col md={4}>
                    <Form.Group controlId="aseguradora_soat">
                        <Form.Label>Aseguradora SOAT</Form.Label>
                        <Form.Control
                            type="text"
                            name="vehiculeDescription.aseguradora_soat"
                            value={formData.vehiculeDescription.aseguradora_soat}
                            onChange={handleChange}
                            placeholder="Ingresa la aseguradora del SOAT"
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Row className="mb-4">
                <Col md={6}>
                    <Form.Group controlId="kilometraje_actual">
                        <Form.Label>Kilometraje actual</Form.Label>
                        <Form.Control
                            type="text"
                            name="vehiculeDescription.kilometraje_actual"
                            value={formData.vehiculeDescription.kilometraje_actual}
                            onChange={handleChange}
                            placeholder="Ingresa el kilometraje actual"
                        />
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group controlId="kilometraje_debe_mantenimiento">
                        <Form.Label>Kilometraje en el que se debe hacer mantenimiento</Form.Label>
                        <Form.Control
                            type="text"
                            name="vehiculeDescription.kilometraje_debe_mantenimiento"
                            value={formData.vehiculeDescription.kilometraje_debe_mantenimiento}
                            onChange={handleChange}
                            placeholder="Ingresa la Fecha de vencimiento del SOAT"
                        />
                    </Form.Group>
                </Col>

            </Row>

        </>


    )
}
