// // import React, { useState, useEffect } from 'react';
// // import { CSSTransition, TransitionGroup } from 'react-transition-group';
// // import styled from 'styled-components';
// // import { navDelay, loaderDelay } from '@utils';
// // import { usePrefersReducedMotion } from '@hooks';

// // const StyledHeroSection = styled.section`
// //   ${({ theme }) => theme.mixins.flexCenter};
// //   flex-direction: column;
// //   align-items: flex-start;
// //   min-height: 100vh;
// //   height: 100vh;
// //   padding: 0;

// //   @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
// //     height: auto;
// //     padding-top: var(--nav-height);
// //   }

// //   h1 {
// //     margin: 0 0 30px 4px;
// //     color: var(--green);
// //     font-family: var(--font-mono);
// //     font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
// //     font-weight: 400;

// //     @media (max-width: 480px) {
// //       margin: 0 0 20px 2px;
// //     }
// //   }

// //   h3 {
// //     margin-top: 5px;
// //     color: var(--slate);
// //     line-height: 0.9;
// //   }

// //   p {
// //     margin: 20px 0 0;
// //     max-width: 740px;
// //   }

// //   .email-link {
// //     ${({ theme }) => theme.mixins.bigButton};
// //     margin-top: 50px;
// //   }
// // `;

// // const Hero = () => {
// //   const [isMounted, setIsMounted] = useState(false);
// //   const prefersReducedMotion = usePrefersReducedMotion();

// //   useEffect(() => {
// //     if (prefersReducedMotion) {
// //       return;
// //     }

// //     const timeout = setTimeout(() => setIsMounted(true), navDelay);
// //     return () => clearTimeout(timeout);
// //   }, []);

// //   const one = <h1>Hi, My Name Is</h1>;
// //   const two = <h2 className="big-heading">Logappradeep,</h2>;
// //   const three = <h3 className="medium-heading">Certified Pega Senior System Architect,</h3>;
// //   const four = <h3 className="small-heading">Graphic Desiner.</h3>;
// //   const five = (
// //     <>
// //       <p>
// //         I’m a hardworking individual with the ability to accomplish tasks both independently and as part of a team.
// //         I’m quick to learn and adaptable to various roles. I excel in collaborating with others to achieve objectives on time, leveraging my knowledge in Electronics and Communication Engineering and my expertise in Pegasystems, supported by two global-level certifications. Additionally, I am a graphic designer, bringing creativity and visual design skills to my projects.
// //       </p>
// //     </>
// //   );
// //   const six = (
// //     <a
// //       className="email-link"
// //       href="/resume.pdf"
// //       target="_blank"
// //       rel="noreferrer">
// //       Resume
// //     </a>
// //   );

// //   const items = [one, two, three, four, five, six];

// //   return (
// //     <StyledHeroSection>
// //       {prefersReducedMotion ? (
// //         <>
// //           {items.map((item, i) => (
// //             <div key={i}>{item}</div>
// //           ))}
// //         </>
// //       ) : (
// //         <TransitionGroup component={null}>
// //           {isMounted &&
// //             items.map((item, i) => (
// //               <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
// //                 <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
// //               </CSSTransition>
// //             ))}
// //         </TransitionGroup>
// //       )}
// //     </StyledHeroSection>
// //   );
// // };

// // export default Hero;

// import React, { useState, useEffect } from 'react';
// import { CSSTransition, TransitionGroup } from 'react-transition-group';
// import styled, { keyframes } from 'styled-components';
// import { navDelay, loaderDelay } from '@utils';
// import { usePrefersReducedMotion } from '@hooks';

// const bounceIn = keyframes`
//   0% {
//     transform: scale(0.1);
//     opacity: 0;
//   }
//   60% {
//     transform: scale(1.2);
//     opacity: 1;
//   }
//   100% {
//     transform: scale(1);
//   }
// `;

// const rubberBand = keyframes`
//   0% {
//     transform: scale(2);
//   }
//   30% {
//     transform: scale(1.25);
//   }
//   40% {
//     transform: scale(0.75);
//   }
//   50% {
//     transform: scale(1.15);
//   }
//   65% {
//     transform: scale(0.95);
//   }
//   75% {
//     transform: scale(1.05);
//   }
//   100% {
//     transform: scale(1);
//   }
// `;

// const StyledHeroSection = styled.section`
//   ${({ theme }) => theme.mixins.flexCenter};
//   flex-direction: column;
//   align-items: flex-start;
//   min-height: 100vh;
//   height: 100vh;
//   padding: 0;

//   @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
//     height: auto;
//     padding-top: var(--nav-height);
//   }

//   .text-animate {
//     display: inline-block;
//     opacity: 0;
//     animation: ${bounceIn} 1s 0.5s forwards;
//     min-width: 10px;
//   }

//   .text-animate-hover {
//     min-width: 10px;
//     display: inline-block;
//     animation-fill-mode: both;
//     cursor: pointer;

//   &:hover,
//   &:active,
//   &:focus {
//       animation: ${rubberBand} 1s;
//       color: var(--green);
//     }
//   }

//   @for $i from 1 through 35 {
//     .text-animate._#{$i} {
//       animation-delay: #{calc($i / 10)}s;
//     }
//   }

//   h1, h2, h3, p{
//     transition: transform 0.3s ease, color 0.3s ease;

//     &:hover {
//       transform: scale(1.05);
//     }
//   }

//   h1 {
//     margin: 0 0 30px 4px;
//     color: var(--green);
//     font-family: var(--font-mono);
//     font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
//     font-weight: 400;

//     @media (max-width: 480px) {
//       margin: 0 0 20px 2px;
//     }
//   }

//   h3 {
//     margin-top: 5px;
//     color: var(--slate);
//     line-height: 0.9;
//   }

//   p {
//     margin: 20px 0;
//     max-width: 740px;
//   }

//   .email-link {
//     ${({ theme }) => theme.mixins.bigButton};
//     margin-top: 50px;
//   }
// `;

// const Hero = () => {
//   const [isMounted, setIsMounted] = useState(false);
//   const prefersReducedMotion = usePrefersReducedMotion();

//   useEffect(() => {
//     if (prefersReducedMotion) {
//       return;
//     }

//     const timeout = setTimeout(() => setIsMounted(true), navDelay);
//     return () => clearTimeout(timeout);
//   }, []);

//   const createLetterElements = (text, animateClass) => {
//     return text.split('').map((char, i) => (
//       <span key={i} className={`${animateClass} _${i + 1}`}
//         onTouchStart={(e) => e.currentTarget.classList.add('touch')}
//         onTouchEnd={(e) => e.currentTarget.classList.remove('touch')}>
//         {char}
//       </span>
//     ));
//   };

//   const one = <h1>Hi, My Name Is</h1>;
//   const two = <h2 className="big-heading">{createLetterElements("Logappradeep,", "text-animate-hover")}</h2>;
//   const three = <h3 className="medium-heading">{createLetterElements("Certified Pega Senior System Architect,", "text-animate-hover")}</h3>;
//   const four = <h3 className="small-heading">{createLetterElements("Graphic Designer.", "text-animate-hover")}</h3>;
//   const five = (
//     <p>
//       I’m a hardworking individual with the ability to accomplish tasks both independently and as part of a team.
//       I’m quick to learn and adaptable to various roles. I excel in collaborating with others to achieve objectives on time, leveraging my knowledge in Electronics and Communication Engineering and my expertise in Pegasystems, supported by two global-level certifications. Additionally, I am a graphic designer, bringing creativity and visual design skills to my projects.
//     </p>
//   );
//   const six = (
//     <>
//     <a
//       className="email-link"
//       style={{ marginRight: '16px' }}
//       href="/content/resume/resume.pdf"
//       target="_blank"
//       rel="noreferrer">
//       Resume
//     </a>
//     <a
//       className="email-link"
//       style={{ marginLeft: '16px' }}
//       href="https://lptech.logappradeep.me/"
//       target="_blank"
//       rel="noreferrer">
//       Lp Tech
//       (Website)
//     </a>
//     </>
//   );

//   const items = [one, two, three, four, five, six];

//   return (
//     <StyledHeroSection>
//       {prefersReducedMotion ? (
//         <>
//           {items.map((item, i) => (
//             <div key={i}>{item}</div>
//           ))}
//         </>
//       ) : (
//         <TransitionGroup component={null}>
//           {isMounted &&
//             items.map((item, i) => (
//               <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
//                 <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
//               </CSSTransition>
//             ))}
//         </TransitionGroup>
//       )}
//     </StyledHeroSection>
//   );
// };

// export default Hero;

import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled, { keyframes } from 'styled-components';
import { navDelay, loaderDelay } from '@utils';
import { usePrefersReducedMotion } from '@hooks';

const generateRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const bounceIn = keyframes`
  0% {
    transform: scale(0.1);
    opacity: 0;
  }
  60% {
    transform: scale(1.2);
    opacity: 1;
  }
  100% {
    transform: scale(1);
  }
`;

const rubberBand = keyframes`
  0% {
    transform: scale(2);
  }
  30% {
    transform: scale(1.25);
  }
  40% {
    transform: scale(0.75);
  }
  50% {
    transform: scale(1.15);
  }
  65% {
    transform: scale(0.95);
  }
  75% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  height: 100vh;
  padding: 0;

  @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
    height: auto;
    padding-top: var(--nav-height);
  }

  .text-animate {
    display: inline-block;
    opacity: 0;
    animation: ${bounceIn} 1s 0.5s forwards;
    min-width: 10px;
  }

  .text-animate-hover {
    min-width: 10px;
    display: inline-block;
    animation-fill-mode: both;
    cursor: pointer;

    &:hover,
    &:active,
    &:focus {
      animation: ${rubberBand} 1s;
      color: ${props => props.color};
    }
  }

  @for $i from 1 through 35 {
    .text-animate._#{$i} {
      animation-delay: #{calc($i / 10)}s;
    }
  }

  h1,
  h2,
  h3,
  p {
    transition: transform 0.3s ease, color 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
  }

  h1 {
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 5px;
    color: var(--slate);
    line-height: 0.9;
  }

  p {
    margin: 20px 0;
    max-width: 740px;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [color, setColor] = useState(generateRandomColor());
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, [prefersReducedMotion]);

  const createLetterElements = (text, animateClass) =>
    text.split('').map((char, i) => (
      <span
        key={i}
        className={`${animateClass} _${i + 1}`}
        onMouseEnter={() => setColor(generateRandomColor())}
        onTouchStart={e => {
          setColor(generateRandomColor());
          e.currentTarget.classList.add('touch');
        }}
        onTouchEnd={e => e.currentTarget.classList.remove('touch')}>
        {char}
      </span>
    ));

  // const one = <h1>Hi, My Name Is</h1>;
  const one = <h1>{createLetterElements('Hi, My Name Is,', 'text-animate-hover')}</h1>;
  const two = (
    <h2 className="big-heading">{createLetterElements('Logappradeep,', 'text-animate-hover')}</h2>
  );
  const three = (
    <h3 className="medium-heading">
      {createLetterElements('Certified Pega Senior System Architect,', 'text-animate-hover')}
    </h3>
  );
  const four = (
    <h3 className="small-heading">
      {createLetterElements('Graphic Designer.', 'text-animate-hover')}
    </h3>
  );
  const five = (
    <p>
      I’m a hardworking individual with the ability to accomplish tasks both independently and as
      part of a team. I’m quick to learn and adaptable to various roles. I excel in collaborating
      with others to achieve objectives on time, leveraging my knowledge in Electronics and
      Communication Engineering and my expertise in Pegasystems, supported by two global-level
      certifications. Additionally, I am a graphic designer, bringing creativity and visual design
      skills to my projects.
    </p>
  );
  const six = (
    <>
      <a
        className="email-link"
        style={{ marginRight: '16px' }}
        href="/resume.pdf"
        target="_blank"
        rel="noreferrer">
        Resume
      </a>
      <a
        className="email-link"
        href="https://lptech.logappradeep.me/"
        target="_blank"
        rel="noreferrer">
        Lp Tech (Website)
      </a>
    </>
  );

  const items = [one, two, three, four, five, six];

  return (
    <StyledHeroSection color={color}>
      {prefersReducedMotion ? (
        <>
          {items.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </>
      ) : (
        <TransitionGroup component={null}>
          {isMounted &&
            items.map((item, i) => (
              <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
              </CSSTransition>
            ))}
        </TransitionGroup>
      )}
    </StyledHeroSection>
  );
};

export default Hero;
