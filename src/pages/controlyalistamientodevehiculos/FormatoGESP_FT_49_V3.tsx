import { Encabezado } from "react-ecosistema-unp/ui"
import { VentanaLienzo } from "react-ecosistema-unp/shared"
import { FormularioGestFt49V3 } from "../../components/controlyalistamientodevehiculos/formularioGespFt49v3/FormularioGestFt49V3";
export const FormatoGESP_FT_49_V3 = () => {

  const breadcrumbItems = [
    { label: "Inicio", link: "/" },
    { label: "Control y Alistamiento de Vehículos" },
    { label: "Formulario GESP FT 49 V3" }
  ];

  return (
    <>
      <VentanaLienzo
        items={breadcrumbItems}
      >
        <div className='my-3 container'>
          <div className='justify-content-center row'>
            <div className='col-xl-9 col-lg-11'>
              <Encabezado
                subtitle={'Subdirección Especializada de Seguridad y Protección'}
              ></Encabezado>
              <FormularioGestFt49V3 />
            </div>
          </div>
        </div>
      </VentanaLienzo>
    </>
  )
}
