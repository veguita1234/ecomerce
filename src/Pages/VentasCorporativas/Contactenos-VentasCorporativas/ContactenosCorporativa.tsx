import HeaderBottom from "../../Principal/HeaderBottom";
import { Link } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import './ContactenosCorporativa.css'

const ContactenosCorporativa: React.FC = () => {

    return (
        <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
            <HeaderBottom />

            <div style={{width:"100%",height:"50vh",display:"flex",flexDirection:"row",alignItems:"center"}}>
                <div style={{height:"30vh",width:"30vw",display:"flex",justifyContent:"end",alignItems:"center"}}>
                    <span style={{fontSize:"45px",fontWeight:"bold",width:"25vw",border:"1px solid #009450",padding:"10px",textAlign:"center",
                        backgroundColor:"#009450",color:"white",borderRadius:"40px"
                    }}>
                        CONTÁCTENOS
                    </span>
                </div>

                <div style={{height:"35vh",width:"70vw"}}>
                    {/*IMAGEN AL LADO  */}
                </div>
            </div>

            <div style={{width:"75vw",height:"10vh",display:"flex",alignItems:"center"}}>
                <Link style={{display:"flex",alignItems:"center",textDecoration:"none"}} 
                to='/ventas-corporativas'>
                    <IoIosArrowRoundBack style={{fontSize:"25px",color:"#009450"}}/>
                    <span style={{color:"#009450",fontSize:"18px"}}>Volver atrás</span>
                </Link>
                
            </div>
            
            <div style={{width:"75vw",height:"100vh",}}>
                <div style={{height:"30vh",width:"70",display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"10px",
                            padding:"15px",backgroundColor:"#E2E2E2"}}>
                    <div style={{display:"flex",flexDirection:"column"}}>
                        <span style={{fontWeight:"bold", fontSize:"13px"}}>NOMBRE</span>
                        <input className="inputs" placeholder='Nombre' required />
                    </div>
                    <div style={{display:"flex",flexDirection:"column"}}>
                        <span style={{fontWeight:"bold", fontSize:"13px"}}>APELLIDO</span>
                        <input className="inputs" placeholder='Apellido' required />
                    </div>
                    <div style={{display:"flex",flexDirection:"column"}}>
                        <span style={{fontWeight:"bold", fontSize:"13px"}}>E-MAIL</span>
                        <input className="inputs" placeholder='correo@ejemplo.com' required />
                    </div>
                    <div style={{display:"flex",flexDirection:"column"}}>
                        <span style={{fontWeight:"bold", fontSize:"13px"}}>TELÉFONO</span>
                        <input className="inputs"  required />
                    </div>
                    <div style={{display:"flex",flexDirection:"column"}}> 
                        <span style={{fontWeight:"bold", fontSize:"13px"}}>EMPRESA / RAZÓN SOCIAL</span>
                        <input className="inputs" placeholder='RUC' required />
                    </div>
                    <div style={{display:"flex",flexDirection:"column"}}>
                        <span style={{fontWeight:"bold", fontSize:"13px"}}>RUC</span>
                        <input className="inputs"  required />
                    </div>
                
                </div>

                <div style={{height:"35vh",width:"70",padding:"15px",backgroundColor:"#E2E2E2"}}>
                    <div style={{display:"flex",flexDirection:"column",justifyContent:"start",alignItems:"start",textAlign:"start",position:"absolute"}}>
                        <span style={{fontWeight:"bold", fontSize:"13px"}}>MENSAJE</span>
                        <textarea className="input-mensaje" placeholder="Mensaje..." required /><br/>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <input type="checkbox" id="terms" name="terms" required />
                            <span style={{fontSize:"14px"}}>
                                <span>He leído los </span>
                                <span style={{color:"#00429B"}}>términos y condiciones</span>
                            </span>
                        </div><br/>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <input type="checkbox" id="terms" name="terms" required />
                            <span style={{fontSize:"14px"}}>
                                <span>Declaro haber leído las </span>
                                <span style={{color:"#00429B"}}>políticas de privacidad </span>
                                <span>y autorizo el tratamiento de mis datos conforme a ella.</span>
                            </span>
                        </div>
                        <div style={{justifyContent:"end",display:"flex",width:"71vw",height:"8vh"}}>
                            <button style={{width:"10vw",height:"6vh",backgroundColor:"#008C4B",color:"white",border:"1px transparent",borderRadius:"5px"}}>Enviar</button>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </div>
        
    );
};

export default ContactenosCorporativa;