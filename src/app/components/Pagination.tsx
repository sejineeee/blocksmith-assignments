import Image from 'next/image';

import '../styles/pagination.scss';

const Pagination = ({ totalNoticeListCount, onClick }): JSX.Element => {
  const countOfPages = Math.ceil(totalNoticeListCount / 10);
  const pageNumbers = Array.from(
    { length: countOfPages },
    (_, index) => index + 1
  );

  // TODO
  // 1. page 번호에 맞게 게시글을 잘 나오지만, 페이지네이션 번호가 나오질 않음
  // 2. 게시글의 총 갯수를 가져오는 방법을 생각해서 총 개수를 가지고 페이지 번호
  // 만들 생각을 해야 된다.
  // 3. 화살표 버튼 처리에 대해서도 생각해야 된다

  return (
    <div className="pagination">
      <button className="button-previous-group">
        <Image
          width={32}
          height={32}
          alt="이전 그룹 아이콘"
          src="/assets/images/arrow-left-double-line.svg"
        />
      </button>
      <button className="button-previous">
        <Image
          height={32}
          width={32}
          alt="이전 페이지 아이콘"
          src="/assets/images/arrow-left-s-line.svg"
        />
      </button>
      <ol className="page-list">
        {pageNumbers.map((pageNumber) => {
          return (
            <li key={pageNumber}>
              <button onClick={() => onClick(pageNumber)}>{pageNumber}</button>
            </li>
          );
        })}
      </ol>
      <button className="button">
        <Image
          height={32}
          width={32}
          alt="다음 페이지 아이콘"
          src="/assets/images/arrow-right-s-line.svg"
        />
      </button>
      <button>
        <Image
          height={32}
          width={32}
          alt="다음 그룹 아이콘"
          src="/assets/images/arrow-right-double-line.svg"
        />
      </button>
    </div>
  );
};

export default Pagination;
