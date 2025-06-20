export interface TableProps {
  columns: Column[];
  children: React.ReactNode;
}

export interface Column {
  key: string;
  label: string;
}

export interface Row {
  [key: string]: React.ReactNode;
}
