'use client';
import React, { ReactNode } from 'react';

export type ButtonProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function Button({ children }: ButtonProps) {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-500 ease-in-out"
      onClick={() => alert('Hello World!')}
    >
      {children}
    </button>
  );
}
