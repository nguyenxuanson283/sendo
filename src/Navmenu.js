import ChoseColor from './Chosecolor'
import './css/navmenu.css'
import Facetimer from './Facetimer'
import Menunote from './Menunote'
import MenuShop from './Menushop.js'
import Menuthree from './Menuthree.js'
import NavMenuCheckBox from './Navmenucheckbox.js'
import Navmenudrop from './Navmenudrop.js'
import Price from './Price.js'
import Sell from './Sell.js'
import Size from './Size'
import TypeAbert from './Typeabert'
import Proofwater from './Proofwater'
import Baohanh from './Baohanh'
import Cityborn from './Cityborn'
import Loaimay from './Loaimay'
import Hasvideo from './Hasvideo'
function Navmenu({ handleChange, handlePrice }) {


  return (
    <div className="nav-menu-left ">
      <h2>Đồng hồ nam</h2>
      <div className='list-menu-nav'>

        <Navmenudrop handleChange={handleChange} />
        <NavMenuCheckBox handleChange={handleChange}/>
        <Menuthree handleChange={handleChange} />
        <MenuShop handleChange={handleChange} />
        <Sell handleChange={handleChange} />
        <Price handlePrice={handlePrice}/>
        <Menunote handleChange={handleChange}/>
        <ChoseColor handleChange={handleChange} />
        <TypeAbert handleChange={handleChange} />
        <Facetimer handleChange={handleChange} />
        <Size handleChange={handleChange} />
        <Proofwater handleChange={handleChange} />
        <Baohanh  handleChange={handleChange}/>
        <Cityborn handleChange={handleChange} />
        <Loaimay  handleChange={handleChange}/>
        <Hasvideo />
      </div>
    </div>
  )
}
export default Navmenu