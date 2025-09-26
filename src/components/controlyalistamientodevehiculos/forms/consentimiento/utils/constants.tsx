import { Form } from "react-bootstrap";
import Select from "react-select";
import type { SelectFieldProps } from "./interfaces";

export const opcionesZona = [
    { label: "Rural", value: "rural" },
    { label: "Urbana", value: "urbana" },
];

export const SelectField: React.FC<SelectFieldProps> = ({
    id,
    label,
    options,
    value,
    onChange,
    placeholder,
    isClearable = true,
    isDisabled = false,
}) => (
    <Form.Group controlId={id}>
        <Form.Label>{label}</Form.Label>
        <Select
            options={options}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            isClearable={isClearable}
            isDisabled={isDisabled}
            menuPortalTarget={document.body}
            styles={{ menuPortal: (base) => ({ ...base, zIndex: 9999 }) }}
        />
    </Form.Group>
);


// Parte del fomulario Inspeccion de vehiculo item NIVELES
export const detallesBlindaje = [
    {
        label: "Agua limpiabrisas",
        name: "aguaLimpiabrisas",
        options: [
            { label: "1/4", value: "1/4" },
            { label: "1/2", value: "1/2" },
            { label: "3/4", value: "3/4" },
            { label: "Full", value: "Full" },
        ],
    },
    {
        label: "Refrigerante",
        name: "refrigerante",
        options: [
            { label: "1/4", value: "1/4" },
            { label: "1/2", value: "1/2" },
            { label: "3/4", value: "3/4" },
            { label: "Full", value: "Full" },
        ],
    },
    {
        label: "Aceite motor",
        name: "aceiteMotor",
        options: [
            { label: "1/4", value: "1/4" },
            { label: "1/2", value: "1/2" },
            { label: "3/4", value: "3/4" },
            { label: "Full", value: "Full" },
        ],
    },
    {
        label: "Líquido frenos",
        name: "liquidoFrenas",
        options: [
            { label: "1/4", value: "1/4" },
            { label: "1/2", value: "1/2" },
            { label: "3/4", value: "3/4" },
            { label: "Full", value: "Full" },
        ],
    },
    {
        label: "Aceite hidráulico",
        name: "aceiteHidraulico",
        options: [
            { label: "1/4", value: "1/4" },
            { label: "1/2", value: "1/2" },
            { label: "3/4", value: "3/4" },
            { label: "Full", value: "Full" },
            { label: "N/A", value: "N/A" },
        ],
    },
    {
        label: "Combustible",
        name: "combustible",
        options: [
            { label: "1/4", value: "1/4" },
            { label: "1/2", value: "1/2" },
            { label: "3/4", value: "3/4" },
            { label: "Full", value: "Full" },
        ],
    },
];
// Parte del fomulario Inspeccion de vehiculo item ELEMENTOS ELÉCTRICOS Y/O ELECTRÓNICOS
export const sistemaElectrico = [
    {
        label: "Cocuyos",
        name: "cocuyos",
        options: [
            { label: "B", value: "B" },
            { label: "R", value: "R" },
            { label: "M", value: "M" },
        ],
    },
    {
        label: "Espejos eléctricos",
        name: "espejosElectricos",
        options: [
            { label: "B", value: "B" },
            { label: "R", value: "R" },
            { label: "M", value: "M" },
            { label: "N/A", value: "N/A" },
        ],
    },
    {
        label: "Unidades",
        name: "unidades",
        options: [
            { label: "B", value: "B" },
            { label: "R", value: "R" },
            { label: "M", value: "M" },
        ],
    },
    {
        label: "Luces de freno",
        name: "lucesFreno",
        options: [
            { label: "B", value: "B" },
            { label: "R", value: "R" },
            { label: "M", value: "M" },
        ],
    },
    {
        label: "Luz de reversa",
        name: "luzReversa",
        options: [
            { label: "B", value: "B" },
            { label: "R", value: "R" },
            { label: "M", value: "M" },
        ],
    },
    {
        label: "Exploradoras",
        name: "exploradoras",
        options: [
            { label: "B", value: "B" },
            { label: "R", value: "R" },
            { label: "M", value: "M" },
            { label: "N/A", value: "N/A" },
        ],
    },
    {
        label: "Sensor de reversa",
        name: "sensorReversa",
        options: [
            { label: "B", value: "B" },
            { label: "R", value: "R" },
            { label: "M", value: "M" },
            { label: "N/A", value: "N/A" },
        ],
    },
    {
        label: "Direccionales",
        name: "direccionales",
        options: [
            { label: "B", value: "B" },
            { label: "R", value: "R" },
            { label: "M", value: "M" },
        ],
    },
    {
        label: "Luces de parqueo",
        name: "lucesParqueo",
        options: [
            { label: "B", value: "B" },
            { label: "R", value: "R" },
            { label: "M", value: "M" },
        ],
    },
    {
        label: "Elevavidrios",
        name: "elevavidrios",
        options: [
            { label: "B", value: "B" },
            { label: "R", value: "R" },
            { label: "M", value: "M" },
        ],
    },
];