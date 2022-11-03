import Reac, {useState} from 'react';

const autodromo = () => {
    const [car, moveCar] = useState('');

    const handleClick = () => {
        moveCar('Hola Mundo');
    }

    return (
        //  Title 

        <div className='autodromo'>
            <h1>Autodromo</h1>
        
             {/* Images */}
            <img src={require('./images/carro.png')} />
            <img class="carImg" src="./images/carro.png" id="c1" alt="car"/>
            <img class="carImg" src="./images/carro.png" id="c2" alt="car"/>
            <img class="carImg" src="./images/carro.png" id="c3" alt="car"/>
            <img class="carImg" src="./images/carro.png" id="c4" alt="car"/>
            <img class="carImg" src="./images/carro.png" id="c5" alt="car"/>
            
            {/* Button  */}
            <button class="runBtn" onClick={handleClick} >Run</button>
            {car}
        </div>
    );
}

export default autodromo;