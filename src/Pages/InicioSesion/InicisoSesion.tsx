import React from 'react';
import './InicioSesion.css'

const InicioSesion: React.FC = () => {
  return (
    <div className='body'>
        <div className='card'>
            <div className='login'>
                <h2 style={{textAlign:"center"}}>Iniciar Sesión</h2><br/><br/><br/>
                <form action='/login' method='POST'>
                    <label>Usuarios</label><br />
                    <input type='text' id='username' name='username' required></input><br/><br/><br/>

                    <label>Contraseña</label><br/>
                    <input type='password' id='password' name='password' required></input><br/><br/><br/>

                    <button style={{position:"relative",justifyContent:"center",alignItems:"center"}} type='submit'>Ingresar</button>
                </form>
            </div>
        </div>
    </div>

  );
};

export default InicioSesion;