export interface ColorTableProps {
  tokenId: string;
  token: ColorTableTokenItem[];
}

export interface ColorTableTokenItem {
  light: ColorTableTheme;
  dark: ColorTableTheme;
  description: string;
}

export interface ColorTableTheme {
  value: string;
  palette: string;
}
