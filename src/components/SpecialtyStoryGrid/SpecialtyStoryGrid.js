import React from "react";
import styled from "styled-components/macro";

import { MARKET_DATA, SPORTS_STORIES } from "../../data";

import MarketCard from "../MarketCard";
import SectionTitle from "../SectionTitle";
import MiniStory from "../MiniStory";
import { QUERIES } from "../../constants";

const SpecialtyStoryGrid = () => {
  return (
    <Wrapper>
      <MarketsSection>
        <SectionTitle
          cornerLink={{
            href: "/markets",
            content: "Visit Markets data »",
          }}
        >
          Markets
        </SectionTitle>
        <MarketCards>
          {MARKET_DATA.map((data) => (
            <MarketCard key={data.tickerSymbol} {...data} />
          ))}
        </MarketCards>
      </MarketsSection>
      <SportsSection>
        <SectionTitle
          cornerLink={{
            href: "/sports",
            content: "Visit Sports page »",
          }}
        >
          Sports
        </SectionTitle>
        <div>
          <SportsStories>          
            {SPORTS_STORIES.map((data) => (
              <MiniStory key={data.id} {...data} />
            ))}
          </SportsStories>
        </div>
      </SportsSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;  
  gap: 48px;

  @media (${QUERIES.desktopAndUp}) {
    gap: 0;
    grid-template-columns: 1fr 1fr;
  }
`;

const MarketsSection = styled.section`
  @media (${QUERIES.desktopAndUp}) {
    padding-right: 24px;
    border-right: 1px solid var(--color-gray-300); 
  }
`;

const MarketCards = styled.div`
  @media (${QUERIES.tabletAndUp}) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 16px;
    justify-content: space-evenly;
  }
`;

const SportsSection = styled.section`
  overflow: auto;    
  @media (${QUERIES.desktopAndUp}) {
    margin-left: 24px;    
  }
`;

const SportsStories = styled.div`
  @media (${QUERIES.tabletAndUp}) {
    display: flex;
    gap: 16px;
  }
`;

export default SpecialtyStoryGrid;
