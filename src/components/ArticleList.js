import React from "react"
import Article from "./Article"

function ArticleList({posts}){
  const postList= posts.map((post)=>(
    <article
        key={post.id}
        Title={post.Title}
        preview={post.preview}
        minutes={post.minutes}
    />
  ))
  return(
    <main>
        {postList}
    </main>
  )
}
export default ArticleList