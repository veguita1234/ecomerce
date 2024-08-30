import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Registrarse.css';

const Registrarse: React.FC = () => {
  const [correo, setCorreo] = useState('');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userCode, setUserCode] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('http://localhost:5041/api/SeguridadUsers/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          Correo: correo,
          Name: name,
          LastName: lastName,
          UserCode: userCode,
          UserName: userName,
          Password: password
        })
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Token:', data.token);
        localStorage.setItem('token', data.token);
        localStorage.setItem('name', data.name); // Guardar el nombre en localStorage

        // Redirigir a la página principal o a otra ruta después de registrarse
        navigate('/');
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Error al registrarse. Inténtalo de nuevo.');
      }
    } catch (error) {
      console.error('Error al registrarse:', error);
      setError('Error de conexión. Inténtalo de nuevo más tarde.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='body'>
      <div className='card'>
        <div className='login'>
          <h2 style={{ textAlign: 'center' }}>Registrarse</h2>
          <br />
          <br />
          <br />
          {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
          {loading && <p style={{ textAlign: 'center' }}>Cargando...</p>}
          <form onSubmit={handleRegister}>
            <label>Correo Electrónico</label>
            <br />
            <input
              type='email'
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              required
              style={{width:"15vw"}}
            />
            <br />
            <br />
            <br />
            <label>Nombres</label>
            <br />
            <input
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={{width:"15vw"}}
            />
            <br />
            <br />
            <br />
            <label>Apellidos</label>
            <br />
            <input
              type='text'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              style={{width:"15vw"}}
            />
            <br />
            <br />
            <br />
            <label>Código Usuario</label>
            <br />
            <input
              type='text'
              value={userCode}
              onChange={(e) => setUserCode(e.target.value)}
              required
              style={{width:"15vw"}}
            />
            <br />
            <br />
            <br />
            <label>Nombre de Usuario</label>
            <br />
            <input
              type='text'
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
              style={{width:"15vw"}}
            />
            <br />
            <br />
            <br />
            <label>Contraseña</label>
            <br />
            <input
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{width:"15vw"}}
            />
            <br />
            <br />
            <br />
            <button
              style={{ position: 'relative', justifyContent: 'center', alignItems: 'center' }}
              type='submit'
              disabled={loading}
            >
              Registrarme
            </button>
            <br />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registrarse;
