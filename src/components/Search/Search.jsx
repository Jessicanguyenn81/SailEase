import './Search.css';
import MicImg from '../../assets/icons/mic.png'
import SearchImg from '../../assets/icons/search.png'

export default function Search() {
  return (
    <div className="search-div flex-ctr-ctr">
      <img src={SearchImg} alt='' className='search-icon'></img>
      <input type="text" placeholder='Search' />
      <button>
        <img src={MicImg} alt="" className='mic-icon' />
      </button>
    </div>
  )
}