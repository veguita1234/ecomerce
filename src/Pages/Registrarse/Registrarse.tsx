import React, { useState, useEffect } from 'react';
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
  const [userType, setUserType] = useState<'usuario' | 'empresa' | null>(null);
  const [empresaData, setEmpresaData] = useState({
    ruc: '',
    razonSocial: '',
    departamento: '',
    provincia: '',
    distrito: '',
    direccion: '',
    telefono: '',
    celular: ''
  });
  const navigate = useNavigate();

  useEffect(() => {
    const storedUserType = localStorage.getItem('userType') as 'usuario' | 'empresa' | null;
    setUserType(storedUserType);
  }, []);

  const handleRegister = async (e: React.FormEvent) => {
  e.preventDefault();
  setError('');
  setLoading(true);

  try {
    if (!userType) {
      setError('Tipo de usuario no seleccionado.');
      setLoading(false);
      return;
    }

    const endpoint = userType === 'empresa' ? 'registerCompany' : 'register';
    const requestBody = userType === 'empresa'
      ? { ...empresaData, UserName: userName, Password: password }
      : { Correo: correo, Name: name, LastName: lastName, UserCode: userCode, UserName: userName, Password: password };

    const response = await fetch(`http://localhost:5041/api/SeguridadUsers/${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    });

    if (response.ok) {
      const data = await response.json();
      localStorage.setItem('token', data.token);
      localStorage.setItem('userType', userType);
      if (userType === 'empresa') {
        localStorage.setItem('razonSocial', empresaData.razonSocial);
        navigate('/cotizar'); // Redirige a /cotizar si es una empresa
      } else {
        localStorage.setItem('name', name || '');
        navigate('/'); // Redirige a la raíz si es un usuario
      }
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
  
  const handleUserTypeSelection = (type: 'usuario' | 'empresa') => {
    setUserType(type);
    localStorage.setItem('userType', type);
  };

  const handleBackToSelection = () => {
    setUserType(null);
    localStorage.removeItem('userType');
  };

  const cardStyle: React.CSSProperties = {
    height: userType === null ? '30vh' : userType === 'usuario' ? '70vh' : '95vh',
    transition: 'height 0.3s ease',
    width: userType === null ? '25vw' : userType === 'usuario' ? '30vw' : '40vw',
  };

  const title = userType === 'usuario'
    ? 'Registrarse como Usuario'
    : userType === 'empresa'
    ? 'Registrarse como Empresa'
    : 'Registrarse';

  return (
    <div className='body'>
      <div className='card' style={cardStyle}>
        <div className='login'>
          <h2 style={{ textAlign: 'center' }}>{title}</h2>
          {!userType && (
            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '5vh' }}>
              <button onClick={() => handleUserTypeSelection('usuario')}>Registrarse como Usuario</button>
              <button onClick={() => handleUserTypeSelection('empresa')}>Registrarse como Empresa</button>
            </div>
          )}
          <br />
          {userType === null && (
            <div style={{ textAlign: 'center' }}>
              <p>Por favor, elige una opción para registrarte.</p>
              <button onClick={() => navigate(-2)} style={{ marginTop: '10px' }}>Regresar</button>
            </div>
          )}

          {userType === 'usuario' && (
            <>
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
                  style={{ width: '15vw' }}
                />
                <br /><br />
                <label>Nombres</label>
                <br />
                <input
                  type='text'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  style={{ width: '15vw' }}
                />
                <br /><br />
                <label>Apellidos</label>
                <br />
                <input
                  type='text'
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                  style={{ width: '15vw' }}
                />
                <br /><br />
                <label>Código de Usuario</label>
                <br />
                <input
                  type='text'
                  value={userCode}
                  onChange={(e) => setUserCode(e.target.value)}
                  required
                  style={{ width: '15vw' }}
                />
                <br /><br />
                <label>Nombre de Usuario</label>
                <br />
                <input
                  type='text'
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  required
                  style={{ width: '15vw' }}
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
                <button type='submit' disabled={loading}>
                  Registrarse
                </button>
              </form>
            </>
          )}

          {userType === 'empresa' && (
            <>
              <br />
              {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
              {loading && <p style={{ textAlign: 'center' }}>Cargando...</p>}
              <form onSubmit={handleRegister}>
                <label>RUC</label>
                <br />
                <input
                  type='text'
                  value={empresaData.ruc}
                  onChange={(e) => setEmpresaData({ ...empresaData, ruc: e.target.value })}
                  required
                  style={{ width: '15vw' }}
                />
                <br /><br />
                <label>Razón Social</label>
                <br />
                <input
                  type='text'
                  value={empresaData.razonSocial}
                  onChange={(e) => setEmpresaData({ ...empresaData, razonSocial: e.target.value })}
                  required
                  style={{ width: '15vw' }}
                />
                <br /><br />
                <label>Departamento</label>
                <br />
                <input
                  type='text'
                  value={empresaData.departamento}
                  onChange={(e) => setEmpresaData({ ...empresaData, departamento: e.target.value })}
                  required
                  style={{ width: '15vw' }}
                />
                <br /><br />
                <label>Provincia</label>
                <br />
                <input
                  type='text'
                  value={empresaData.provincia}
                  onChange={(e) => setEmpresaData({ ...empresaData, provincia: e.target.value })}
                  required
                  style={{ width: '15vw' }}
                />
                <br /><br />
                <label>Distrito</label>
                <br />
                <input
                  type='text'
                  value={empresaData.distrito}
                  onChange={(e) => setEmpresaData({ ...empresaData, distrito: e.target.value })}
                  required
                  style={{ width: '15vw' }}
                />
                <br /><br />
                <label>Dirección</label>
                <br />
                <input
                  type='text'
                  value={empresaData.direccion}
                  onChange={(e) => setEmpresaData({ ...empresaData, direccion: e.target.value })}
                  required
                  style={{ width: '15vw' }}
                />
                <br /><br />
                <label>Teléfono</label>
                <br />
                <input
                  type='text'
                  value={empresaData.telefono}
                  onChange={(e) => setEmpresaData({ ...empresaData, telefono: e.target.value })}
                  required
                  style={{ width: '15vw' }}
                />
                <br /><br />
                <label>Celular</label>
                <br />
                <input
                  type='text'
                  value={empresaData.celular}
                  onChange={(e) => setEmpresaData({ ...empresaData, celular: e.target.value })}
                  required
                  style={{ width: '15vw' }}
                />
                <br /><br />
                <label>Nombre de Usuario</label>
                <br />
                <input
                  type='text'
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  required
                  style={{ width: '15vw' }}
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
                <button type='submit' disabled={loading}>
                  Registrarse
                </button>
              </form>
            </>
          )}

          {userType && (
            <div style={{ marginTop: '20px', textAlign: 'center' }}>
              <button onClick={handleBackToSelection}>Regresar</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Registrarse;
