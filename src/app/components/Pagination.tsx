import '../styles/pagination.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAnglesLeft,
  faAngleLeft,
  faAngleRight,
  faAnglesRight,
} from '@fortawesome/free-solid-svg-icons';

interface PaginationProps {
  countOfPages: number;
  activePage: number;
  onClick: (pageNumber: number) => void;
  onClickArrow: (buttonName: string) => void;
}

const Pagination = ({
  countOfPages,
  activePage,
  onClick,
  onClickArrow,
}: PaginationProps): JSX.Element => {
  const pageNumbers = Array.from(
    { length: countOfPages },
    (_, index) => index + 1
  );

  return (
    <div className="pagination">
      <button
        className="arrow button-previous-group"
        onClick={() => onClickArrow('prevGroup')}
      >
        <FontAwesomeIcon icon={faAnglesLeft} />
      </button>
      <button
        className="arrow button-previous"
        onClick={() => onClickArrow('prev')}
      >
        <FontAwesomeIcon icon={faAngleLeft} />
      </button>
      <ol className="page-list">
        {pageNumbers.map((pageNumber) => {
          return (
            <li key={pageNumber}>
              <button
                onClick={() => onClick(pageNumber)}
                className={pageNumber === activePage ? 'active' : ''}
              >
                {pageNumber}
              </button>
            </li>
          );
        })}
      </ol>
      <button
        className="arrow button-next"
        onClick={() => onClickArrow('next')}
      >
        <FontAwesomeIcon icon={faAngleRight} />
      </button>
      <button
        className="arrow button-next-group"
        onClick={() => onClickArrow('nextGroup')}
      >
        <FontAwesomeIcon icon={faAnglesRight} />
      </button>
    </div>
  );
};

export default Pagination;
