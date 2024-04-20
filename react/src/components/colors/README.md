## Brand color

```jsx
import { colors } from '@devecorui/colors';
import { Circle } from "@devecorui/circle";
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: fit-content;
`;

const Div = styled.div`
    display: flex;
    gap: 20px
`;

<Div>
  {Object.keys(colors.brand).map((k) => {
    return <Container key={k}>
      <Circle color={colors.brand[k]} radius={'20px'}/>
      <span>{k}</span>
    </Container>
  })}
</Div>
```

## Functional color

## Neutral color

```jsx
import { colors } from '@devecorui/colors';
import { Circle } from "@devecorui/circle";
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: fit-content;
`;

const Div = styled.div`
    display: flex;
    gap: 20px
`;

<Div>
  {Object.keys(colors.neutral).map((k) => {
    return <Container key={k}>
      <Circle color={colors.neutral[k]} radius={'20px'}/>
      <span>{k}</span>
    </Container>
  })}
</Div>
```
