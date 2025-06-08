import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
  <div className="container">
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/form">Cadastro</Link></li>
      <li><Link to="/list">Listagem</Link></li>
    </ul>
  </div>
</nav>

  );
}
