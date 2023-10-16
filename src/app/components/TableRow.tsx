import { Notice } from "@/types/notice";

const TableRow = ({ notice }: { notice: Notice }): JSX.Element => {
  return (
    <tr className="table-row">
      <td className="title">{notice.title}</td>
      <td className="created-at">{notice.id}</td>
    </tr>
  );
};

export default TableRow;
