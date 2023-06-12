import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Overlay, OverlayPanel, GhostButton, Wrapper } from './AppStyle';

export const App = () => {
  return (
    <Wrapper>
      <Container>
        <Overlay>
          <OverlayPanel>
            <h1>Welcome My TodoList</h1>
              <Link to="/todo">
                <GhostButton> 입장 </GhostButton>
              </Link>
          </OverlayPanel>
        </Overlay>
      </Container>
    </Wrapper>
  );
}