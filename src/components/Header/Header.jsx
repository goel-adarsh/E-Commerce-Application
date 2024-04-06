import logo from '../../assets/logo.jpg';
import './Header.css';

export default function Header() {
  return (
    <>
      <header>
        <img src={logo} alt="E-Commerce Application" />
        <h1>E-Commerce Application</h1>
      </header>
    </>
  );
}
