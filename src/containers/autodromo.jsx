import Reac, {useState} from 'react'; // Siempre traer primero el  useState para trabajar la ligica que vamos a tener en este componente
import '../styles/autodromo.css';

const Autodromo = () => {
    const [car, moveCar] = useState('');

    const handleClick = () => {
        var posicionCarro = [0,0,0,0,0];
        var meta = 1155;
        var proceso;
        
        function incrementa() {
            for(var i = 0;i < posicionCarro.length; i++) {
                posicionCarro[i] +=  Math.floor(Math.random() * 40);
                document.getElementById("c"+(i+1)).style.left = posicionCarro[i] + "px";
                if (posicionCarro[i] >= meta) {
                    clearInterval(proceso);
                    alert("El ganador es el carro: " + (i+1));
                }
            }
        }

        moveCar(proceso = setInterval(incrementa, 50));
    }

    return (
        //  Title 

        <div className='autodromo'>

            <h1 className='autodromoTitle'>Autodromo</h1>

            <img src={require('../assets/pista-de-carreras.jpg')} alt="pista-carreras" className='pistaCarreras'/>

            {/* Images */}
            {/* <img src={require('../assets/carro.png')} /> */}
            <img className="carImg" src={require("../assets/carro.png")} id="c1" alt="car"/>
            <img class="carImg" src={require("../assets/carro.png")} id="c2" alt="car"/>
            <img class="carImg" src={require("../assets/carro.png")} id="c3" alt="car"/>
            <img class="carImg" src={require("../assets/carro.png")} id="c4" alt="car"/>
            <img class="carImg" src={require("../assets/carro.png")} id="c5" alt="car"/>
            
            {/* Button  */}
            <button class="runBtn" onClick={handleClick} >Run</button>
            {/* {car} */}

        </div>
    );
}

export default Autodromo;