import styled from 'styled-components/native';

export type ImageProps = {
  rounded?: number;
};

export const Image = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: ${({rounded}: ImageProps) => rounded ?? 10}px;
`;
