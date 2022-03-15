import React, { Component } from 'react'

import { AcercaAvatar, AcercaDescrip, AcercaH2, AcercaLocalizacion, AcercaNombre, AcercaProfession, ImgAcerca, StyleAcerca  } from '../../Styled/StyledComponente'
//import Social from './Social'
//import Social from '../componentes/Social'
export default class Acerca_mi extends Component {
  render() {
    return (
      <StyleAcerca>
      <div className="Acerca-container">
          <AcercaAvatar>
              <figure>
                  <ImgAcerca src="https://eafitrequisitos.s3.us-east-2.amazonaws.com/john.png" alt="Mi avatar" />
              </figure>
          </AcercaAvatar>
          <AcercaNombre>
              <AcercaH2>Luis Guillermo Nieto</AcercaH2>
          </AcercaNombre>
          <div className="AcercaProfession">
              <AcercaProfession>FrontEnd Developer en GeekAcademy</AcercaProfession>
          </div>
          <div className="AcercaDescrip">
              <AcercaDescrip>Soy ingeniero de sistemas</AcercaDescrip>
          </div>
          <div className="AcercaLocalizacion">
              <AcercaLocalizacion>Bogota, Colombia</AcercaLocalizacion>
          </div>
      </div>
  </StyleAcerca >
    )
  }
}
