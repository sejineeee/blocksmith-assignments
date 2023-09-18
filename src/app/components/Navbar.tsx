import Link from "next/link";

const NavBar = (): JSX.Element => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">공지</Link>
        </li>
        <li>알림</li>
        <li>내 정보</li>
      </ul>
    </nav>
  );
};

export default NavBar;
