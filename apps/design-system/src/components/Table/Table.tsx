import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@shadcn-ui/components/ui/table';
import { TableProps } from './interface';

export function DataTable({ columns = [], data = [] }: TableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow className="!border-0 !border-b hover:bg-white">
          {columns.map((column) => (
            <TableHead key={column.key} className="!border-0 !px-0">
              {column.label}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row, index) => (
          <TableRow
            key={index}
            className="!border-0 !border-b !bg-white hover:bg-white"
          >
            {columns.map((column, index) => (
              <TableCell
                key={index}
                className="!border-0 !pb-4 !pt-2 !px-0 pl-4"
              >
                {row[column.key]}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default DataTable;
