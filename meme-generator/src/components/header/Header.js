import './Header.css'
import face from '../../images/Troll Face.png'

const Header = () => {
  return (
    <div className='header'>
      <img className='face' src={face} alt='face' />
      <h2 className='meme'>MemeGenerator</h2>
      <h4 className='title'>React Course - Project 3</h4>
    </div>
  )
};

export default Header;
