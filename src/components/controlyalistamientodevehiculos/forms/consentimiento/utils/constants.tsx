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