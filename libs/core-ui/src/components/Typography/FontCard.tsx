import { Card } from '@shadcn-ui';

export default function FontCard({
  children,
  size,
}: {
  children: React.ReactNode;
  size?: number;
}) {
  return (
    <Card className="flex flex-row items-end gap-4 p-8">
      {size && <div className="text-sm text-grey-900">{size}px</div>}

      {children}
    </Card>
  );
}
