// components/TypedText.js
"use client";
import React,{ useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypedText: React.FC = () => {
  const typedElement = useRef<HTMLSpanElement | null>(null);
  const typedInstance = useRef<Typed | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && typedElement.current) {
      typedInstance.current = new Typed(typedElement.current, {
          strings: ['Frontend Developer', 'Web Developer', 'UI/UX Designer'],
          typeSpeed: 70,
          backSpeed: 70,
          loop:true,
          showCursor:false
      });
  }

    return () => {
      if (typedInstance.current) {
        typedInstance.current.destroy();
    }
    };
  }, []);

  return <span ref={typedElement} className='text-[#78b6e6]'></span>;
};

export default TypedText;
