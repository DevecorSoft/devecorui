import React from "react";
import styled from "styled-components";
import {colors} from "@devecorui/colors"

const StyledDiv = styled.div<{radius: string}>`
  box-shadow: 0 4px 8px 0 ${colors.functional.shadow};
  transition: 0.3s;
  width: fit-content;
  border-radius: ${props => props.radius};

  &:hover {
    box-shadow: 0 8px 16px 0 ${colors.functional.shadow};
  }
`

export interface CardType extends React.PropsWithChildren {
  readonly radius?: string
}
export function Card({radius = '4px', children}: CardType): React.JSX.Element {
  return <StyledDiv radius={radius}>{children}</StyledDiv>
}
