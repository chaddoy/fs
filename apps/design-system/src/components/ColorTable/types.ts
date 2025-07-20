import { Row } from '../Table/types';

export interface ColorTableProps {
  tokenId: string;
  tokens: ColorTableTokenItem[];
  data: Row[];
}

export interface ColorTableTokenItem {
  value: string;
  description: string;
  palette: string;
}
