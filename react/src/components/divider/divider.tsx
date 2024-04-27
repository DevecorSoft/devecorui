import React from "react";
import styled from "styled-components";
import {colors} from "@devecorui/colors"

const StyledSpan = styled.div`
  border-top: 1px solid ${colors.neutral.grey};
`
export function Divider(): React.JSX.Element {
  return <StyledSpan></StyledSpan>
}
