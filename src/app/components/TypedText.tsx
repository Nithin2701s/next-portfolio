// components/TypedText.js
"use client";
import React,{ useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypedText = () => {
  const typedElement = useRef<HTMLSpanElement | null>(null);
  const typedInstance = useRef<Typed | null>(null);

  useEffect(() => {
    typedInstance.current = new Typed(typedElement.current, {
      strings : ['Frontend Developer', 'Web Developer', 'UI/UX Designer'],
      typeSpeed : 70,
      backSpeed : 70,
      backDelay : 1000,
      loop : true,
      showCursor : false
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typedInstance.current.destroy();
    };
  }, []);

  return <span ref={typedElement} className='text-[#78b6e6]'></span>;
};

export default TypedText;
