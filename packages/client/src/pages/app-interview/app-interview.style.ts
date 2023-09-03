import { css } from 'lit';

// these styles can be imported from any component
// for an example of how to use this, check /pages/about-about.ts
export const styles = css`
  main {
    flex-direction: row;
    justify-content: center;
  }

  .resume-section {
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 100%;
  }

  .interview-section {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .interview-card {
    width: 600px;
    max-width: 90vw;
  }

  .interview-card::part(base) {
    height: 100%;
  }

  .introduce-wrap,
  .career-wrap,
  .project-wrap,
  .techstack-wrap {
    width: 100%;
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

  sl-card [slot='header'] {
    display: flex;
    align-items: center;
  }

  sl-card [slot='header'] sl-spinner {
    margin-left: 0.25rem;
  }

  section > h2 {
    text-align: center;
  }

  sl-card {
    width: 600px;
    max-width: 90vw;
  }

  .skeleton-paragraphs sl-skeleton {
    margin-bottom: 0.7rem;
  }

  .skeleton-paragraphs sl-skeleton:nth-child(2) {
    width: 95%;
  }

  .skeleton-paragraphs sl-skeleton:nth-child(4) {
    width: 90%;
  }

  .skeleton-paragraphs sl-skeleton:last-child {
    width: 50%;
  }

  .interview-section sl-card:not(:last-child) {
    margin-bottom: 1rem;
  }

  @media (min-width: 1280px) {
    sl-card {
      max-width: 70vw;
    }
  }

  @media (max-width: 1280px) {
    .page {
      flex-direction: column-reverse;
      overflow-x: hidden;
    }

    sl-divider {
      display: none;
    }

    .resume-section {
      margin-bottom: 1rem;
    }
  }
`;

