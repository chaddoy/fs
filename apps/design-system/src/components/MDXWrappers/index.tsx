import React from 'react';

export const MDXPage = ({ children }: { children: React.ReactNode }) => {
  return <div className="">{children}</div>;
  // return <div className="!md:-mt-16 !md:-mx-[113px] !md:w-lvw">{children}</div>;
};

export const MDXHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">{children}</div>
    // <div className="!md:px-16 !md:pt-14 !md:pb-2 !md:w-lvw">{children}</div>
  );
};

export const MDXBody = ({ children }: { children: React.ReactNode }) => {
  return <div className="">{children}</div>;
  // return <div className="!px-16 !py-14 !md:w-lvw">{children}</div>;
};
