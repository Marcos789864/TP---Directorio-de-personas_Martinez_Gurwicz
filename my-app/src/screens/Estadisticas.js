import React from 'react';
import Personas from '../Personas'; // Asegúrate de que esta ruta sea correcta

const Estadisticas = () => {
  // Convierte las edades a números y filtra las personas mayores de 35 años
  const personas = Personas.map(persona => ({
    ...persona,
    edad: parseInt(persona.edad, 10) // Convertir edad a número
  }));
  
  const mayoresDe35 = personas.filter(persona => persona.edad > 35);

  // Encuentra la edad máxima y mínima
  const edadMaxima = Math.max(...personas.map(p => p.edad));
  const edadMinima = Math.min(...personas.map(p => p.edad));

  // Encuentra las personas con la edad máxima y mínima
  const personasMayorEdad = personas.filter(persona => persona.edad === edadMaxima);
  const personasMenorEdad = personas.filter(persona => persona.edad === edadMinima);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Estadísticas</h1>
      <div style={styles.section}>
        <h2 style={styles.subtitle}>Personas mayores de 35 años:</h2>
        <p style={styles.info}>{mayoresDe35.length}</p>
      </div>
      <div style={styles.section}>
        <h2 style={styles.subtitle}>Persona(s) de mayor edad:</h2>
        <p style={styles.info}>
          {personasMayorEdad.length > 0 ? (
            personasMayorEdad.map(p => (
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
          {personasMenorEdad.length > 0 ? (
            personasMenorEdad.map(p => (
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