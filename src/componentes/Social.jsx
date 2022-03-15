import React, { Component } from 'react'
import { SocialAnchor, SocialIcon, SocialLi, SocialStyle, SocialUl } from '../../Styled/StyledComponente'

export default class Social extends Component {
  render() {
    return (
        <SocialStyle>
        <SocialUl>
            <SocialLi>
                <SocialAnchor href="https://www.facebook.com/" target="blanck">
                    <ThemeProvider theme={facebook}>
                        <SocialIcon className="fab fa-facebook" />
                    </ThemeProvider>
                </SocialAnchor>
            </SocialLi>
            <SocialLi>
                <SocialAnchor href="https://twitter.com/ " target="blanck">
                    <ThemeProvider theme={twitter}>
                        <SocialIcon className="fab fa-twitter" />
                    </ThemeProvider>
                </SocialAnchor>
            </SocialLi>
            <SocialLi>
                <SocialAnchor href="https://co.linkedin.com/" target="blanck">
                    <ThemeProvider theme={linkedin}>
                        <SocialIcon className="fab fa-linkedin" />
                    </ThemeProvider>
                </SocialAnchor>
            </SocialLi>
            <SocialLi>
                <SocialAnchor href="https://github.com/" target="blanck">
                    <ThemeProvider theme={github}>
                        <SocialIcon className="fab fa-github" />
                    </ThemeProvider>
                </SocialAnchor>
            </SocialLi>
        </SocialUl>

    </SocialStyle>
    )
  }
}
