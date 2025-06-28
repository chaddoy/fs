import clsx from 'clsx';
import Text from '../Text';
import { AnnouncementBarProps } from './interface';

export default function AnnouncementBar({
  children,
  className,
  ...props
}: AnnouncementBarProps) {
  return (
    <div
      className={clsx(
        'bg-discovery.bold text-inverse flex justify-center items-center',
        'h-8 px-4',
        'md:h-10 md:px-8',
        className
      )}
      {...props}
    >
      <Text size="sm" weight="medium" align="center" truncate>
        {children}
      </Text>
    </div>
  );
}
