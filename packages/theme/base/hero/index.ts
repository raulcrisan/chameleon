import { css } from "lit-element";

export default css`
  :host {
    --font-size-hero-title: 3em;
    --font-size-hero-subtitle: 1.375em;
    --color-hero-text: var(--color-surface);
  }

  header {
    padding: 0 5em;
  }

  .hero {
    align-items: center;
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    min-height: 400px;
    width: 100%;
  }

  .hero-title {
    font-size: var(--font-size-hero-title);
    font-weight: normal;
    letter-spacing: -0.72px;
    margin: 0 0 8px;
  }

  .hero-subtitle {
    font-size: var(--font-size-hero-subtitle);
    font-weight: normal;
    margin: 0 0 16px;
  }

  .hero-text {
    font-size: var(--font-size-paragraph-medium);
    letter-spacing: 0.25px;
    margin: 0;
  }

  .hero-title,
  .hero-subtitle,
  .hero-text {
    color: var(--color-hero-text);
  }
`;
