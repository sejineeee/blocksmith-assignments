import Link from "next/link";
import NavBar from "./Navbar";

const Header = (): JSX.Element => {
  return (
    <header>
      <h1>
        <Link href="/">BlockSmith</Link>
      </h1>
      <Link href="/">홈</Link>
      <NavBar />
    </header>
  );
};

export default Header;
