import React, {useState} from 'react'
import Video from '../../video/video.mp4'
import { Button } from '../ButtonElements'
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight
} from './HeroElement'

const HeroSection = () => {

    const [hover, setHover] = useState(false)
    const onHover = () => {
        setHover(!hover)
    }
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
            </HeroBg>
            <HeroContent>
                <HeroH1>SAGNA Moussa</HeroH1>
                <HeroP>Developpeur Web / Web designer</HeroP>
                <HeroBtnWrapper>
                    <Button 
                    to="signup" 
                    onMouseEnter={onHover} 
                    onMouseLeave={onHover}
                    primary={true}
                    dark={true}
                    >
                        Let's go { hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
