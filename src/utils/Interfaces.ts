export interface Icolumns {
    key: string;
    label: string;
    hasModal?: boolean;
    truncateText?: boolean;
    sorter?: boolean;
    renderComponent?: (row: Record<string, any>) => React.ReactNode;
}

export interface Analista {
    nombre_analista: string;
    identificacion: string;
    vinculacion: string;
    experiencia: string;
    nivel_academico: string;
    profesion: string;
    genero: string;
    fecha_ingreso_ser: string;
    departamento: string;
    municipio: string;
    revisor_asignado: string;
    correo_electronico: string;
    celular: number;
    fec_ultimo_año: string;
    numero_ot_abiertas: number;
    numero_ot_cerradas: number;
    tipo_solicitud: string;
    numero_resolucion: string;
    fec_resolucion: string;
    dia_solicitud: string;
    tipo_vehiculo: string;
    tipo_esquema: string;
}

export interface AnalistaProps {
    data: Analista
}
