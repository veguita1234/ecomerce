import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './InicioSesion.css';

const InicioSesion: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const currentPath = window.location.pathname;
    localStorage.setItem('redirectAfterLogin', currentPath);
  }, []);

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
        console.log('Login data:', data); // Verifica los datos recibidos
        localStorage.setItem('token', data.token);
        localStorage.setItem('userType', data.userType || ''); // Guarda el tipo de usuario
        localStorage.setItem('name', data.name || ''); // Guarda el nombre, si está disponible
        localStorage.setItem('razonSocial', data.razonSocial || ''); // Guarda la razón social, si está disponible
  
        // Verifica los valores almacenados
        console.log('Stored userType:', localStorage.getItem('userType'));
        console.log('Stored name:', localStorage.getItem('name'));
        console.log('Stored razonSocial:', localStorage.getItem('razonSocial'));
  
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
  

  return (
    <div className='body'>
      <div className='cards'>
        <div className='login'>
          <h2 style={{ textAlign: 'center' }}>Iniciar Sesión</h2>
          <br />
          <br />
          <br />
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
            <br />
            <br />
            <br />
            <label>Contraseña</label>
            <br />
            <input
              type='password'
              id='password'
              name='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <br />
            <br />
            <br />
            <button
              style={{ position: 'relative', justifyContent: 'center', alignItems: 'center' }}
              type='submit'
              disabled={loading}
            >
              Iniciar Sesión
            </button>
            <br />
            <br />
            <br />
            <p>¿No tienes cuenta? <Link to='/registrarse'>Regístrate</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InicioSesion;
