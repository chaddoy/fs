import {
  Table as ShadcnTable,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@shadcn-ui/components/ui/table';
import { TableProps } from './types';

export function Table({ columns = [], children }: TableProps) {
  return (
    <ShadcnTable>
      <TableHeader>
        <TableRow className="!border-0 !border-b hover:bg-white">
          {columns.map((column) => (
            <TableHead key={column.key} className="!border-0 !px-0">
              {column.label}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>{children}</TableBody>
    </ShadcnTable>
  );
}

export default Table;
