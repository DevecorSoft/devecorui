import { Card } from "../card.tsx";

describe('card', () => {
  it('should render card', () => {
    cy.mount(<Card>
        <div style={{width: '100px', height: '100px'}}></div>
      </Card>)
      .get('body')
      .matchImage({maxDiffThreshold: 0.01})
  })

  it('should able to customize radius', () => {
    cy.mount(<Card radius={'50px'}>
      <div style={{width: '100px', height: '100px'}}></div>
    </Card>)
      .get('body')
      .matchImage({maxDiffThreshold: 0.01})
  })
})
