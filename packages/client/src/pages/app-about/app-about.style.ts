import { css } from 'lit';

// these styles can be imported from any component
// for an example of how to use this, check /pages/about-about.ts
export const styles = css`
  @media (min-width: 1000px) {
    sl-card {
      max-width: 70vw;
    }
  }

  .introduce-wrap,
  .career-wrap,
  .project-wrap,
  .techstack-wrap {
    width: 600px;
    max-width: 90vw;
  }

  .submit-wrap {
    display: flex;
    justify-content: flex-end;
    width: calc(600px + 2.5rem);
  }

  .resume-card [slot='header'] {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .resume-card h3 {
    margin: 0;
  }

  .resume-card sl-icon-button {
    font-size: var(--sl-font-size-medium);
  }

  .add-btn-wrap {
    display: flex;
    justify-content: flex-end;
  }

  sl-textarea:not(:last-child),
  sl-input:not(:last-child),
  sl-select:not(:last-child),
  .add-btn {
    margin-bottom: 1rem;
  }

  .resume-card:not(:last-child) {
    margin-bottom: 1rem;
  }

  sl-textarea::part(form-control-label),
  sl-input::part(form-control-label) {
    width: 100%;
  }

  sl-textarea [slot='label'],
  sl-input [slot='label'] {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .delete-btn::part(label) {
    margin-right: -1rem;
  }

  .introduce--label {
    margin-bottom: 0.5rem;
  }

  .right-btn {
    position: absolute;
    right: 0;
  }
`;

