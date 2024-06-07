import "./App.css";
import Header from "./components/layout/Header";
import { RouterProvider } from "react-router-dom";
import router from "./route";
import Footer from "./components/layout/Footer";

function App() {
  // MainLayout
  // TODO: Ajouter le router
  // ps: Ou en crée un ;) 🔥🔥🔥
  return (
    <>
      <Header router={router} />
      <RouterProvider router={router} />
      <Footer/>
      {/* <Footer /> */}
    </>
  );
}

export default App;
