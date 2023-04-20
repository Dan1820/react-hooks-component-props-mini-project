import React from "react"

function Article({Title,date="January 1, 1970", preview}){
    return (
        <div>
            <article>
                <h3>{Title}</h3>
                <small>{date}</small>
                <p>{preview}</p>
            </article>
        </div>
        
    )

}
export default Article