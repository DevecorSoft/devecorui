import { Divider } from '../divider';

describe('divider', () => {
  it('should have correct style', () => {
    cy.mount(<div style={{width: '100%'}}>
      <Divider/>
    </div>)
      .matchImage({maxDiffThreshold: 0.01})
  })
});
