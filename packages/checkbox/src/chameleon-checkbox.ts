import {
  LitElement,
  TemplateResult,
  customElement,
  html,
  property
} from "lit-element";
import { nothing } from "lit-html";
import base from "@chameleon-ds/theme/base";
import style from "@chameleon-ds/theme/base/checkbox";

@customElement("chameleon-checkbox")
export default class ChameleonCheckbox extends LitElement {
  /**
   * Properties
   */

  // The checkbox's label
  @property({ type: String })
  label = "";

  // A Boolean which, if true, indicates that the checkbox is selected
  @property({ type: Boolean, reflect: true })
  checked = false;

  // The checkbox's current value
  @property({ type: String })
  value = "";

  /**
   * Styles
   */
  static styles = [base, style];

  /**
   * Template
   */
  render(): TemplateResult {
    return html`
      <input type="checkbox" ?checked="${this.checked}" value="${this.value}" />
      <span class="checkmark"></span>
      ${this.labelText}
    `;
  }

  get labelText(): string | object {
    if (this.label !== "") return this.label;
    else return nothing;
  }
}
