import React from 'react';
import { useNavigate } from 'react-router-dom';

const CerrarSesion: React.FC<{ onLogout: () => void }> = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Elimina los datos del almacenamiento local
    localStorage.removeItem('token');
    localStorage.removeItem('userName');
    localStorage.removeItem('name');

    // Llama a la función de cierre de sesión pasada como prop
    onLogout();

    // Redirige al usuario a la página de inicio de sesión


    // Refresca la página
    window.location.reload();
  };

  return (
    <button onClick={handleLogout} style={{ background: 'red', color: 'white', border: 'none',  cursor: 'pointer',height:"5vh" }}>
      Cerrar sesión
    </button>
  );
};

export default CerrarSesion;
