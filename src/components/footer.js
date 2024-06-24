import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Icon } from '@components/icons';
import { socialMedia } from '@config';

const StyledFooter = styled.footer`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  height: auto;
  min-height: 70px;
  padding: 15px;
  text-align: center;
`;

const StyledSocialLinks = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    width: 100%;
    max-width: 270px;
    margin: 0 auto 10px;
    color: var(--light-slate);
  }

  ul {
    ${({ theme }) => theme.mixins.flexBetween};
    padding: 0;
    margin: 0;
    list-style: none;

    a {
      padding: 10px;
      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`;

const StyledCredit = styled.div`
  color: var(--light-slate);
  font-family: var(--font-mono);
  font-size: var(--fz-xxs);
  line-height: 1;

  a {
    padding: 10px;
  }

  .github-stats {
    margin-top: 10px;

    & > span {
      display: inline-flex;
      align-items: center;
      margin: 0 7px;
    }
    svg {
      display: inline-block;
      margin-right: 5px;
      width: 14px;
      height: 14px;
    }
  }
`;

const Footer = () => {
  const [githubInfo, setGitHubInfo] = useState({
    stars: null,
    forks: null,
  });
  const [githubInfo_1, setGitHubInfo_1] = useState({
    stars_1: null,
    forks_1: null,
  });

  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      return;
    }

    fetch('https://api.github.com/repos/bchiang7/v4')
      .then(response => response.json())
      .then(json => {
        const { stargazers_count_1, forks_count_1 } = json;
        setGitHubInfo_1({
          stars_1: stargazers_count_1,
          forks_1: forks_count_1,
        });
      })
      .catch(e => console.error(e));

    fetch('https://api.github.com/repos/logappradeep-m/portfolio')
      .then(response => response.json())
      .then(json => {
        const { stargazers_count, forks_count } = json;
        setGitHubInfo({
          stars: stargazers_count,
          forks: forks_count,
        });
      })
      .catch(e => console.error(e));
  }, []);

  return (
    <StyledFooter>
      <StyledSocialLinks>
        <ul>
          {socialMedia &&
            socialMedia.map(({ name, url }, i) => (
              <li key={i}>
                <a href={url} aria-label={name}>
                  <Icon name={name} />
                </a>
              </li>
            ))}
        </ul>
      </StyledSocialLinks>

      <StyledCredit tabindex="-1">
        <>
          <a href="https://github.com/logappradeep-m/portfolio">
            <div>Designed &amp; Built by Logappradeep</div>
            {githubInfo.stars && githubInfo.forks && (
              <div className="github-stats">
                <span>
                  <Icon name="Star" />
                  <span>{githubInfo.stars.toLocaleString()}</span>
                </span>
                <span>
                  <Icon name="Fork" />
                  <span>{githubInfo.forks.toLocaleString()}</span>
                </span>
              </div>
            )}
          </a>
          <div>
            <a href="https://github.com/bchiang7/v4">Originally by Brittany Chiang</a>
            {githubInfo_1.stars_1 && githubInfo_1.forks_1 && (
              <div className="github-stats">
                <span>
                  <Icon name="Star" />
                  <span>{githubInfo_1.stars_1.toLocaleString()}</span>
                </span>
                <span>
                  <Icon name="Fork" />
                  <span>{githubInfo_1.forks_1.toLocaleString()}</span>
                </span>
              </div>
            )}
          </div>
        </>
      </StyledCredit>
    </StyledFooter>
  );
};

Footer.propTypes = {
  githubInfo: PropTypes.object,
};

export default Footer;
