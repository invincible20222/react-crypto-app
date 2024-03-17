import { AppLayout } from "./components/layout/AppLayout";
import { CryptoContextProvider } from "./context/crypto-context";
import "./App.css";

export default function App() {
  return (
    <CryptoContextProvider>
      <AppLayout />
    </CryptoContextProvider>
  );
}
