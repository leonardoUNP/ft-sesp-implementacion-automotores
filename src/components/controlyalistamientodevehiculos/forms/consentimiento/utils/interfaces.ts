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


//Inicio interface formualrio LISTA CHEQUEO DE VEHÍCULOS BLINDADOS Y CONVENCIONALES 
export interface IVehiculeDescription {
    vehiculeDescription: {
        placa: string;
        marca: string;
        linea: string;
        modelo: string;
        cilindraje: string;
        color: string;
        clase_vehiculo: string;
        tipo_carroceria: string;
        combustible: string;
        capacidad: string;
        potencia: string;
        puertas: string
        licencia_trancito: string;
        fecha_vencimiento_socat: string;
        aseguradora_soat: string;
        kilometraje_actual: string;
        kilometraje_debe_mantenimiento: string;
    }
}

export interface IDatosVehiculeDescription {
    formData: IVehiculeDescription;
    handleChange: (e: React.ChangeEvent<any>) => void;
    handleFieldChange: (e: React.ChangeEvent<any>, location: string) => void;
    updateFormData: (field: string, value: any) => void;
}

//¡Fin! Inicio interface formualrio LISTA CHEQUEO DE VEHÍCULOS BLINDADOS Y CONVENCIONALES 