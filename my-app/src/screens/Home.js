import React from 'react';
import { Link } from 'react-router-dom';
import Personas from '../Personas';

const Home = () => {
  return (
    <div style={styles.homeContainer}>
      <h1 style={styles.headerTitle}>Lista de Personas</h1>
      <div style={styles.linksContainer}>
        <Link to="/Estadisticas" style={styles.statsLink}>Ver Estadísticas</Link>
        <Link to="/Contacto" style={styles.statsLink}>Contacto</Link>
      </div>
      <ul style={styles.personList}>
        {Personas.map(persona => (
          <li key={persona.id} style={styles.personItem}>
            <Link to={`/person/${persona.id}`} style={styles.personLink}>
              <div style={styles.personDetails}>
                <h3 style={styles.personName}>{persona.nombre} {persona.apellido}</h3>
                <p style={styles.personEmail}>Email: {persona.email}</p>
                <p style={styles.personAge}>Edad: {persona.edad}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  homeContainer: {
    padding: '20px',
    backgroundColor: '#f0f4f8',
    minHeight: '100vh',
  },
  headerTitle: {
    fontSize: '36px',
    marginBottom: '20px',
    textAlign: 'center',
    color: '#333',
    fontFamily: 'Arial, sans-serif',
  },
  linksContainer: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  statsLink: {
    display: 'inline-block',
    margin: '0 15px',
    textDecoration: 'none',
    color: '#007BFF',
    fontSize: '18px',
    fontWeight: 'bold',
    borderRadius: '5px',
    padding: '10px 20px',
    border: '2px solid #007BFF',
    transition: 'all 0.3s ease',
  },
  statsLinkHover: {
    backgroundColor: '#007BFF',
    color: '#fff',
  },
  personList: {
    listStyleType: 'none',
    padding: '0',
    margin: '0',
  },
  personItem: {
    padding: '15px',
    margin: '10px 0',
    borderRadius: '8px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  personItemHover: {
    transform: 'scale(1.02)',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
  },
  personLink: {
    textDecoration: 'none',
    color: 'inherit',
  },
  personDetails: {
    textAlign: 'center',
  },
  personName: {
    fontSize: '22px',
    margin: '0',
    color: '#333',
  },
  personEmail: {
    fontSize: '16px',
    color: '#555',
  },
  personAge: {
    fontSize: '16px',
    color: '#777',
  },
};

export default Home;