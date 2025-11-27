import React from 'react';

export type StarBorderProps<T extends React.ElementType> = React.ComponentPropsWithoutRef<T> & {
  as?: T;
  className?: string;
  children?: React.ReactNode;
  color?: string;
  speed?: React.CSSProperties['animationDuration'];
  thickness?: number;
};

const StarBorder = <T extends React.ElementType = 'button'>(
  {
    as,
    className = '',
    color = '#f87171', // red-400
    speed = '2s',
    thickness = 10,
    children,
    ...rest
  }: StarBorderProps<T>
) => {
  const Component = (as || 'button') as React.ElementType;
  const { style, ...restProps } = rest as { style?: React.CSSProperties } & React.ComponentPropsWithoutRef<T>;

  return (
    <Component
      className={`relative inline-block overflow-hidden rounded-[20px] ${className}`}
      {...(restProps as React.ComponentPropsWithoutRef<T>)}
      style={{
        padding: '2px 0',
        ...(style || {}),
      }}
    >
      <div
        className="star-border-strip star-border-strip-bottom"
        style={{
          backgroundColor: color,
          animation: `star-movement-bottom ${speed} linear infinite alternate`,
          height: `${thickness}px`,
        }}
      />
      <div
        className="star-border-strip star-border-strip-top"
        style={{
          backgroundColor: color,
          animation: `star-movement-top ${speed} linear infinite alternate`,
          height: `${thickness}px`,
        }}
      />
      <div
        className="relative z-[1] bg-gradient-to-b from-black to-gray-900 text-white text-center text-[16px] py-[16px] px-[26px] rounded-[20px]"
        style={{ border: `2px solid ${color}` }}
      >
        {children}
      </div>
    </Component>
  );
};

export default StarBorder;
