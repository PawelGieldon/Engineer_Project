import { Outlet, Link } from "react-router-dom";
export default function Component() {
       
    return (
        <div>
            <li><Link to="/List" className="nav-link " aria-current="page">Oferta</Link></li>
        </div>
    )
}