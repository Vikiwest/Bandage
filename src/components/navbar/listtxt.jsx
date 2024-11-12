import Dropdownicon from "../icons/dropdownicon";

function ListTxt() {
  return (
    <div className="space-x-10 font-bold flex">
          <a className="text-lightgrey" href="">Home</a>
          <a className="shoptxt flex " href="">Shop <Dropdownicon/></a>
        
          <a className="text-lightgrey" href="">About</a>
          <a className="text-lightgrey" href="">Blog</a>
          <a className="text-lightgrey" href="">Contact</a>
          <a className="text-lightgrey" href="">Pages</a>

    </div>
  )
}

export default ListTxt;
