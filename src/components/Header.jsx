import headerLogo from "./../assets/investment-calculator-logo.png";
function Header() {
  return (
    <header id="header">
      <img src={headerLogo} alt="header-logo" />
      <h1>Investment Calculator</h1>
    </header>
  );
}
export default Header;
