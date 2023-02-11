import React from 'react';
import styled from 'styled-components/macro';
import { QUERIES } from '../../constants';

const OpinionStory = ({ id, title, author, avatar }) => {
  return (
    <StoryLink href={`/story/${id}`}>
      <Wrapper>
        <Avatar alt="" src={avatar} />
        <div>
          <AuthorName>{author}</AuthorName>
          <ArticleTitle>{title}</ArticleTitle>
        </div>
      </Wrapper>
    </StoryLink>
  );
};

const StoryLink = styled.a`
  flex: 1;
  padding-bottom: 16px;
  &:not(:first-of-type) {
    padding-top: 16px;
  }
  
  &:not(:last-of-type) {
    border-bottom: 1px solid var(--color-gray-300);  
  }  

  @media (${QUERIES.tabletOnly}) {   
    padding: 0;
    &:not(:first-of-type) {
      padding: 0;      
    }    
    &:not(:last-of-type) {
      padding: 0;
      border-bottom: none;
    }    
  }
`;

const Wrapper = styled.article`
  color: var(--color-gray-900);  
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
  gap:24px;  
  
  @media (${QUERIES.tabletOnly}) {
    display: revert;  
  }  
`;

const Avatar = styled.img`
  display: block;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
`;

const AuthorName = styled.p`
  font-size: 1.125rem;
  font-weight: var(--font-weight-medium);
  color: var(--color-gray-700);
  margin-bottom: 4px;
`;

const ArticleTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: var(--font-weight-bold);
  line-height: 1.3;
`;

export default OpinionStory;
