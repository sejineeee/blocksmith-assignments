import { Notice } from '@/types/notice';

interface TableRowProps {
  notice: Notice;
  onClick: () => void;
}

const TableRow = ({
  notice: { title, customDate },
  onClick,
}: TableRowProps): JSX.Element => {
  const now = new Date();
  const created = new Date(customDate);

  const timeDifference = Math.floor((now.getTime() - created.getTime()) / 1000);

  const getFormatTimeAgo = (timeDifference: number): string => {
    if (timeDifference < 60) {
      return '방금 전';
    } else if (timeDifference < 3600) {
      const minutesDifference = Math.floor(timeDifference / 60);

      return `${minutesDifference}분 전`;
    } else if (timeDifference < 86400) {
      const hoursDifference = Math.floor(timeDifference / 3600);
      console.log('timeDifference', timeDifference, 'hours', hoursDifference);

      return `${hoursDifference}시간 전`;
    } else {
      const parsedCreatedDate = created.toLocaleString('ko-KR');

      return parsedCreatedDate;
    }
  };

  const formatCreatedDate = getFormatTimeAgo(timeDifference);

  return (
    <tr className="table-row" onClick={onClick}>
      <td className="title">{title}</td>
      <td className="created-at">{formatCreatedDate}</td>
    </tr>
  );
};

export default TableRow;
