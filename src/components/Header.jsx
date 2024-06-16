import logo from '../assets/investment-calculator-logo.png';

function Header() {
  return (
    <header id='header'>
      <img src={logo} className="App-logo" alt="logo" />
      <h1> React Inversment calculator </h1>
    </header>
  );
}
export default Header;
