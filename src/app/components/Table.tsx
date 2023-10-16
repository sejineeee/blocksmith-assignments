import { Notice } from "@/types/notice";

import TableRow from "./TableRow";

interface TableProps {
  noticeList: Array<Notice>;
}

const Table = ({ noticeList }: TableProps): JSX.Element => {
  return (
    <table className="notice-table">
      <tbody>
        {noticeList.map((item: Notice): JSX.Element => {
          return <TableRow key={item.id} notice={item} />;
        })}
      </tbody>
    </table>
  );
};

export default Table;
