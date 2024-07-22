"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const Skills = () => {
  const refToComponent1 = useRef<HTMLDivElement | null>(null);
  const refToComponent2 = useRef<HTMLDivElement | null>(null);
  const refToComponent3 = useRef<HTMLDivElement | null>(null);
  const refToComponent4 = useRef<HTMLDivElement | null>(null);
  const refToComponent5 = useRef<HTMLDivElement | null>(null);
  const refToComponent6 = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const animate = async () => {
      if (typeof window !== "undefined") {
        const sr = (await import("scrollreveal")).default;

        if (refToComponent1.current) {
          sr().reveal(refToComponent1.current, {
            rotate: { x: 0, y: 0, z: 90 },
            scale: 0.5,
            duration: 2000,
            delay: 200,
          });
        }

        if (refToComponent2.current) {
          sr().reveal(refToComponent2.current, {
            scale: 0.7,
            duration: 2000,
            delay: 200,
          });
        }

        if (refToComponent3.current) {
          sr().reveal(refToComponent3.current, {
            scale: 0.7,
            duration: 2000,
            delay: 200,
          });
        }

        if (refToComponent4.current) {
          sr().reveal(refToComponent4.current, {
            scale: 0.7,
            duration: 2000,
            delay: 200,
          });
        }

        if (refToComponent5.current) {
          sr().reveal(refToComponent5.current, {
            rotate: { x: 0, y: 0, z: 90 },
            scale: 0.5,
            duration: 2000,
            delay: 200,
          });
        }

        if (refToComponent6.current) {
          sr().reveal(refToComponent6.current, {
            rotate: { x: 0, y: 0, z: 90 },
            scale: 0.5,
            duration: 2000,
            delay: 200,
          });
        }
      }
    };

    animate();
  }, []);

  return (
    <section className="services" id="services">
      <h2 className="heading text-[2.6rem] font-[700]">
        My <span className="text-[#78b6e6]">Skills</span>
      </h2>

      <div className="services-container">
        <div className="services-box">
          <i className="fa-solid fa-code"></i>
          <h3 className="sk-title font-[700]" ref={refToComponent2}>
            Programming
          </h3>
          <div className="images" ref={refToComponent1}>
            <div className="img-box">
              <Image src="/Images/C.png" alt="" width={50} height={50} />
            </div>
            <div className="img-box">
              <Image src="/Images/Java.jpg" alt="" width={50} height={50} />
            </div>
            <div className="img-box">
              <Image src="/Images/python.png" alt="" width={50} height={50} />
            </div>
          </div>
        </div>

        <div className="services-box">
          <i className="fa-solid fa-palette"></i>
          <h3 className="sk-title font-[700]" ref={refToComponent3}>
            Design
          </h3>
          <div className="images" ref={refToComponent5}>
            <div className="img-box">
              <Image src="/Images/HTML.png" alt="" width={50} height={50} />
            </div>
            <div className="img-box">
              <Image src="/Images/CSS.png" alt="" width={50} height={50} />
            </div>
            <div className="img-box">
              <Image src="/Images/Figma.png" alt="" width={50} height={50} />
            </div>
          </div>
        </div>

        <div className="services-box">
          <i className="fa-solid fa-window-maximize"></i>
          <h3 className="sk-title font-[700]" ref={refToComponent4}>
            Web Development
          </h3>
          <div className="images" ref={refToComponent6}>
            <div className="img-box">
              <Image src="/Images/mongo.png" alt="" width={50} height={50} />
            </div>
            <div className="img-box">
              <Image src="/Images/Express.png" alt="" width={50} height={50} />
            </div>
            <div className="img-box">
              <Image src="/Images/React.jpeg" alt="" width={50} height={50} />
            </div>
            <div className="img-box">
              <Image src="/Images/Node.jpg" alt="" width={50} height={50} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
