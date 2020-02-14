import React from 'react'

export default function Pointer(props) {
    return (
        <img
            src="https://www.animatedimages.org/data/media/492/animated-fireworks-image-0087.gif"
            alt="firework"
            width="50px"
            style={{
                position: "absolute",
                left: props.mouse.mouseX,
                top: props.mouse.mouseY
            }}
        />
    )
}