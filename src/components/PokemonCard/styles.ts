import { styled } from '@xstyled/styled-components'

export const PokemonCardWrapper = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 25%;
  height: 100%;

  background-size: 200px;

  border-radius: 10px;

  margin: 20px;
  padding: 25px;

  position: relative;

  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
  z-index: 10;

  > svg {
    position: absolute;
    right: 70px;
    top: 10%;
    width: 250px;
    height: 250px;
    z-index: 0;
    transform: rotate(10deg);
    path {
      fill: rgba(255, 255, 255, 0.1);
    }
  }
`
