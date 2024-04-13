# colors

## Brand color

```tsx
import { colors } from '@devecorui/colors';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: fit-content;
`;
const Circle = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 40px;
    background-color: ${(props) => props.color};
`;

const Div = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 60px);
`;

<Div>
  {Object.keys(colors.brand).map((k) => {
    return <Container key={k}>
      <Circle color={colors.brand[k]}/>
      <span>{k}</span>
    </Container>
  })}
</Div>
```

## Functional color

## Neutral color
