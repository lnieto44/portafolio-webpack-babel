import React, { Component } from 'react';
import Acerca_mi from '../src/componentes/Acerca_mi';
import Educacion from '../src/componentes/Educacion';
import Habilidades from '../src/componentes/Habilidades';

class Container extends Component {
    
    render() {
        return (
            <div>
            <Acerca_mi/>
            <div>
            <Educacion/>
            </div>
            <Habilidades/>
        
        </div>
        );
    }
}

export default Container;
