import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import ProductEdit from './pages/ProductEdit';
import Login from './pages/Login';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute'; 

function App() {
  const isAuthenticated = !!localStorage.getItem('token'); // verifica token

  return (
    <Router>
      {isAuthenticated && <Header />} {}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={
          <PrivateRoute><Home /></PrivateRoute>
        } />
        <Route path="/produtos" element={
          <PrivateRoute><ProductList /></PrivateRoute>
        } />
        <Route path="/produtos/editar/:id" element={
          <PrivateRoute><ProductEdit /></PrivateRoute>
        } />
      </Routes>
    </Router>
  );
}


export default App;
