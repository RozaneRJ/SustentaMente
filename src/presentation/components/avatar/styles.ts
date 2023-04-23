import styled from 'styled-components/native';

export type ImageProps = {
  size?: number;
  rounded?: number;
};

const getSize = ({size}: ImageProps) => size ?? 50;

export const Image = styled.Image`
  width: ${getSize}px;
  height: ${getSize}px;
  border-radius: ${({rounded}: ImageProps) => rounded ?? 10}px;
`;
