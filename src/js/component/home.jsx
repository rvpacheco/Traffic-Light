import React, {useState} from "react";



const Home = () => {
	const [color, setColor]=useState("")
	return (
		<div className="container">
		<div className="row justify-content-center">
		  <div className="col-md-6">
			<div className="semaforo">
				<div className="colores d-flex flex-column justify-content-center align-items-center">
				<div className={`${color == "Rojo" ? "glow" : ""} rounded-circle light Rojo`} onClick={() => setColor("Rojo")}></div>
				<div className={`${color == "Amarillo" ? "glow" : ""} rounded-circle light Amarillo`} onClick={() => setColor("Amarillo")}></div>
				<div className={`${color == "Verde" ? "glow" : ""} rounded-circle light Verde`} onClick={() => setColor("Verde")} ></div>
			</div>
			</div>
		  </div>
		</div>
	  </div>
	);
};

export default Home;
