import './Meme.css'
import { useState, useEffect } from 'react'


const Meme = () => {

  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: "http://i.imgflip.com/1bij.jpg"
  });
  const [allMemes, setAllMemes] = useState([]);

  const getMemeImage = () => {
    const randomNumber = Math.floor(Math.random() * allMemes.length)
    const url = allMemes[randomNumber].url
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

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(data => setAllMemes(data.data.memes))
  }, []);




  return (
    <main>
      <div className='form'>
        <input className='form-input' type='text' name='topText' value={meme.topText} onChange={handleChange} placeholder='Top text' />
        <input className='form-input' type='text' name='bottomText' value={meme.bottomText} onChange={handleChange} placeholder='Bottom text' />
        <button onClick={getMemeImage} className='form-button'>Get a new name image 🖼</button>
      </div>
      <div className='meme'>
        <img className='meme-image' src={meme.randomImage} al='randomphoto' />
        <h2 className='meme-text top'>{meme.topText}</h2>
        <h2 className='meme-text bottom'>{meme.bottomText}</h2>
      </div>
    </main>
  )
};

export default Meme;
