import { Outlet, Link } from "react-router-dom";
export default function List() {
       
    return (
        <div>
            <h1>LISTA</h1>
            <li><Link to="/"> Powrót</Link> </li>
        </div>
    )
}