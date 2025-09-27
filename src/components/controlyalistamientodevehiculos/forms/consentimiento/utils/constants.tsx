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
export const inspeccionVehiculo = [
    {
        item: "Niveles",
        detalles: [
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
        ],
    },
    {
        item: "Elementos Eléctricos y/o Electrónicos",
        detalles: [
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
            }
        ]
    },
    {
        item: "Interior",
        detalles: [
            {
                label: "Parasoles",
                name: "parasoles",
                options: [
                    { label: "B", value: "B" },
                    { label: "R", value: "R" },
                    { label: "M", value: "M" },
                ],
            },
            {
                label: "Radio",
                name: "radio",
                options: [
                    { label: "B", value: "B" },
                    { label: "R", value: "R" },
                    { label: "M", value: "M" },
                ],
            },
            {
                label: "Control remoto",
                name: "controlRemoto",
                options: [
                    { label: "B", value: "B" },
                    { label: "R", value: "R" },
                    { label: "M", value: "M" },
                    { label: "N/A", value: "N/A" },
                ],
            },
            {
                label: "Parlantes",
                name: "parlantes",
                options: [
                    { label: "B", value: "B" },
                    { label: "R", value: "R" },
                    { label: "M", value: "M" },
                ],
            },
            {
                label: "Antena radio",
                name: "antenaRadio",
                options: [
                    { label: "B", value: "B" },
                    { label: "R", value: "R" },
                    { label: "M", value: "M" },
                    { label: "N/A", value: "N/A" },
                ],
            },
            {
                label: "Sirena",
                name: "sirena",
                options: [
                    { label: "B", value: "B" },
                    { label: "R", value: "R" },
                    { label: "M", value: "M" },
                    { label: "N/A", value: "N/A" },
                ],
            },
            {
                label: "Altavoz",
                name: "altavoz",
                options: [
                    { label: "B", value: "B" },
                    { label: "R", value: "R" },
                    { label: "M", value: "M" },
                    { label: "N/A", value: "N/A" },
                ],
            },
            {
                label: "Micrófono",
                name: "microfono",
                options: [
                    { label: "B", value: "B" },
                    { label: "R", value: "R" },
                    { label: "M", value: "M" },
                    { label: "N/A", value: "N/A" },
                ],
            },
            {
                label: "Espejos internos",
                name: "espejosInternos",
                options: [
                    { label: "B", value: "B" },
                    { label: "R", value: "R" },
                    { label: "M", value: "M" },
                ],
            },
            {
                label: "Cocuyo techo",
                name: "cocuyoTecho",
                options: [
                    { label: "B", value: "B" },
                    { label: "R", value: "R" },
                    { label: "M", value: "M" },
                ],
            },
            {
                label: "Sillas principales",
                name: "sillasPrincipales",
                options: [
                    { label: "B", value: "B" },
                    { label: "R", value: "R" },
                    { label: "M", value: "M" },
                ],
            },
            {
                label: "Sillas adicionales",
                name: "sillasAdicionales",
                options: [
                    { label: "B", value: "B" },
                    { label: "R", value: "R" },
                    { label: "M", value: "M" },
                ],
            },
            {
                label: "Cinturones de seguridad",
                name: "cinturonesSeguridd",
                options: [
                    { label: "B", value: "B" },
                    { label: "R", value: "R" },
                    { label: "M", value: "M" },
                ],
            },
            {
                label: "Descanza cabezas",
                name: "descanzaCabezas",
                options: [
                    { label: "B", value: "B" },
                    { label: "R", value: "R" },
                    { label: "M", value: "M" },
                ],
            },
            {
                label: "Manijas internas puerta",
                name: "manijasInternasPuerta",
                options: [
                    { label: "B", value: "B" },
                    { label: "R", value: "R" },
                    { label: "M", value: "M" },
                ],
            },
            {
                label: "Manijas techo",
                name: "manijasTecho",
                options: [
                    { label: "B", value: "B" },
                    { label: "R", value: "R" },
                    { label: "M", value: "M" },
                ],
            },
            {
                label: "Descanza brazos puertas",
                name: "descanzaBrazosPuertas",
                options: [
                    { label: "B", value: "B" },
                    { label: "R", value: "R" },
                    { label: "M", value: "M" },
                ],
            },
            {
                label: "Tapetes delanteros",
                name: "tapetesDelanteros",
                options: [
                    { label: "B", value: "B" },
                    { label: "R", value: "R" },
                    { label: "M", value: "M" },
                ],
            },
            {
                label: "Tapetes traseros",
                name: "tapetesTraseros",
                options: [
                    { label: "B", value: "B" },
                    { label: "R", value: "R" },
                    { label: "M", value: "M" },
                ],
            },
            {
                label: "Cojinería",
                name: "cojineria",
                options: [
                    { label: "B", value: "B" },
                    { label: "R", value: "R" },
                    { label: "M", value: "M" },
                ],
            },
            {
                label: "Tapizado techo",
                name: "tapizadoTecho",
                options: [
                    { label: "B", value: "B" },
                    { label: "R", value: "R" },
                    { label: "M", value: "M" },
                ],
            },
            {
                label: "Millaré",
                name: "millare",
                options: [
                    { label: "B", value: "B" },
                    { label: "R", value: "R" },
                    { label: "M", value: "M" },
                ],
            },
            {
                label: "Aseo interno",
                name: "aseoInterno",
                options: [
                    { label: "B", value: "B" },
                    { label: "R", value: "R" },
                    { label: "M", value: "M" },
                ],
            },
            {
                label: "Aseo externo",
                name: "aseoExterno",
                options: [
                    { label: "B", value: "B" },
                    { label: "R", value: "R" },
                    { label: "M", value: "M" },
                ],
            },
            {
                label: "Aire acondicionado",
                name: "aireAcondicionado",
                options: [
                    { label: "B", value: "B" },
                    { label: "R", value: "R" },
                    { label: "M", value: "M" },
                ],
            },
        ],
    },
    {
        item: "Exterior",
        detalles: [
            {
                label: "Panorámico delantero",
                name: "panoramicoDelantero",
                options: [
                    { label: "B", value: "B" },
                    { label: "R", value: "R" },
                    { label: "M", value: "M" },
                ],
            },
            {
                label: "Panorámico trasero",
                name: "panoramicoTrasero",
                options: [
                    { label: "B", value: "B" },
                    { label: "R", value: "R" },
                    { label: "M", value: "M" },
                ],
            },
            {
                label: "Techo corredizo",
                name: "techoCorredizo",
                options: [
                    { label: "B", value: "B" },
                    { label: "R", value: "R" },
                    { label: "M", value: "M" },
                    { label: "N/A", value: "N/A" },
                ],
            },
            {
                label: "Ventanas laterales",
                name: "ventanasLaterales",
                options: [
                    { label: "B", value: "B" },
                    { label: "R", value: "R" },
                    { label: "M", value: "M" },
                ],
            },
            {
                label: "Módulo fijación batería",
                name: "moduloFijacionBateria",
                options: [
                    { label: "B", value: "B" },
                    { label: "R", value: "R" },
                    { label: "M", value: "M" },
                ],
            },
            {
                label: "Estribos",
                name: "estribos",
                options: [
                    { label: "B", value: "B" },
                    { label: "R", value: "R" },
                    { label: "M", value: "M" },
                    { label: "N/A", value: "N/A" },
                ],
            },
            {
                label: "Puertas",
                name: "puertas",
                options: [
                    { label: "B", value: "B" },
                    { label: "R", value: "R" },
                    { label: "M", value: "M" },
                ],
            },
            {
                label: "Capót",
                name: "capot",
                options: [
                    { label: "B", value: "B" },
                    { label: "R", value: "R" },
                    { label: "M", value: "M" },
                ],
            },
            {
                label: "Emblemas",
                name: "emblemas",
                options: [
                    { label: "B", value: "B" },
                    { label: "R", value: "R" },
                    { label: "M", value: "M" },
                ],
            },
            {
                label: "Rines",
                name: "rines",
                options: [
                    { label: "B", value: "B" },
                    { label: "R", value: "R" },
                    { label: "M", value: "M" },
                ],
            },
            {
                label: "Llantas",
                name: "llantas",
                options: [
                    { label: "B", value: "B" },
                    { label: "R", value: "R" },
                    { label: "M", value: "M" },
                ],
            },
            {
                label: "Llanta de repuesto",
                name: "llantaRepuesto",
                options: [
                    { label: "B", value: "B" },
                    { label: "R", value: "R" },
                    { label: "M", value: "M" },
                ],
            },
            {
                label: "Tapa externa combustible",
                name: "tapaExternaCombustible",
                options: [
                    { label: "B", value: "B" },
                    { label: "R", value: "R" },
                    { label: "M", value: "M" },
                ],
            },
            {
                label: "Tapa interna combustible",
                name: "tapaInternaCombustible",
                options: [
                    { label: "B", value: "B" },
                    { label: "R", value: "R" },
                    { label: "M", value: "M" },
                ],
            },
            {
                label: "Parachoques delantero",
                name: "parachoquesDelantero",
                options: [
                    { label: "B", value: "B" },
                    { label: "R", value: "R" },
                    { label: "M", value: "M" },
                ],
            },
            {
                label: "Parachoques trasero",
                name: "parachoquesTrasero",
                options: [
                    { label: "B", value: "B" },
                    { label: "R", value: "R" },
                    { label: "M", value: "M" },
                ],
            },
        ],
    },
    {
        item: "Equipo de Carretera",
        detalles: [
            {
                label: "Extintor",
                name: "extintor",
                options: [
                    { label: "B", value: "B" },
                    { label: "R", value: "R" },
                    { label: "M", value: "M" },
                ],
            },
            {
                label: "Gato",
                name: "gato",
                options: [
                    { label: "B", value: "B" },
                    { label: "R", value: "R" },
                    { label: "M", value: "M" },
                ],
            },
            {
                label: "Cruceta",
                name: "cruceta",
                options: [
                    { label: "B", value: "B" },
                    { label: "R", value: "R" },
                    { label: "M", value: "M" },
                ],
            },
            {
                label: "Tacos",
                name: "tacos",
                options: [
                    { label: "B", value: "B" },
                    { label: "R", value: "R" },
                    { label: "M", value: "M" },
                ],
            },
            {
                label: "Triángulos o conos",
                name: "triangulosConos",
                options: [
                    { label: "B", value: "B" },
                    { label: "R", value: "R" },
                    { label: "M", value: "M" },
                ],
            },
            {
                label: "Chaleco reflectivo",
                name: "chalecoReflectivo",
                options: [
                    { label: "B", value: "B" },
                    { label: "R", value: "R" },
                    { label: "M", value: "M" },
                    { label: "N/A", value: "N/A" },
                ],
            },
            {
                label: "Linterna",
                name: "linterna",
                options: [
                    { label: "B", value: "B" },
                    { label: "R", value: "R" },
                    { label: "M", value: "M" },
                ],
            },
            {
                label: "Destornillador",
                name: "destornillador",
                options: [
                    { label: "B", value: "B" },
                    { label: "R", value: "R" },
                    { label: "M", value: "M" },
                ],
            },
            {
                label: "Alicate",
                name: "alicate",
                options: [
                    { label: "B", value: "B" },
                    { label: "R", value: "R" },
                    { label: "M", value: "M" },
                ],
            },
            {
                label: "Llave de expansión",
                name: "llaveExpansion",
                options: [
                    { label: "B", value: "B" },
                    { label: "R", value: "R" },
                    { label: "M", value: "M" },
                ],
            },
            {
                label: "Varilla de desmonte",
                name: "varillaDesmonte",
                options: [
                    { label: "B", value: "B" },
                    { label: "R", value: "R" },
                    { label: "M", value: "M" },
                    { label: "N/A", value: "N/A" },
                ],
            },
        ],
    },
    {
        item: "Botiquín",
        detalles: [
            {
                label: "Gasa",
                name: "gasa",
                options: [
                    { label: "B", value: "B" },
                    { label: "R", value: "R" },
                    { label: "M", value: "M" },
                ],
            },
            {
                label: "Tijeras o bisturí",
                name: "tijerasBisturi",
                options: [
                    { label: "B", value: "B" },
                    { label: "R", value: "R" },
                    { label: "M", value: "M" },
                ],
            },
            {
                label: "Guantes de látex",
                name: "guantesLatex",
                options: [
                    { label: "B", value: "B" },
                    { label: "R", value: "R" },
                    { label: "M", value: "M" },
                ],
            },
            {
                label: "Esparadrapo",
                name: "esparadrapo",
                options: [
                    { label: "B", value: "B" },
                    { label: "R", value: "R" },
                    { label: "M", value: "M" },
                ],
            },
            {
                label: "Venda elástica",
                name: "vendaElastica",
                options: [
                    { label: "B", value: "B" },
                    { label: "R", value: "R" },
                    { label: "M", value: "M" },
                ],
            },
            {
                label: "Jabón",
                name: "jabon",
                options: [
                    { label: "B", value: "B" },
                    { label: "R", value: "R" },
                    { label: "M", value: "M" },
                ],
            },
            {
                label: "Analgésicos",
                name: "analgesicos",
                options: [
                    { label: "B", value: "B" },
                    { label: "R", value: "R" },
                    { label: "M", value: "M" },
                ],
            },
            {
                label: "Curas",
                name: "curas",
                options: [
                    { label: "B", value: "B" },
                    { label: "R", value: "R" },
                    { label: "M", value: "M" },
                ],
            },
        ],
    },
    {
        item: "Módulo Altavoz",
        detalles: [
            {
                label: "Sirena",
                name: "moduloSirena",
                options: [
                    { label: "B", value: "B" },
                    { label: "R", value: "R" },
                    { label: "M", value: "M" },
                    { label: "N/A", value: "N/A" },
                ],
            },
            {
                label: "Entrada",
                name: "moduloEntrada",
                options: [
                    { label: "B", value: "B" },
                    { label: "R", value: "R" },
                    { label: "M", value: "M" },
                    { label: "N/A", value: "N/A" },
                ],
            },
            {
                label: "Salida",
                name: "moduloSalida",
                options: [
                    { label: "B", value: "B" },
                    { label: "R", value: "R" },
                    { label: "M", value: "M" },
                    { label: "N/A", value: "N/A" },
                ],
            },
        ],
    },
    {
        item: "Mecánico",
        detalles: [
            {
                label: "Dirección general",
                name: "direccionGeneral",
                options: [
                    { label: "B", value: "B" },
                    { label: "R", value: "R" },
                    { label: "M", value: "M" },
                ],
            },
            {
                label: "Suspención general",
                name: "suspencionGeneral",
                options: [
                    { label: "B", value: "B" },
                    { label: "R", value: "R" },
                    { label: "M", value: "M" },
                ],
            },
            {
                label: "Frenos general",
                name: "frenosGeneral",
                options: [
                    { label: "B", value: "B" },
                    { label: "R", value: "R" },
                    { label: "M", value: "M" },
                ],
            },
        ],
    },

];