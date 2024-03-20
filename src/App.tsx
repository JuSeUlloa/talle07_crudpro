import { BrowserRouter } from "react-router-dom";
import './App.css';
import { Cabecera } from "./app/components/contendor/Cabecera";
import { Ruteo } from "./app/routes/Ruteo";

function App() {
  return (
    <div >
      <BrowserRouter>
        <Cabecera />
        <div className='mt-3'>
          <Ruteo />
        </div>

      </BrowserRouter>
    </div>
  );
}

export default App;
