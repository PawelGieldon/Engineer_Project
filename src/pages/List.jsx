import { Outlet, Link } from "react-router-dom";
import Header from "../components/Header";
import Information from "../components/Information";
export default function List() {
  return (
    <div>
      <Header />
      <Information/>
    </div>
  );
}
