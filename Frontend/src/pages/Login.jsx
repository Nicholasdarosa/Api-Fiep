import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import styles from './Login.module.css'; 

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const response = await api.post('/auth/login', { email, senha });
      const { token } = response.data;

      // Salva o token no localStorage
      localStorage.setItem('token', token);

      // Redireciona para /produtos
      navigate('/produtos');
    } catch (err) {
      console.error(err);
      setErro('Email ou senha inválidos.');
    }
  }

  return (
    <div className={styles.pageBackground}>
      <div className={styles.formCard}>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div>
            <label>Email:</label><br />
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Senha:</label><br />
            <input
              type="password"
              value={senha}
              onChange={e => setSenha(e.target.value)}
              required
            />
          </div>
          <button type="submit" className={styles.buttonLogin}>Entrar</button>
          {erro && <p style={{ color: 'red' }}>{erro}</p>}
        </form>
      </div>
    </div>
  );
}

export default Login;
