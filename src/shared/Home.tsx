import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/home.css";
import CardItem from "./cardItem";
import { FaListAlt } from "react-icons/fa";
import { GiCarKey, GiOilPump } from "react-icons/gi";
import { SiNginxproxymanager } from "react-icons/si";
import { MdSendTimeExtension } from "react-icons/md";

const Home: React.FC = () => {
    const navigate = useNavigate();

    const options = [
        {
            id: 1,
            title: "Control y Alistamiento de Vehículos",
            description: "Gestión administrativa de la Subdirección de Evaluación de Riesgo",
            icon: <FaListAlt size={40} color="#3085d6" />,
            color: "linear-gradient(135deg, #ffffff 0%, #e6fffa 100%)",
            route: "/sesp/ctrlyalstmntdevhcls",
        }, {
            id: 2,
            title: "Rentadora",
            description: "Gestión administrativa de la Subdirección de Evaluación de Riesgo",
            icon: <GiCarKey size={40} color="#3085d6" />,
            color: "linear-gradient(135deg, #ffffff 0%, #e0f2ff 100%)",
            route: "/",
        }, {
            id: 3,
            title: "Gestor de Entrega",
            description: "Gestión administrativa de la Subdirección de Evaluación de Riesgo",
            icon: <SiNginxproxymanager size={40} color="#3085d6" />,
            color: "linear-gradient(135deg, #ffffff 0%, #ffe6f7 100%)",
            route: "/",
        }, {
            id: 4,
            title: "Coordinadora Automotores",
            description: "Gestión administrativa de la Subdirección de Evaluación de Riesgo",
            icon: <MdSendTimeExtension size={40} color="#3085d6" />,
            color: "linear-gradient(135deg, #ffffff 0%, #f2f2f2 100%)",
            route: "/",
        }, {
            id: 5,
            title: "Combustible SESP",
            description: "Gestión administrativa de la Subdirección de Evaluación de Riesgo",
            icon: <GiOilPump size={40} color="#3085d6" />,
            color: "linear-gradient(135deg, #ffffff 0%, #f3e8ff 100%)",
            route: "/",
        },
    ];

    return (
        <div className="containerHome">
            <div className={`gridHome ${options.length === 1 ? "singleCard" : ""}`}>
                {options.map((option) => (
                    <CardItem key={option.id} {...option} onClick={() => navigate(option.route)} />
                ))}
            </div>

        </div>
    );
};

export default Home;