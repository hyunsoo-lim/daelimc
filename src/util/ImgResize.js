import React, { useRef, useEffect } from 'react';
import styled from "styled-components"
import Fade from 'react-reveal/Fade';


const CcanvasDiv = styled.div
    `
width:100%;

text-align:center;
`
const Ccanvas = styled.canvas
    `

`

const ImgResize = (props) => {
    const canvasRef = useRef()

    const drawCanvas = function () {
        console.log("canvas");
        const image = new Image();
        const canvas = canvasRef.current
        const ctx = canvas?.getContext('2d')

        if (ctx) {
            canvas.width = 310;
            canvas.height = 210;
            canvas.backgroundColor = 'rgb(255, 255, 255)';

            image.src = props.imgsrc;

            image.onload = function () {
                ctx.clearRect(20, 20, canvas.width, canvas.height);
                ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
            }


            canvas.toBlob(function (blob) {
                const reader = new FileReader();
                reader.onload = function (e) {
                    canvasRef.current.src = reader.result;
                }
                reader.readAsDataURL(blob);

            })
        } else {
            throw new Error('Could not get context')
        }
    };

    useEffect(() => {
        drawCanvas()
    }, [])

    return (
        <CcanvasDiv>
            <Fade>
                <Ccanvas ref={canvasRef}></Ccanvas>
            </Fade>
        </CcanvasDiv>
    )
}
export default ImgResize;