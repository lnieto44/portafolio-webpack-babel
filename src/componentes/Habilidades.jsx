import React, { Component } from 'react'
import { ContenidoHabilidades, EducacionH2, HabilidadesH5, LineaHabilidades, SpanHabilidades } from '../../Styled/StyledComponente'

export default class Habilidades extends Component {
  render() {
    return (
        <div className="Habilidades">
        <EducacionH2 name="Habilidades" />
        <ContenidoHabilidades>
            <div className="item-habilidades">
                <HabilidadesH5>HTML</HabilidadesH5>
                <LineaHabilidades >
                </LineaHabilidades>
            </div>
            <div className="item-habilidades">
                <HabilidadesH5>CSS</HabilidadesH5>
                <LineaHabilidades>
                </LineaHabilidades>
            </div>
            <div className="item-habilidades">
                <HabilidadesH5>JavaScript</HabilidadesH5>
                <LineaHabilidades>
                </LineaHabilidades>
            </div>
        </ContenidoHabilidades>
    </div>
    )
  }
}
