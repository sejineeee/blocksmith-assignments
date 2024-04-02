import Image from 'next/image';

import '../styles/pagination.scss';

interface PaginationProps {
  totalNoticeListCount: number;
  onClick: (pageNumber: number) => void;
}

const Pagination = ({
  totalNoticeListCount,
  onClick,
}: PaginationProps): JSX.Element => {
  const countOfPages = Math.ceil(totalNoticeListCount / 10);
  const pageNumbers = Array.from(
    { length: countOfPages },
    (_, index) => index + 1
  );

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
