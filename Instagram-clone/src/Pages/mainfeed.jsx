import React from 'react'
import Stories from '../Components/story'
import Posts from '../Components/posts'
import Footer from '../Components/footer'

function Mainfeed() {
  return (
    <>
      <div><Stories/></div>
      <div><Posts/></div>
      <div ><Footer/></div>
    </>
  )
}

export default Mainfeed