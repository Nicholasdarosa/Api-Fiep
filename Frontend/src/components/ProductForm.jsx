import { useState, useEffect } from 'react';
import api from '../services/api';
import { useNavigate, useParams } from 'react-router-dom';

function ProductForm() {
  const navigate = useNavigate();
  const { id } = useParams(); // ID da rota
  const isEditing = Boolean(id); // verifica se é edição

  const [produto, setProduto] = useState({
    nome: '',
    descricao: '',
    preco: '',
    quantidade: '',
    categoria: ''
  });

  useEffect(() => {
    if (isEditing) {
      api.get(`/produtos/${id}`)
        .then((res) => setProduto(res.data))
        .catch((err) => console.error('Erro ao buscar produto:', err));
    }
  }, [id, isEditing]);

  function handleChange(e) {
    setProduto({ ...produto, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      if (isEditing) {
        await api.put(`/produtos/${id}`, {
          ...produto,
          preco: parseFloat(produto.preco),
          quantidade: parseInt(produto.quantidade),
        });
        alert('Produto atualizado com sucesso!');
      } else {
        await api.post('/produtos', {
          ...produto,
          preco: parseFloat(produto.preco),
          quantidade: parseInt(produto.quantidade),
        });
        alert('Produto cadastrado com sucesso!');
      }

      navigate('/produtos');
    } catch (err) {
      console.error('Erro ao salvar produto:', err);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>{isEditing ? 'Editar Produto' : 'Cadastrar Produto'}</h2>
      <input type="text" name="nome" placeholder="Nome" value={produto.nome} onChange={handleChange} required /><br />
      <input type="text" name="descricao" placeholder="Descrição" value={produto.descricao} onChange={handleChange} /><br />
      <input type="number" step="0.01" name="preco" placeholder="Preço" value={produto.preco} onChange={handleChange} required /><br />
      <input type="number" name="quantidade" placeholder="Quantidade" value={produto.quantidade} onChange={handleChange} required /><br />
      <input type="text" name="categoria" placeholder="Categoria" value={produto.categoria} onChange={handleChange} required /><br />
      <button type="submit">{isEditing ? 'Atualizar' : 'Salvar'}</button>
    </form>
  );
}

export default ProductForm;
