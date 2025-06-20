import {Row} from "../Table/interface";

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
