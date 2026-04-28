import React from 'react'
import "../Styles/SuggestionsFooter.css"
import "tailwindcss";

function SuggestionsFooter() {
  return (
    <div>
        <div className="d-flex flex-wrap justify-content-left gap-1 mt-2  ">

          
          <span className="base-text">About • </span>
          <span className="base-text">Help • </span>
          <span className="base-text">Press • </span>
          <span className="base-text">API • </span>
          <span className="base-text">Jobs • </span>        
          <span className="base-text">Privacy • </span>
          <span className="base-text">Terms • </span>
          <span className="base-text">Locations • </span>
          <span className="base-text">Language • </span>          
          <span className="base-text">Meta Verified  </span>

        </div>


        <div className="d-flex flex-wrap justify-content-left gap-3 mt-4 pb-5 ">

          <span className="base-text">

            © 2026 Instagram from Meta

          </span>

        </div>
    </div>
          )
}


export default SuggestionsFooter