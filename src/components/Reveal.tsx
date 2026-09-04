import { type ReactNode, type ElementType } from 'react';
import { useReveal } from '@/hooks/useReveal';

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
  distance?: number;
};

export function Reveal({
  children,
  as: Tag = 'div',
  className = '',
  delay = 0,
  distance = 18,
}: RevealProps) {
  const { ref, visible } = useReveal();

  const style = visible
    ? {
        opacity: 1,
        transform: 'translateY(0)',
        transition: `opacity 500ms cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 500ms cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
      }
    : {
        opacity: 0,
        transform: `translateY(${distance}px)`,
      };

  return (
    <Tag ref={ref} className={className} style={style}>
      {children}
    </Tag>
  );
}
