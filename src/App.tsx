import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import BuatArtikel from "./pages/BuatArtikel";
import Dashboard from "./pages/Dashboard";
import DataPenduduk from "./pages/DataPenduduk";
import KelolaArtikel from "./pages/KelolaArtikel";
import SignInForm from "./pages/SignInForm";
import TambahDataPenduduk from "./pages/TambahDataPenduduk";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="akun" element={<Dashboard />} />
        <Route path="ubah-password" element={<Dashboard />} />
      </Route>

      <Route path="/kependudukan/" element={<Layout />}>
        <Route path="tambah-data-penduduk" element={<TambahDataPenduduk />} />
        <Route path="data-penduduk" element={<DataPenduduk />} />
      </Route>

      <Route path="/artikel/" element={<Layout />}>
        <Route path="buat-artikel" element={<BuatArtikel />} />
        <Route path="kelola-artikel" element={<KelolaArtikel />} />
      </Route>

      <Route path="/login" element={<SignInForm />} />
    </Routes>
  );
}

export default App;
