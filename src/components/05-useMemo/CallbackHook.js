import React, { useState, useCallback, useEffect } from 'react';
import ShowIncrement  from './ShowIncrement';


const CallbackHook = () => {

    const [counter, setCounter] = useState( 10 );
// //Es un objeto, que apunta a un lugar de memoria por tanto cada vez que dispara almacena un espacio distinto
//     const increment = () => {
//         setCounter( counter + 1 );
//     }

    const increment = useCallback( (num) => {
        setCounter( c => c + num );
    }, [ setCounter ] );

    
    useEffect( () => {
        // ???
    }, [increment] )


    return (
        <div>
            <h1>useCallback Hook:  { counter }  </h1>
            <hr />

            <ShowIncrement increment={ increment } />

        </div>
    )
}
export default CallbackHook;