import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import styles from './ProductList.module.css'; 

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
        fetchProdutos(); 
      } catch (err) {
        console.error('Erro ao excluir produto:', err);
      }
    }
  }

  return (
    <div className={styles.productListContainer}>
      <h2>Lista de Produtos</h2>
      <div className={styles.productCards}>
        {produtos.map((produto) => (
          <div key={produto._id} className={styles.card}>
            {/* <img src={produto.imagem || 'default-image.jpg'} alt={produto.nome} className={styles.cardImage} /> */}
            <div className={styles.cardDetails}>
              <h3>{produto.nome}</h3>
              <p><strong>Preço:</strong> R$ {produto.preco.toFixed(2)}</p>
              <p><strong>Descrição:</strong> {produto.descricao}</p>
              <div className={styles.cardActions}>
                <button onClick={() => navigate(`/produtos/editar/${produto._id}`)} className={styles.button}>Editar</button>
                <button onClick={() => excluirProduto(produto._id)} className={styles.button}>Excluir</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
