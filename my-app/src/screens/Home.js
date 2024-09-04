import React from 'react';

import Personas from '../../Personas';
const styles = {
  homeContainer: {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#f9f9f9',
  },
  homeHeader: {
    backgroundColor: '#282c34',
    color: 'white',
    padding: '20px',
  },
  homeHeaderTitle: {
    margin: 0,
    fontSize: '2.5em',
  },
  homeHeaderDescription: {
    fontSize: '1.2em',
  },
  navList: {
    listStyle: 'none',
    padding: 0,
  },
  navItem: {
    display: 'inline',
    margin: '0 10px',
  },
  navLink: {
    color: '#61dafb',
    textDecoration: 'none',
  },
  navLinkHover: {
    textDecoration: 'underline',
  },
  homeMain: {
    marginTop: '20px',
  },
  ctaButton: {
    padding: '10px 20px',
    fontSize: '1.2em',
    backgroundColor: '#61dafb',
    border: 'none',
    borderRadius: '5px',
    color: 'white',
    cursor: 'pointer',
  },
  ctaButtonHover: {
    backgroundColor: '#21a1f1',
  },
};

const Home = () => {
  return (
    <div style={styles.homeContainer}>
      <header style={styles.homeHeader}>
        <h1 style={styles.homeHeaderTitle}>Bienvenido a Pádel Club</h1>
        <p style={styles.homeHeaderDescription}>
          La mejor aplicación para gestionar tus partidos de pádel.
        </p>
        <nav>
          <ul style={styles.navList}>
            <li style={styles.navItem}><a href="#features" style={styles.navLink}>Características</a></li>
            <li style={styles.navItem}><a href="#about" style={styles.navLink}>Sobre Nosotros</a></li>
            <li style={styles.navItem}><a href="#contact" style={styles.navLink}>Contacto</a></li>
          </ul>
        </nav>
      </header>
      <main style={styles.homeMain}>
        <button
          style={styles.ctaButton}
          onMouseOver={e => e.currentTarget.style.backgroundColor = styles.ctaButtonHover.backgroundColor}
          onMouseOut={e => e.currentTarget.style.backgroundColor = styles.ctaButton.backgroundColor}
        >
          Comienza Ahora
        </button>
      </main>
    </div>
  );
};

export default Home;