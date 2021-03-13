import {useState} from 'react';

//imutabilidade - variavel n terá seu valor alterado e sim dar um novo valor a ela

export function Counter(){

    const [counter,setCounter] = useState(0);

    function increment(){
        setCounter(counter+1);
    }

    return(
        <div>
            <h2>{counter}</h2>
            <button type="button" onClick={increment}>add</button>
        </div>
    );
}