import { css } from "lit-element";

export default css`
  :host {
    align-items: center;
    display: inline-flex;
    font-size: var(--font-size-input);
  }

  .switch {
    display: inline-block;
    height: 20px;
    margin-right: 10px;
    position: relative;
    width: 32px;
  }

  .switch input {
    display: none;
  }

  .slider {
    background-color: var(--color-gray-lightest);
    border-radius: 10px;
    bottom: 0;
    cursor: pointer;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: 0.4s;
  }

  .slider:before {
    background-color: var(--color-surface);
    border-radius: 50%;
    bottom: 2px;
    box-shadow: 1px 0 3px var(--color-box-shadow);
    content: "";
    height: 16px;
    left: 2px;
    position: absolute;
    transition: 0.4s;
    width: 16px;
  }

  input:checked + .slider {
    background-color: var(--color-primary);
  }

  input:focus + .slider {
    box-shadow: 0 0 3px var(--color-gray-dark);
  }

  input:checked + .slider:before {
    box-shadow: none;
    transform: translateX(12px);
  }
`;
