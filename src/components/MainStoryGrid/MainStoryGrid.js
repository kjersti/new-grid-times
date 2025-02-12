import React from 'react';
import styled from 'styled-components/macro';

import {
  MAIN_STORY,
  OPINION_STORIES,
  SECONDARY_STORIES,
} from '../../data';

import SectionTitle from '../SectionTitle';
import MainStory from '../MainStory';
import SecondaryStory from '../SecondaryStory';
import OpinionStory from '../OpinionStory';
import Advertisement from '../Advertisement';
import { QUERIES } from '../../constants';

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <SecondaryStory key={story.id} {...story} location={index} />
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <StoryList>
          {OPINION_STORIES.map((story, index) => (
            <OpinionStory key={story.id} {...story} />
          ))}
        </StoryList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    'main-story'
    'secondary-stories'
    'opinion-stories'
    'advertisement';
  gap: 48px;
  margin-bottom: 48px;

  @media (${QUERIES.tabletOnly}) {
    grid-template-areas:
      'main-story main-story secondary-stories'      
      'advertisement advertisement advertisement' 
      'opinion-stories opinion-stories opinion-stories';    
      gap: 16px;
  }

  @media (${QUERIES.laptopAndUp}) {
    grid-template-areas:
      'main-story main-story secondary-stories opinion-stories'      
      'main-story main-story advertisement advertisement';    
      gap: 0;
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;
  @media (${QUERIES.laptopAndUp}) {
    padding-right: 16px;
    border-right: 1px solid var(--color-gray-300);
    min-width: 300px;
  }
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;
  @media (${QUERIES.laptopAndUp}) {
    padding-right: 16px;
    padding-left: 16px;
    border-right: 1px solid var(--color-gray-300);
  }
`;

const StoryList = styled.div`
  display: flex;
  flex-direction: column;    
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;

  @media (${QUERIES.tabletOnly}) {
    margin-top: 32px;
    padding-left: 4px;
    ${StoryList} {
      flex-direction: row;
      gap: 16px;
      padding-left: 4px;
    } 
  }

  @media (${QUERIES.laptopAndUp}) {    
    padding-left: 16px;   
  }
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;

  @media (${QUERIES.laptopAndUp}) {    
    padding-top: 16px;   
    padding-left: 16px;   
    border-top: 1px solid var(--color-gray-300);
  }
`;

export default MainStoryGrid;
