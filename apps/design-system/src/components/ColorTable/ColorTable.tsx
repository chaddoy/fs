import Table from '@/components/Table';
import { ColorTableProps } from './interface';

const ColorTable = ({ tokenId, token }: ColorTableProps) => {
  return (
    <Table
      columns={[
        {
          key: 'token',
          label: 'Token and description',
        },
        {
          key: 'light',
          label: 'Light',
        },
        {
          key: 'dark',
          label: 'Dark',
        },
      ]}
      data={Object.entries(token).map(([key, value]) => ({
        token: (
          <div className="pr-4">
            <div className="bg-muted relative rounded px-[0.3rem] py-[0.3rem] font-mono text-xs font-semibold w-max">
              color.{tokenId}
              {key === 'value' ? '' : `.${key}`}
            </div>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              {value.description}
            </p>
          </div>
        ),
        light: (
          <div className="pr-2">
            <div className="flex flex-col items-center w-40 gap-2 p-2 bg-white border border-1 rounded-sm">
              <div
                className={`h-6 w-full rounded-sm ${
                  value.light.palette.includes('white') ? 'border border-1' : ''
                }`}
                style={{
                  backgroundColor: value.light.value,
                }}
              />
              <div className="text-xs">{value.light.palette}</div>
            </div>
          </div>
        ),
        dark: (
          <div
            className={`flex flex-col items-center w-40 gap-2 p-2 border border-1 rounded-sm`}
            style={{ backgroundColor: '#1F1F21' }}
          >
            <div
              className={`h-6 w-full rounded-sm ${
                value.dark.palette.includes('charcoal') ? 'border border-1' : ''
              }`}
              style={{
                backgroundColor: value.dark.value,
              }}
            />
            <div className="text-xs text-white">{value.dark.palette}</div>
          </div>
        ),
      }))}
    />
  );
};

export default ColorTable;
