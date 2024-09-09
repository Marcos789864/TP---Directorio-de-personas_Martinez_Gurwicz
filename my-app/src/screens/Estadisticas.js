import React, { useState, useEffect } from 'react';
import Personas from '../Personas';

const Estadisticas = () => {
  // Definición de estados
  const [personasConEdadNumerica, setPersonasConEdadNumerica] = useState([]);
  const [edadMaxima, setEdadMaxima] = useState(null);
  const [edadMinima, setEdadMinima] = useState(null);
  const [personasConEdadMaxima, setPersonasConEdadMaxima] = useState([]);
  const [personasConEdadMinima, setPersonasConEdadMinima] = useState([]);

  useEffect(() => {
    
    const personasConEdadNumerica = Personas.map(persona => {
      const edad = parseInt(persona.edad, 10);
      return {
        ...persona,
        edad: isNaN(edad) ? null : edad 
      };
    }).filter(persona => persona.edad !== null); 

    if (personasConEdadNumerica.length === 0) {
      
      return;
    }

   
    const maxEdad = Math.max(...personasConEdadNumerica.map(p => p.edad));
    const minEdad = Math.min(...personasConEdadNumerica.map(p => p.edad));

    
    const personasMax = personasConEdadNumerica.filter(persona => persona.edad === maxEdad);
    const personasMin = personasConEdadNumerica.filter(persona => persona.edad === minEdad);

    
    setPersonasConEdadNumerica(personasConEdadNumerica);
    setEdadMaxima(maxEdad);
    setEdadMinima(minEdad);
    setPersonasConEdadMaxima(personasMax);
    setPersonasConEdadMinima(personasMin);
  }, []); 

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Estadísticas</h1>
      <div style={styles.section}>
        <h2 style={styles.subtitle}>Personas mayores de 35 años:</h2>
        <p style={styles.info}>
          {personasConEdadNumerica.filter(persona => persona.edad > 35).length}
        </p>
      </div>
      <div style={styles.section}>
        <h2 style={styles.subtitle}>Persona(s) de mayor edad:</h2>
        <p style={styles.info}>
          {personasConEdadMaxima.length > 0 ? (
            personasConEdadMaxima.map(p => (
              <span key={p.id}>{p.nombre} {p.apellido} </span>
            ))
          ) : (
            'No hay personas con esa edad.'
          )}
        </p>
      </div>
      <div style={styles.section}>
        <h2 style={styles.subtitle}>Persona(s) de menor edad:</h2>
        <p style={styles.info}>
          {personasConEdadMinima.length > 0 ? (
            personasConEdadMinima.map(p => (
              <span key={p.id}>{p.nombre} {p.apellido} </span>
            ))
          ) : (
            'No hay personas con esa edad.'
          )}
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#f9f9f9',
    maxWidth: '800px',
    margin: 'auto',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  title: {
    fontSize: '28px',
    marginBottom: '20px',
  },
  section: {
    marginBottom: '20px',
  },
  subtitle: {
    fontSize: '22px',
    marginBottom: '10px',
  },
  info: {
    fontSize: '18px',
  },
};

export default Estadisticas;