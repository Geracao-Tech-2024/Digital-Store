import React from 'react';
import styled from 'styled-components';

// IMPORTANTE!: nome da classe em maiusculo
function Section({ title, textAlign, link, children }) {
  const SectionContainer = styled.section`
      position: relative;
      width: 90vw;
      margin: auto;
      padding-top: 20px;
      h2{
        width:${link != undefined? '90%' : '100%'};
        text-align: ${textAlign};
        //styleName: Text Large Bold;
        font-family: Inter;
        font-size: 24px;
        font-weight: 700;
        line-height: 38px;
        letter-spacing: 0.75px;

      }
      a{
        color: var(--primary);
        width: 122px;
        height: 34px;
        top: 1643px;
        left: 1218px;
        gap: 0px;
        opacity: 0px;
        //styleName: Text Medium - Desktop;
        font-family: Inter;
        font-size: 18px;
        font-weight: 400;
        line-height: 34px;
        letter-spacing: 0.75px;
        text-align: left;
        text-decoration: none;
        text-align: center;
        text-justify: center;

      }
    `;
  return (
    <SectionContainer>
      <div className="d-flex">
        <h2>{title}</h2>
        {link != undefined ? <a href={link.href}>{link.text} <img src="arrow-link.svg" alt={`${link.text}`} /></a> : null}
      </div>
      {children}
    </SectionContainer>
  );
};

export default Section;