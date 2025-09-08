import "./App.css";
import { WebSocketProvider } from "react-ecosistema-unp/utils";
import { VentanaLienzo } from "react-ecosistema-unp/shared";
function App() {

  const breadcrumbItems = [
    { label: "Inicio", link: "/" },
    { label: "Administrador de equipos" },
  ];
  return (
    <WebSocketProvider>
      <VentanaLienzo items={breadcrumbItems} />
    </WebSocketProvider>
  );
}

export default App;