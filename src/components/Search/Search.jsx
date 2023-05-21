import './Search.css';

export default function Search() {
  return (
    <div className="search-div flex-ctr-ctr">
      <input type="text" placeholder='Search' />
      <button>
        <img src="https://cdn-icons-png.flaticon.com/512/665/665909.png" alt="" className='icon-btn-small' />
      </button>
    </div>
  )
}