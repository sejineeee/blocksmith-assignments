import Link from "next/link";
import NavBar from "./Navbar";

import "../styles/header.scss";

const Header = (): JSX.Element => {
  return (
    <header className="header">
      <div>
        <h1 className="logo">
          <Link href="/notice">
            <span className="logo-text">BlockSmith</span>
          </Link>
        </h1>
        <Link className="home" href="/notice">
          홈
        </Link>
      </div>
      <NavBar />
    </header>
  );
};

export default Header;
