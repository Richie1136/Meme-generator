import './Meme.css'
import memesData from '../../memeData'
import { useState } from 'react'

console.log(memesData)

const Meme = () => {

  const [memeImage, setMemeImage] = useState('');

  /**
       * Challenge: Save the random meme URL in state
       * - Create new state called `memeImage` with an
       *   empty string as default
       * - When the getMemeImage function is called, update
       *   the `memeImage` state to be the random chosen
       *   image URL
       * - Below the div.form, add an <img /> and set the
       *   src to the new `memeImage` state you created
       */

  const getMemeImage = () => {
    const memesArray = memesData.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    setMemeImage(memesArray[randomNumber].url)
  }


  return (
    <main>
      <div className='form'>
        <input className='inputs' type='text' placeholder='Shut up' />
        <input className='inputs' type='text' placeholder='and take my money' />
        <button onClick={getMemeImage} className='form-button'>Get a new name image 🖼</button>
        <img src={memeImage} />
      </div>
    </main>
  )
};

export default Meme;




// import React from "react"
// // import memesData from "../memesData.js"

// export default function Meme() {
//   const [memeImage, setMemeImage] = React.useState("")
//   /**
//    * Challenge: Save the random meme URL in state
//    * - Below the div.form, add an <img /> and set the
//    *   src to the new `memeImage` state you created
//    */

//   function getMemeImage() {
//     const memesArray = memesData.data.memes
//     const randomNumber = Math.floor(Math.random() * memesArray.length)
//     setMemeImage(memesArray[randomNumber].url)

//   }

//   return (
//     <main>
//       <div className="form">
//         <input
//           type="text"
//           placeholder="Top text"
//           className="form--input"
//         />
//         <input
//           type="text"
//           placeholder="Bottom text"
//           className="form--input"
//         />
//         <button
//           className="form--button"
//           onClick={getMemeImage}
//         >
//           Get a new meme image 🖼
//         </button>
//       </div>
//       <img src={memeImage} />
//     </main>
//   )
// }