import { ComponentType } from 'react';
import FontCard from './FontCard';
import { HeadingProps } from './interface';
import { getHeadingFontSizes } from './utils';

export default function HeadingWrapper({
  Component,
}: {
  Component: ComponentType<HeadingProps>;
}) {
  const { desktop, mobile } = getHeadingFontSizes(Component);

  return (
    <div className="flex flex-col gap-4 p-0">
      <FontCard size={desktop}>
        <Component>Desktop, font-weight: 500;</Component>
      </FontCard>

      <FontCard size={mobile}>
        <Component mobile>Mobile, font-weight: 500;</Component>
      </FontCard>
    </div>
  );
}
