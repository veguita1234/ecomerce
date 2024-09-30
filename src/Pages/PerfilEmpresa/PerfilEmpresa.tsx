import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './PerfilEmpresa.css';

// Componentes para cada sección
function Editar() {
  const [formData, setFormData] = useState({
    ruc: '',
    razonSocial: '',
    email: '',
    departamento: '',
    provincia: '',
    distrito: '',
    direccion: '',
    telefono: '',
    celular: '',
    nombre: '',
    apellido: '',
    codigo: '',
    correoPersonal: '',

  });

  const [loading, setLoading] = useState(false); // Estado para manejar el estado de carga
  const [error, setError] = useState('');

  useEffect(() => {
    // Simula la carga de datos (puede ser de una API o localStorage)
    const storedData = {
      ruc: localStorage.getItem('ruc') || '',
      razonSocial: localStorage.getItem('razonSocial') || '',
      email: localStorage.getItem('email') || '',
      departamento: localStorage.getItem('departamento') || '',
      provincia: localStorage.getItem('provincia') || '',
      distrito: localStorage.getItem('distrito') || '',
      direccion: localStorage.getItem('direccion') || '',
      telefono: localStorage.getItem('telefono') || '',
      celular: localStorage.getItem('celular') || '',
      nombre: localStorage.getItem('nombre') || '',
      apellido: localStorage.getItem('apellido') || '',
      codigo: localStorage.getItem('codigo') || '',
      correoPersonal: localStorage.getItem('correoPersonal') || '',

    };
  
    setFormData(storedData);
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSave = () => {
    setLoading(true); // To show loading state while saving
    const userDto = {
      nombre: formData.nombre,
      apellido: formData.apellido,
      codigo: formData.codigo,
      correoPersonal: formData.correoPersonal,
      // Any other user-related data
    };
  
    const empresaDto = {
      ruc: formData.ruc,
      razonSocial: formData.razonSocial,
      email: formData.email,
      departamento: formData.departamento,
      provincia: formData.provincia,
      distrito: formData.distrito,
      direccion: formData.direccion,
      telefono: formData.telefono,
      celular: formData.celular,
      // Any other company-related data
    };
  
    // Replace 'userId' and 'empresaId' with actual IDs or use logic to get them
    const userId = 'someUserId';
    const empresaId = 'someEmpresaId';
    const handleSaveUser = (userId: string, userDto: any) => {
      return new Promise<void>((resolve, reject) => {
        // Simula una llamada a la API para guardar los datos del usuario
        setTimeout(() => {
          console.log('Usuario guardado:', userId, userDto);
          resolve();
        }, 1000); // Simula un retardo de 1 segundo
      });
    };
    
    // Simula una función para guardar los datos de la empresa
    const handleSaveCompany = (empresaId: string, empresaDto: any) => {
      return new Promise<void>((resolve, reject) => {
        // Simula una llamada a la API para guardar los datos de la empresa
        setTimeout(() => {
          console.log('Empresa guardada:', empresaId, empresaDto);
          resolve();
        }, 1000); // Simula un retardo de 1 segundo
      });
    };
    Promise.all([
      handleSaveUser(userId, userDto),
      handleSaveCompany(empresaId, empresaDto)
    ])
      .then(() => {
        setLoading(false);
        alert('Cambios guardados con éxito.');
      })
      .catch(err => {
        setError('Hubo un error al guardar los cambios.');
        setLoading(false);
      });
  };
  
  

  return (
    <div>
      <span style={{ fontSize: "50px", fontWeight: "bold", color: "#113D60" }}>Editar Perfil</span><br /><br />
      <hr /><br /><br />

      <div className='formularioPerfil'>
        <label className='labelPerfil' htmlFor='ruc'>RUC</label>
        <input className='input' type='text' id='ruc' name='ruc' value={formData.ruc} onChange={handleChange} />

        <label className='labelPerfil' htmlFor='razonSocial'>Razón Social</label>
        <input className='input' type='text' id='razonSocial' name='razonSocial' value={formData.razonSocial} onChange={handleChange} />

        <label className='labelPerfil' htmlFor='email'>Correo Corporativo</label>
        <input className='input' type='email' id='email' name='email' value={formData.email} onChange={handleChange} />

        <label className='labelPerfil' htmlFor='departamento'>Departamento</label>
        <input className='input' type='text' id='departamento' name='departamento' value={formData.departamento} onChange={handleChange} />

        <label className='labelPerfil' htmlFor='provincia'>Provincia</label>
        <input className='input' type='text' id='provincia' name='provincia' value={formData.provincia} onChange={handleChange} />

        <label className='labelPerfil' htmlFor='distrito'>Distrito</label>
        <input className='input' type='text' id='distrito' name='distrito' value={formData.distrito} onChange={handleChange} />

        <label className='labelPerfil' htmlFor='direccion'>Dirección</label>
        <input className='input' type='text' id='direccion' name='direccion' value={formData.direccion} onChange={handleChange} />

        <label className='labelPerfil' htmlFor='telefono'>Teléfono</label>
        <input className='input' type='text' id='telefono' name='telefono' value={formData.telefono} onChange={handleChange} />

        <label className='labelPerfil' htmlFor='celular'>Celular</label>
        <input className='input' type='text' id='celular' name='celular' value={formData.celular} onChange={handleChange} />

        <label className='labelPerfil' htmlFor='nombre'>Nombre</label>
        <input className='input' type='text' id='nombre' name='nombre' value={formData.nombre} onChange={handleChange} />

        <label className='labelPerfil' htmlFor='apellido'>Apellido</label>
        <input className='input' type='text' id='apellido' name='apellido' value={formData.apellido} onChange={handleChange} />

        <label className='labelPerfil' htmlFor='codigo'>Código de Usuario</label>
        <input className='input' type='text' id='codigo' name='codigo' value={formData.codigo} onChange={handleChange} />

        <label className='labelPerfil' htmlFor='correoPersonal'>Correo Personal</label>
        <input className='input' type='email' id='correoPersonal' name='correoPersonal' value={formData.correoPersonal} onChange={handleChange} />


      </div>

      <div style={{ width: "50vw", display: "flex", height: "8vh", justifyContent: "end", alignItems: "end" }}>
        <button style={{ height: "6vh", borderRadius: "0" }} onClick={handleSave} disabled={loading}>Guardar cambios</button>
      </div>
      <br /><br />
    </div>
  );
}

function Cambiar() {
  return <div>Esta es la sección de Cambiar Contraseña</div>;
}

function Administrar() {
  return <div>Esta es la sección de Administrar Aplicaciones</div>;
}

function Badges() {
  return <div>Esta es la sección de Badges</div>;
}

const PerfilEmpresa: React.FC = () => {
  const [seccionActiva, setSeccionActiva] = useState('Bienvenida');

  const renderSeccion = () => {
    if (seccionActiva === 'Bienvenida') {
      return <div>MUCHAS GRACIAS</div>;
    }

    switch (seccionActiva) {
      case 'Editar':
        return <Editar />;
      case 'Cambiar':
        return <Cambiar />;
      case 'Administrar':
        return <Administrar />;
      case 'Badges':
        return <Badges />;
      default:
        return <div>MUCHAS GRACIAS</div>;
    }
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div style={{ 
        width: '20vw', 
        backgroundColor: '#F5F7F9', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'end',
        position: 'fixed',
        top: 0,
        height: '100vh',
        overflowY: 'auto'
      }}>
        <span style={{ border: "1px solid gray", width: "15vw", padding: "15px", color: "#B7BFC6", fontWeight: "bold", backgroundColor: "white" }}>
          TU CUENTA
        </span>
        <ul style={{ listStyle: 'none', padding: 0, width: "15vw" }}>
          <li style={{ 
            border: "1px solid gray", 
            padding: "10px",
            color: seccionActiva === 'Editar' ? '#113D60' : '#446A8E',
            backgroundColor: seccionActiva === 'Editar' ? '#f0f0f0' : '#FDFCFD',
            fontWeight: seccionActiva === 'Editar' ? 'bold' : 'normal',
            borderBottom:"none",
            borderTop:"none" 
          }} onClick={() => setSeccionActiva('Editar')}>Editar Perfil</li>
          <li style={{ 
            border: "1px solid gray", 
            padding: "10px",
            color: seccionActiva === 'Cambiar' ? '#113D60' : '#446A8E',
            backgroundColor: seccionActiva === 'Cambiar' ? '#f0f0f0' : '#FDFCFD',
            fontWeight: seccionActiva === 'Cambiar' ? 'bold' : 'normal',
            borderBottom:"none",
            borderTop:"none"
          }} onClick={() => setSeccionActiva('Cambiar')}>Cambiar Contraseña</li>
          <li style={{ 
            border: "1px solid gray", 
            padding: "10px",
            color: seccionActiva === 'Administrar' ? '#113D60' : '#446A8E',
            backgroundColor: seccionActiva === 'Administrar' ? '#f0f0f0' : '#FDFCFD',
            fontWeight: seccionActiva === 'Administrar' ? 'bold' : 'normal',
            borderBottom:"none",
            borderTop:"none"
          }} onClick={() => setSeccionActiva('Administrar')}>Administrar Aplicaciones</li>
          <li style={{ 
            border: "1px solid gray", 
            padding: "10px",
            color: seccionActiva === 'Badges' ? '#113D60' : '#446A8E',
            backgroundColor: seccionActiva === 'Badges' ? '#f0f0f0' : '#FDFCFD',
            fontWeight: seccionActiva === 'Badges' ? 'bold' : 'normal',
            borderBottom:"none",
            borderTop:"none"
          }} onClick={() => setSeccionActiva('Badges')}>Badges</li>
          <Link style={{textDecoration:"none"}} to='/dashboard'>
            <li style={{
              border: "1px solid gray", 
              padding: "10px",
              borderTop:"none",
              backgroundColor:"#FDFCFD"
            }}>
              Salir
            </li>
          </Link>
        </ul>
      </div>
      <div style={{ 
        width: '80vw',
        marginLeft: '20vw',
        padding: '20px',
        overflowY: 'auto',
        backgroundColor: '#F5F7F9'
      }}>
        {renderSeccion()}
      </div>
    </div>
  );
};

export default PerfilEmpresa;
