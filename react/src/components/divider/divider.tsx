import React from "react";
import styled from "styled-components";
import {colors} from "@devecorui/colors"

const StyledDiv = styled.div`
  border-top: 1px solid ${colors.neutral.grey};
`
export function Divider(): React.JSX.Element {
  return <StyledDiv></StyledDiv>
}
