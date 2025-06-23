interface PaletteTableCellProps {
  palette: string;
  backgroundColor: string;
  dark?: boolean;
}

const PaletteTableCell = ({
  palette,
  backgroundColor,
  dark,
}: PaletteTableCellProps) => {
  return (
    <div className="pr-2">
      <div
        className={`flex flex-col items-center w-40 gap-2 p-2 border border-1 rounded-sm ${
          dark ? 'bg-black' : 'bg-white'
        }`}
      >
        <div
          className={`h-6 w-full rounded-sm ${
            palette.includes(dark ? 'charcoal' : 'white')
              ? 'border border-1 border-stone-700'
              : ''
          }`}
          style={{
            backgroundColor,
          }}
        />
        <div className={`text-xs ${dark ? 'text-white' : 'text-black'}`}>
          {palette}
        </div>
      </div>
    </div>
  );
};

export default PaletteTableCell;
