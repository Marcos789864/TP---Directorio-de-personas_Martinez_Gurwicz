import React from 'react';
import { useParams } from 'react-router-dom'; // Para obtener parámetros de la URL
import Personas from '../Personas'; // Asegúrate de que esta ruta es correcta

const Persona = () => {
  const { id } = useParams(); // Obtén el ID de la URL
  const persona = Personas.find(p => p.id === id); // Encuentra la persona con ese ID

  if (!persona) {
    return <p>Persona no encontrada</p>; // Mensaje si no se encuentra la persona
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