import styled from "styled-components";

export interface CircleType {
  radius: string
  color: string
}

const StyledSpan = styled.span<CircleType>`
  width: calc(2 * ${(props) => props.radius});
  height: calc(2 * ${(props) => props.radius});
  border-radius: ${(props) => props.radius};
  background-color: ${(props) => props.color};
  border: 1px solid black;
`;

export const Circle = (props: CircleType) => <StyledSpan {...props}/>
