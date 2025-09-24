import type { ChangeEvent } from "react";
export interface IDatosComplementariosProps {
    formData: {
        fechaHora: string;
        departamento: string;
        municipio: string;
        ubicacion: string;
        ruralFields: {};
        urbanaFields: {};
    };
    handleChange: (e: ChangeEvent<any>) => void;
    handleFieldChange: (e: React.ChangeEvent<any>, location: string) => void;
    updateFormData: (field: string, value: any) => void;

}

export interface OptionType {
    label: string;
    value: string | number;
}

export interface SelectFieldProps {
    id: string;
    label: string;
    options: OptionType[];
    value: any;
    onChange: (selectedOption: OptionType | null) => void;
    placeholder?: string;
    isClearable?: boolean;
    isDisabled?: boolean;
}