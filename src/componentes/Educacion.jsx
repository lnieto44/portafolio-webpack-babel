import React, { Component } from 'react'
import { EducacionH2, EducacionH3, EstudiodP } from '../../Styled/StyledComponente'

export default class Educacion extends Component {
  render() {
    return (
        <div className="Educacion">
        <EducacionH2 name="Estudios" />
        <div className="Educacion-container">
            <div className="Educacion-item">
                <EducacionH3>Ingeniero Sistemas - ITFIP -
                    <span>Febrero 2011 - Agosto 2017</span>
                </EducacionH3>
                <EstudiodP name="Lorem ipsum dolor sit amet consectetur adipiscing elit blandit, aptent sociis magnis fermentum iaculis cursus quis dignissim feugiat, eros faucibus mollis hac potenti hendrerit nulla."/>
            </div>
        </div>
    </div>
    )
  }
}
