import React, { useState, useEffect } from 'react';
import { useNavigate , Link } from 'react-router-dom';
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
            body: JSON.stringify({
                userName: username,
                password: password
            })
        });

        if (response.ok) {
            const data = await response.json();
            console.log('Token:', data.token);
            localStorage.setItem('token', data.token);
            localStorage.setItem('name', data.name);

            navigate(-1);
            //window.location.reload(); 
        } else {
            const errorData = await response.json();
            setError(errorData.message || 'Usuario o contraseña incorrecta');
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
              Ingresar
            </button><br/>
            <span>¿No tienes una cuenta? <Link to='/registrarse'>Registrarse</Link></span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InicioSesion;
