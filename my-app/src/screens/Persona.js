import React from 'react';
import { useParams } from 'react-router-dom'; 
import Personas from '../Personas'; 

const Persona = () => {
  const { id } = useParams(); 
  const persona = Personas.find(p => p.id === id);

  if (!persona) {
    return <p>Persona no encontrada</p>; 
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>{persona.nombre} {persona.apellido}</h1>
      <p style={styles.info}>Email: {persona.email}</p>
      <p style={styles.info}>Edad: {persona.edad}</p>
    </div>
  );
};

const styles = {
  container: {
    padding: 20,
    backgroundColor: '#f9f9f9',
    maxWidth: 800,
    margin: 'auto',
    borderRadius: 8,
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
  },
  info: {
    fontSize: 18,
    marginBottom: 10,
  },
};

export default Persona;