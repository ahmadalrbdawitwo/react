import { Link } from "react-router-dom";
const Carticon = () => {
  
    return (
      <Link to={'/cart'}> 
        <button
  type="button"
  class=" fixed bottom-10 right-10 bg-gray-900 rounded-full  p-2   text-white  w-14 h-14">
<span className="material-symbols-outlined">
shopping_cart
</span>
    {/*  */}
</button>
       
      </Link>
     
      
    );
  };
  export default Carticon