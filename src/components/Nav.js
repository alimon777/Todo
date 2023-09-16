import { Link } from "react-router-dom";
function Nav() {
    return (
        <div className='w-full flex flex-row justify-evenly mb-5'>
            <Link to='/' className="hover:text-white">
                Home
            </Link>
            <Link to='/about' className="hover:text-white">
                About
            </Link>
        </div>
    );
}
export default Nav;