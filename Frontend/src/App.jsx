import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import ProductEdit from './pages/ProductEdit';
import Header from './components/Header'; // 👈 importa o Header

function App() {
  return (
    <Router>
      <Header /> {}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<ProductList />} />
        <Route path="/produtos/editar/:id" element={<ProductEdit />} />
      </Routes>
    </Router>
  );
}

export default App;
