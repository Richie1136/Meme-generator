import './Meme.css'
import memesData from '../../memeData'
import { useState } from 'react'


const Meme = () => {

  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: "http://i.imgflip.com/1bij.jpg"
  });
  const [allMemeImages, setAllMemeImages] = useState(memesData);

  /**
 * Challenge: 
 * 1. Set up the text inputs to save to
 *    the `topText` and `bottomText` state variables.
 * 2. Replace the hard-coded text on the image with
 *    the text being saved to state.
 */

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
    const memesArray = allMemeImages.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    const url = memesArray[randomNumber].url
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
    }))
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setMeme(prevstate => ({
      ...prevstate,
      [name]: value
    }))
  }


  return (
    <main>
      <div className='form'>
        <input className='form-input' type='text' name='topText' value={meme.topText} onChange={handleChange} placeholder='Top text' />
        <input className='form-input' type='text' name='bottomText' value={meme.bottomText} onChange={handleChange} placeholder='Bottom text' />
        <button onClick={getMemeImage} className='form-button'>Get a new name image 🖼</button>
      </div>
      <div className='meme'>
        <img className='meme-image' src={meme.randomImage} />
        <h2 className='meme-text top'>{meme.topText}</h2>
        <h2 className='meme-text bottom'>{meme.bottomText}</h2>
      </div>
    </main>
  )
};

export default Meme;