import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RegistroUsuario from '../Registrarse/RegistroUsuario'; // Importa el componente de registro
import './InicioSesion.css';

interface IniciarSesionProps {
  onClose: () => void;
  onRegister?: () => void; // Si `onRegister` es opcional
  onLoginSuccess: (nameOrRazonSocial: string) => void; // Nueva propiedad para pasar la información al HeaderBottom
}

const IniciarSesion: React.FC<IniciarSesionProps> = ({ onClose, onRegister, onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showRegister, setShowRegister] = useState(false); // Estado para mostrar el registro
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('http://localhost:5041/api/SeguridadUsers/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token);
        localStorage.setItem('userType', data.userType || '');
        localStorage.setItem('name', data.name || '');
        localStorage.setItem('razonSocial', data.razonSocial || '');

        // Actualiza el HeaderBottom con el nombre o razón social
        onLoginSuccess(data.userType === 'empresa' ? data.razonSocial : data.name);

        // Cierra la ventana emergente
        onClose();

        // Redirige al usuario a la página de inicio o destino deseado
        navigate('/');
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Error al iniciar sesión. Inténtalo de nuevo.');
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      setError('Error de conexión. Inténtalo de nuevo más tarde.');
    } finally {
      setLoading(false);
    }
  };

  const handleRegisterClick = () => {
    setShowRegister(true);
  };

  const handleCloseRegister = () => {
    setShowRegister(false);
  };

  return (
    <div className='body'>
      {showRegister ? (
        <RegistroUsuario onClose={handleCloseRegister} />
      ) : (
        <div className='card'>
          <div className='login'>
            <h2 style={{ textAlign: 'center' }}>Iniciar Sesión</h2>
            {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
            {loading && <p style={{ textAlign: 'center' }}>Cargando...</p>}
            <form onSubmit={handleLogin}>
              <label>Usuario</label>
              <br />
              <input
                type='text'
                id='username'
                name='username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <br /><br />
              <label>Contraseña</label>
              <br />
              <input
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{ width: '15vw' }}
              />
              <br /><br />
              <button
                type='submit'
                disabled={loading}
                style={{ display: 'block', margin: '0 auto' }}
              >
                Iniciar sesión
              </button>
            </form>
            <br />
            <button onClick={handleRegisterClick}>Registrarse</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default IniciarSesion;
