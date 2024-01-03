import { Notice } from '@/types/notice';

interface TableRowProps {
  notice: Notice;
  onClick: () => void;
}

const TableRow = ({
  notice: { title, customDate },
  onClick,
}: TableRowProps): JSX.Element => {
  const parsedCustomDate = new Date(customDate).toLocaleString('ko-KR');

  return (
    <tr className="table-row" onClick={onClick}>
      <td className="title">{title}</td>
      <td className="created-at">{parsedCustomDate}</td>
    </tr>
  );
};

export default TableRow;
