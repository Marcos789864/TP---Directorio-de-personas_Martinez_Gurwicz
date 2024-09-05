import React from 'react';
import { Link } from 'react-router-dom';
import Personas from '../Personas';

const Home = () => {
  return (
    <div style={styles.homeContainer}>
      <h1 style={styles.headerTitle}>Lista de Personas</h1>
      <Link to="/Estadisticas" style={styles.statsLink}>Ver Estadísticas</Link>
      <ul style={styles.personList}>
        {Personas.map(persona => (
          <li key={persona.id} style={styles.personItem}>
            <Link to={`/person/${persona.id}`} style={styles.personLink}>
              <h3>{persona.nombre} {persona.apellido}</h3>
              <p>Email: {persona.email}</p>
              <p>Edad: {persona.edad}</p>
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
    backgroundColor: '#f9f9f9',
  },
  headerTitle: {
    fontSize: '24px',
    marginBottom: '20px',
    textAlign: 'center',
  },
  personList: {
    listStyleType: 'none',
    padding: '0',
  },
  personItem: {
    padding: '10px',
    borderBottom: '1px solid #ddd',
  },
  personLink: {
    textDecoration: 'none',
    color: 'inherit',
  },
  statsLink: {
    display: 'block',
    marginBottom: '20px',
    textDecoration: 'none',
    color: '#007BFF',
    fontSize: '18px',
    textAlign: 'center',
  },
};

export default Home;