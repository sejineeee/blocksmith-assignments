import Link from "next/link";

const NavBar = (): JSX.Element => {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <Link href="/notice">공지</Link>
        </li>
        <li className="notification">알림</li>
        <li className="my-data">내 정보</li>
      </ul>
    </nav>
  );
};

export default NavBar;
