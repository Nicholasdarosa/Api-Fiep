import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={styles.header}>
      <nav style={styles.nav}>
        <Link to="/" style={styles.link}>Cadastrar Produto</Link>
        <Link to="/produtos" style={styles.link}>Lista de Produtos</Link>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: '#222',
    padding: '10px 20px',
  },
  nav: {
    display: 'flex',
    gap: '20px',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 'bold',
  }
};

export default Header;
