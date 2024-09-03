import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Registrarse.css'; 

const RegistroUsuario: React.FC<{ onClose: () => void }> = ({ onClose }) => {
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
  const [showSelection, setShowSelection] = useState(true);
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
          navigate('/dashboard');
        } else {
          localStorage.setItem('name', name || '');
          navigate('/');
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
    setShowSelection(false);

    // Resetear valores para evitar que persistan entre tipos
    setUserName('');
    setPassword('');
  };

  const handleBackToSelection = () => {
    setShowSelection(true);
  };

  const cardStyle: React.CSSProperties = {
    height: userType === null ? '30vh' : userType === 'usuario' ? '70vh' : '95vh',
    transition: 'height 0.3s ease',
    width: userType === null ? '35vw' : userType === 'usuario' ? '30vw' : '40vw',
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
          {!showSelection && (
            <h2 style={{ textAlign: 'center' }}>{title}</h2>
          )}
          {showSelection ? (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', marginTop: '20vh'}}>
              <p>Por favor, elige una opción para registrarte.</p>
              <div style={{ display: 'flex', gap: '10px' }}>
                <button onClick={() => handleUserTypeSelection('usuario')}>
                  Registrarse como Usuario
                </button>
                <button onClick={() => handleUserTypeSelection('empresa')}>
                  Registrarse como Empresa
                </button>
              </div>
              <br />
              <button onClick={onClose} style={{ width: '15vw' }}>
                Regresar
              </button>
            </div>
          ) : (
            <>
              {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
              {loading && <p style={{ textAlign: 'center' }}>Cargando...</p>}
              <form onSubmit={handleRegister}>
                {userType === 'usuario' && (
                  <>
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
                  </>
                )}

                {userType === 'empresa' && (
                  <>
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
                  </>
                )}
                <button type='submit' style={{ width: '15vw' }}>
                  Registrarse
                </button>
                <br /><br />
                <button onClick={handleBackToSelection} style={{ width: '15vw' }}>
                  Volver a Selección
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default RegistroUsuario;
