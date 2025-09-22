import React from "react";
import { Subtitulo } from "react-ecosistema-unp/ui";
import type { DatosBasicosProps } from "../models/formularioGespFt49V3/IDatosBasicos";

export const DatosBasicos: React.FC<DatosBasicosProps> = ({ title, otNumber, sections }) => {
    return (
        <>
            <div className="title_container_form">
                <div className="subtitle_container_form">
                    <span>{title}</span>
                </div>
                <div className="number_ot_container">
                    <span>{otNumber}</span>
                </div>
            </div>

            <div className="grid_info_container">
                {sections.map((section, index) => (
                    <div key={index} className={index === 0 ? "basic_info_container" : "analist_info_container"}>
                        <Subtitulo subtitle={section.title} icon={section.icon} />
                        {section.items.length > 1 ? (
                            <div className="column_grid_container">
                                {section.items.map((column, columnIndex) => (
                                    <div key={columnIndex}>
                                        {column.map((item, itemIndex) => (
                                            <div className="item_info_container" key={itemIndex}>
                                                <strong>{item.label}</strong>
                                                <span>{item.value}</span>
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        ) : (
                            section.items[0].map((item, itemIndex) => (
                                <div className="item_info_container" key={itemIndex}>
                                    <strong>{item.label}</strong>
                                    <span>{item.value}</span>
                                </div>
                            ))
                        )}
                    </div>
                ))}
            </div>
        </>
    );
};
