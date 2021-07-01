import React from 'react'

export const About = () => {
    let deco = {
        minHeight: "70vh",
        margin: "40px auto",
        // color: "white",
        // background: "#2E2E2E",
        // border: "2px solid #2E2E2E",
        // borderRadius: "25px"
    }
    return (
        <div style={deco}>
            This is the Abput secction
            <p>Lorem ipsum dolor sit amet, 
                consectetur adipisicing elit. 
                Officia numquam repellat corporis, 
                vitae cum id hic recusandae nulla dolores
                 ipsum minima quidem soluta maxime libero maiores itaque quaerat velit harum!</p>
        </div>
    )
}
