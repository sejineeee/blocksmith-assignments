import { usePathname, useRouter } from 'next/navigation';

import { Notice } from '@/types/notice';

import TableRow from './TableRow';

interface TableProps {
  noticeList: Array<Notice>;
}

const Table = ({ noticeList }: TableProps): JSX.Element => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (id: string) => {
    router.push(`${pathname}/${id}`);
  };

  return (
    <table className="notice-table">
      <tbody>
        {noticeList.map((item: Notice): JSX.Element => {
          return (
            <TableRow
              key={item.id}
              notice={item}
              onClick={() => handleClick(item.id)}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
