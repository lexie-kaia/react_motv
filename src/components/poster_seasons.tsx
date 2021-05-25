import React from 'react';
import styled from '@emotion/styled';

type Props = {
  imageUrl: string;
  title: string;
  episodeCount: number;
  year: string;
};

const Item = styled.li``;

const Content = styled.div`
  max-width: 14rem;
  position: relative;
  overflow: hidden;
  margin: 0 auto;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.2),
    0 4px 6px -2px rgba(0, 0, 0, 0.1);
`;

const Img = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 1.5rem 1rem;
  width: 100%;
  height: 24rem;
  background: ${({ url }: { url: string }) =>
    `linear-gradient(rgba(0,0,0,0) 0%, rgba(44,46,69,0.3) 50%, rgba(23,25,37,1) 80%)
  , no-repeat 50% 0 / contain url(${url})`};
`;

const Title = styled.h3`
  margin: 0.6rem 0 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.2;
`;

const Meta = styled.div`
  font-size: 0.875rem;
  color: #bdbdbd;
`;

const Data = styled.span`
  &:not(:last-child)::after {
    content: '•';
    margin: 0 0.5rem;
  }
`;

const PosterSeasons = ({ title, imageUrl, year, episodeCount }: Props) => (
  <Item>
    <Content>
      <Img
        url={
          imageUrl
            ? `https://image.tmdb.org/t/p/w500${imageUrl}`
            : '/images/poster_default.jpg'
        }
      >
        <Title>{title}</Title>
        <Meta>
          <Data>{year}</Data>
          <Data>{episodeCount} episodes</Data>
        </Meta>
      </Img>
    </Content>
  </Item>
);

export default PosterSeasons;
