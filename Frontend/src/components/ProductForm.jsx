import { useState } from 'react';
import api from '../services/api';
import styles from './ProductForm.module.css';

function ProductForm() {
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [descricao, setDescricao] = useState('');
  const [erro, setErro] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await api.post('/produtos', { nome, preco, descricao });
      alert('Produto cadastrado com sucesso!');
      setNome('');
      setPreco('');
      setDescricao('');
    } catch (err) {
      setErro('Erro ao cadastrar o produto.');
    }
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2>Cadastro de Produto</h2>
        <div>
          <label>Nome</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className={styles.input}
            required
          />
        </div>
        <div>
          <label>Preço</label>
          <input
            type="number"
            value={preco}
            onChange={(e) => setPreco(e.target.value)}
            className={styles.input}
            required
          />
        </div>
        <div>
          <label>Descrição</label>
          <textarea
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            className={styles.input}
            required
          />
        </div>
        <button type="submit" className={styles.button}>
          Cadastrar
        </button>
        {erro && <p style={{ color: 'red' }}>{erro}</p>}
      </form>
    </div>
  );
}

export default ProductForm;
