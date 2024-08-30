import { Link } from "react-router-dom";
import HeaderBottom from "../../Principal/HeaderBottom";
import './VentasCorporativas.css';

const VentasCorporativas = () => {
    return (

        <div>
            <HeaderBottom />
            
            <div style={{width:"100%",height:"50vh",display:"flex",flexDirection:"row",alignItems:"center"}}>
                <div style={{height:"30vh",width:"40vw",display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <span style={{fontSize:"45px",fontWeight:"bold",width:"26vw"}}>
                        <span>LOS </span>
                        <span style={{color:"green"}}>MEJORES PRODUCTOS </span>
                        <span>PARA TU OFICINA</span>
                    </span>
                </div>

                <div style={{height:"35vh",width:"57vw"}}>
                    {/*IMAGEN AL LADO  */}
                </div>
            </div>

            <div style={{width:"100%",height:"40vh",display:"flex",flexDirection:"row",gap:"2em",justifyContent:"center",alignItems:"center"}}>
                <Link to='/conocenos-ventascorporativas'><img className="tuoficina" src="CONOCENOS.png" alt="Conócenos" /></Link>
                <Link to='/contactenos-ventascorporativas'><img className="tuoficina" src="CONTACTENOS.png" alt="Contáctenos" /></Link>
                <Link to='/catalogo-ventascorporativas'><img className="tuoficina" src="CATALOGO.png" alt="Catálogo" /></Link>
            </div>
        </div>
    );
};

export default VentasCorporativas;