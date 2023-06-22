import type { ReactNode } from 'react';
import React from 'react';

export type ParagraphProps = {
  children?: ReactNode;
};

export function Paragraph({ children }: ParagraphProps) {
  return <div className="text-xl text-center mt-4">{children}</div>;
}
