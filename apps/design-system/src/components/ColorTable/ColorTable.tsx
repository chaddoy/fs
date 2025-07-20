import { Fragment } from 'react';
import Table from '@/components/Table';
import { ColorTableProps } from './types';
import ColorTableToken from './TokenTableCell';
import PaletteTableCell from './PaletteTableCell';
import groupBy from 'lodash.groupby';
import { TableCell, TableRow } from '@shadcn-ui/components/ui/table';
import { COLUMNS } from './constants';

const ColorTable = ({ tokenId, tokens }: ColorTableProps) => {
  const arr = Object.entries(tokens).map(([key, val]) => ({
    key,
    ...val,
  }));
  const grouped = groupBy(arr, 'description');
  const groupedKeys = Object.values(grouped).map((group) =>
    group.map((item) => item.key)
  );

  return (
    <Table columns={COLUMNS}>
      {groupedKeys.map((keys: any[], index) => {
        return (
          <Fragment key={`keys-${index}`}>
            {keys.map((key: any, index: number) => (
              <TableRow
                key={`key-${index}`}
                className={`!border-0 ${
                  keys.length > 1 ? '' : '!border-b'
                } !bg-white hover:bg-white`}
              >
                <TableCell className="!border-0 !pb-4 !pt-2 !px-0 pl-4 w-full">
                  <ColorTableToken
                    tokenId={tokenId}
                    token={key === 'default' ? '' : key}
                    description={keys.length > 1 ? '' : tokens[key].description}
                  />
                </TableCell>
                <TableCell className="!border-0 !pb-4 !pt-2 !px-0 pl-4 w-full">
                  <PaletteTableCell
                    backgroundColor={tokens[key].value}
                    palette={tokens[key].palette}
                  />
                </TableCell>
                <TableCell className="!border-0 !pb-4 !pt-2 !px-0 pl-4 w-full">
                  <PaletteTableCell
                    backgroundColor={tokens[key].value}
                    palette={tokens[key].palette}
                    dark
                  />
                </TableCell>
              </TableRow>
            ))}

            {keys.length > 1 && (
              <TableRow className="!border-0 !border-b !bg-white hover:bg-white">
                <TableCell
                  colSpan={3}
                  className="!border-0 !pb-4 !pt-2 !px-0 pl-4 w-full"
                >
                  {tokens[keys[0]].description}
                </TableCell>
              </TableRow>
            )}
          </Fragment>
        );
      })}
    </Table>
  );
};

export default ColorTable;
