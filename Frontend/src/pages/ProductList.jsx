import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

function ProductList() {
  const [produtos, setProdutos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProdutos();
  }, []);

  async function fetchProdutos() {
    try {
      const res = await api.get('/produtos');
      setProdutos(res.data);
    } catch (err) {
      console.error('Erro ao buscar produtos:', err);
    }
  }

  async function excluirProduto(id) {
    if (confirm('Tem certeza que deseja excluir este produto?')) {
      try {
        await api.delete(`/produtos/${id}`);
        alert('Produto excluído com sucesso!');
        fetchProdutos(); // recarrega lista
      } catch (err) {
        console.error('Erro ao excluir produto:', err);
      }
    }
  }

  return (
    <div>
      <h2>Lista de Produtos</h2>
      <ul>
        {produtos.map((produto) => (
          <li key={produto._id}>
            {produto.nome} - R$ {produto.preco.toFixed(2)} &nbsp;
            <button onClick={() => navigate(`/produtos/editar/${produto._id}`)}>Editar</button>
            <button onClick={() => excluirProduto(produto._id)} style={{ marginLeft: '8px' }}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
