// import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
// import { Layout, Hero, About, Education, Jobs, Featured, Projects, Contact } from '@components';

// const StyledMainContainer = styled.main`
//   counter-reset: section;
// `;

// const IndexPage = ({ location }) => (
//   <Layout location={location}>
//     <StyledMainContainer className="fillHeight">
//       <Hero />
//       <About />
//       <Education/>
//       {/* <Jobs /> */}
//       <Featured />
//       <Projects />
//       <Contact />
//     </StyledMainContainer>
//   </Layout>
// );

// IndexPage.propTypes = {
//   location: PropTypes.object.isRequired,
// };

// export default IndexPage;

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Layout, Hero, About, Education, Jobs, Featured, Projects, Contact } from '@components';

const StyledMainContainer = styled.main`
  counter-reset: section;
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently supported by Chrome, Opera, and Firefox */
  -webkit-touch-callout: none; /* Disable callout, image save panel */
`;

const IndexPage = ({ location }) => {
  useEffect(() => {
    const handleContextMenu = e => {
      e.preventDefault();
    };

    document.addEventListener('contextmenu', handleContextMenu);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  return (
    <Layout location={location}>
      <StyledMainContainer className="fillHeight">
        <Hero />
        <About />
        <Education />
        <Jobs />
        <Featured />
        <Projects />
        <Contact />
      </StyledMainContainer>
    </Layout>
  );
};

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default IndexPage;
