import clsx from 'clsx';
import { AnnouncementBarProps } from './interface';
import { P } from '../Typography';

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
      <P size="2xs" bold className="text-inverse truncate">
        {children}
      </P>
    </div>
  );
}
