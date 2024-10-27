import searchicon from '../src/assets/searchicon.png'
import mic_icon from '../src/assets/mic_icon.png'
import lens_icon from '../src/assets/lens_icon.png'
import swimming from '../src/assets/swimming-.gif'

function Body() {
    return(
        <div className='bodyItems'>
        <img className='gif' src={swimming} alt="" />
        <div className='searchDiv'>
        <img className='search' src={searchicon} alt="" />
        <input type="text" />
        <img className='microphn' src={mic_icon} alt="" />
        <img className='lens' src={lens_icon} alt="" />
        </div>
        <div className='buttons'>
          <button className='button'>Google Search</button>
          <button className='button'>I'm Feeling Lucky</button>
        </div>
        <div className='nameLinks'>
          <h3 className='offered'>Google offered in:</h3>
          <a href="#"> हिन्दी</a>
          <a href="#">বাংলা</a>
          <a href="#">తెలుగు</a>
          <a href="#">मराठी</a>
          <a href="#">தமிழ்</a>
          <a href="#">ગુજરાતી</a>
          <a href="#"> ಕನ್ನಡ</a>
          <a href="#">മലയാളം</a>
          <a href="#"> ਪੰਜਾਬੀ</a>
        </div>
      </div>
    )}


export default Body