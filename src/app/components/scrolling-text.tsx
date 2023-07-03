'use client';
import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import Measure, { ContentRect } from 'react-measure';

interface ScrollingTextProps {
  text: string;
}

const ScrollingText: React.FC<ScrollingTextProps> = ({ text }) => {
  const [containerWidth, setContainerWidth] = useState(0);
  const [textWidth, setTextWidth] = useState(0);

  const textRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const textX = useTransform(
    x,
    [0, textWidth - containerWidth],
    [0, containerWidth - textWidth]
  );

  const handleResize = (contentRect: ContentRect) => {
    if (contentRect.bounds) {
      setContainerWidth(contentRect.bounds.width - 50);
    }
    if (textRef.current) {
      setTextWidth(textRef.current.offsetWidth);
    }
  };

  return (
    <Measure bounds onResize={handleResize}>
      {({ measureRef }) => (
        <div
          ref={measureRef}
          className="overflow-hidden whitespace-nowrap"
          onMouseEnter={() => {
            if (textWidth > containerWidth) {
              x.set(textWidth - containerWidth);
            }
          }}
          onMouseLeave={() => x.set(0)}
        >
          <motion.div
            ref={textRef}
            className="inline-block"
            style={{ x: textX }}
            transition={{ duration: 2, ease: 'linear' }}
          >
            {text}
          </motion.div>
        </div>
      )}
    </Measure>
  );
};

export { ScrollingText };
