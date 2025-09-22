import type { IconType } from "react-icons";

export type InfoItem = {
    label: string;
    value: string;
};

export type Section = {
    title: string;
    icon: IconType;
    items: InfoItem[][];
};

export interface DatosBasicosProps {
    title: string;
    otNumber?: string;
    sections: Section[];
}
