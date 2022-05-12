import React from 'react'
import { Link as ScrollLink } from 'react-scroll';

import linkImg from '../../assets/img/navlink.svg'


const SideNavigation = () => {
    return (
        <div className='side__nav'>
            <ScrollLink to="slider__section"
                smooth={true}
                spy={true}
                duration={200}
                className="nav__link"
            >
                <img src={linkImg} width="40px" height="auto" />
            </ScrollLink>
            <ScrollLink to="about__section"
                smooth={true}
                spy={true}
                duration={200}
                className="nav__link"
            >
                <img src={linkImg} width="40px" height="auto" />
            </ScrollLink>
            <ScrollLink to="staking__section"
                smooth={true}
                spy={true}
                duration={200}
                className="nav__link"
            >
                <img src={linkImg} width="40px" height="auto" />
            </ScrollLink>
            <ScrollLink to="earning__section"
                smooth={true}
                spy={true}
                duration={200}
                className="nav__link"
            >
                <img src={linkImg} width="40px" height="auto" />
            </ScrollLink>
            <ScrollLink to="tokenomics__section"
                smooth={true}
                spy={true}
                duration={200}
                className="nav__link"
            >
                <img src={linkImg} width="40px" height="auto" />
            </ScrollLink>
            <ScrollLink to="advantage__section"
                smooth={true}
                spy={true}
                duration={200}
                className="nav__link"
            >
                <img src={linkImg} width="40px" height="auto" />
            </ScrollLink>
            <ScrollLink to="rewards__section"
                smooth={true}
                spy={true}
                duration={200}
                className="nav__link"
            >
                <img src={linkImg} width="40px" height="auto" />
            </ScrollLink>
            <ScrollLink to="todo__section"
                smooth={true}
                spy={true}
                duration={200}
                className="nav__link"
            >
                <img src={linkImg} width="40px" height="auto" />
            </ScrollLink>
            <ScrollLink to="documents__section"
                smooth={true}
                spy={true}
                duration={200}
                className="nav__link"
            >
                <img src={linkImg} width="40px" height="auto" />
            </ScrollLink>
            <ScrollLink to="buy__section"
                smooth={true}
                spy={true}
                duration={200}
                className="nav__link"
            >
                <img src={linkImg} width="40px" height="auto" />
            </ScrollLink>
            <ScrollLink to="mobileapp__section"
                smooth={true}
                spy={true}
                duration={200}
                className="nav__link"
            >
                <img src={linkImg} width="40px" height="auto" />
            </ScrollLink>
            <ScrollLink to="faqs__section"
                smooth={true}
                spy={true}
                duration={200}
                className="nav__link"
            >
                <img src={linkImg} width="40px" height="auto" />
            </ScrollLink>
        </div>
    )
}

export default SideNavigation;