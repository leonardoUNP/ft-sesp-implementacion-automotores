import React, { useState } from "react";
import { FaCar, FaTruck, FaExchangeAlt, FaQuestionCircle } from "react-icons/fa";

type TipoSolicitudValue = string | number | null;

interface TipoSolicitudProps {
    solicitud: TipoSolicitudValue;
}

const solicitudMap: Record<string | number, { icon: React.ElementType; color: string; tooltipText: string }> = {

    "Cambio de vehículo": { icon: FaExchangeAlt, color: "#1976d2", tooltipText: "Cambio de vehículo" },
    "Implementacion por primera vez": { icon: FaCar, color: "#8E24AA", tooltipText: "Implementación por primera vez" },
    "Vehículo sustituto": { icon: FaTruck, color: "#3B82F6", tooltipText: "Vehículo sustituto" },


    1: { icon: FaExchangeAlt, color: "#1976d2", tooltipText: "Cambio de vehículo" },
    2: { icon: FaCar, color: "#8E24AA", tooltipText: "Implementación por primera vez" },
    3: { icon: FaTruck, color: "#3B82F6", tooltipText: "Vehículo sustituto" },
};

export const TipoSolicitud: React.FC<TipoSolicitudProps> = ({ solicitud }) => {
    const [showTooltip, setShowTooltip] = useState(false);

    if (!solicitud) return null;

    const config = solicitudMap[solicitud] ?? {
        icon: FaQuestionCircle,
        color: "#7f8c8d",
        tooltipText: "Tipo de solicitud desconocido",
    };

    const handleMouseEnter = () => setShowTooltip(true);
    const handleMouseLeave = () => setShowTooltip(false);

    return (
        <div style={{ position: "relative", display: "inline-block" }}>
            <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.5em",
                    color: config.color,
                }}
            >
                <config.icon />
            </div>
            {showTooltip && (
                <div
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "110%",
                        transform: "translateY(-50%)",
                        backgroundColor: "#333",
                        color: "#fff",
                        padding: "8px 12px",
                        borderRadius: "8px",
                        fontSize: "0.9em",
                        whiteSpace: "nowrap",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.15)",
                        zIndex: 1000,
                    }}
                >
                    {config.tooltipText}
                </div>
            )}
        </div>
    );
};
