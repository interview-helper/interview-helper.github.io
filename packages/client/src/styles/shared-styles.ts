import { css } from 'lit';

// these styles can be imported from any component
// for an example of how to use this, check /pages/about-about.ts
export const styles = css`
  @media (min-width: 1000px) {
    sl-card {
      max-width: 70vw;
    }
  }

  main {
    height: calc(100vh - 80px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    box-sizing: border-box;
    padding-top: 1rem;
    padding-bottom: 2rem;
    overflow-y: scroll;
    margin-top: 80px;
    position: relative;
  }
`;

