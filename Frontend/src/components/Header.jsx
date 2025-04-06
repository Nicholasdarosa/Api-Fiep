import { Link, useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import styles from './Header.module.css'; // CSS modular

function Header() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  let email = '';
  if (token) {
    try {
      const decoded = jwtDecode(token);
      email = decoded.email || '';
    } catch (e) {
      console.error('Erro ao decodificar token', e);
    }
  }

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.links}>
          <Link to="/" className={styles.link}>Cadastrar Produto</Link>
          <Link to="/produtos" className={styles.link}>Lista de Produtos</Link>
        </div>
        {token && (
          <div className={styles.actions}>
            {/* <span className={styles.email}>Logado como: {email}</span> */}
            <button onClick={logout} className={styles.button}>Sair</button>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
