import logo from './logo.svg';
import './App.css';
import ProductEdit from './components/ProductEdit';
import ProductForm from './components/ProductForm'
import ProductTable from './components/ProductTable'
import {Routes,Route,Navigate} from 'react-router-dom';
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ProductTable/>}></Route>
        <Route path="/form" element={<ProductForm/>}></Route>
        {/* <Route path="/edit/:pid" element={<ProductEdit/>}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
