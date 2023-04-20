import React from "react"

function About(image="https://via.placeholder.com/215",abouttext){
    return (
        <div>
       
        <aside>
            <img src={image} alt="blog logo" />
            <p>{abouttext}</p>
        </aside>
             
        </div>
    )
}
export default About