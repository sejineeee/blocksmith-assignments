import { Notice } from "@/types/notice";

interface TableRowProps {
  notice: Notice;
  onClick: () => void;
}

const TableRow = ({ notice: { title, id }, onClick}: TableRowProps): JSX.Element => {
  return (
    <tr className="table-row" onClick={onClick}>
      <td className="title">{title}</td>
      <td className="created-at">{id}</td>
    </tr>
  );
};

export default TableRow;
