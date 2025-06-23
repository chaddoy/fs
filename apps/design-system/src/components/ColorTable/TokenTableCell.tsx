interface TokenTableCellProps {
  tokenId: string;
  token: string;
  description?: string;
}

const TokenTableCell = ({
  tokenId,
  token,
  description,
}: TokenTableCellProps) => {
  return (
    <div className="pr-4">
      <code className="bg-muted relative rounded px-[0.3rem] py-[0.3rem] font-mono text-xs font-semibold w-max">
        color.{tokenId}
        {token && `.${token}`}
      </code>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {description || <>&nbsp;</>}
      </p>
    </div>
  );
};

export default TokenTableCell;
