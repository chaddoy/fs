import clsx from 'clsx';
import { Menu } from 'lucide-react';
import { Separator } from '@shadcn-ui';
import { HeaderProps } from './interface';
import Text from '../Text';

export default function Header({
  className,
  color = 'forestGreen',
  ...props
}: HeaderProps) {
  return (
    <div
      className={clsx(
        '',
        'h-[58px] flex items-center gap-4 p-4 text-inverse',
        color === 'forestGreen' && 'bg-forestGreen-900',
        color === 'jetBlack' && 'bg-jetBlack-900',
        className
      )}
      {...props}
    >
      <Menu className="size-6" />

      <div className="flex items-center gap-2">
        <Text size="xl" weight="semibold">
          THE GROOM SQUAD
        </Text>

        <Separator orientation="vertical" className="h-3" />

        <Text size="xs" weight="medium">
          SUIT GALLERY
        </Text>
      </div>
    </div>
  );
}
