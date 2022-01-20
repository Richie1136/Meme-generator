import './Meme.css'

const Meme = () => {
  return (
    <main>
      <form className='form'>
        <input className='inputs' type='text' placeholder='Shut up' />
        <input className='inputs' type='text' placeholder='and take my money' />
        <button className='newimage'>Get a new name image 🖼</button>
      </form>
    </main>
  )
};

export default Meme;
