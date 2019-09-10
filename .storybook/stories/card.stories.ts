import { storiesOf } from "@storybook/polymer";
import { withKnobs, text } from "@storybook/addon-knobs";
import { html } from "lit-html";
import "../../packages/card/src/chameleon-card";
import "../../packages/card-header/src/chameleon-card-header";

const stories = storiesOf("Card", module);

// Typecasting this as "any" is a quick workaround. Please come back
// to this and make these types compatible.
stories.addDecorator(withKnobs as any);

stories.add(
  "Basic",
  () => {
    const subtitleText = text("Subtitle", "Destination");
    const titleText = text("Title", "St. Louis, MO");

    return html`
      <chameleon-card>
        <chameleon-card-header
          title="${titleText}"
          subtitle="${subtitleText}"
        ></chameleon-card-header>
        <p>Here is some sample content for the card</p>
      </chameleon-card>
    `;
  },
  { info: { inline: true } }
);

stories.add(
  "Outline",
  () => {
    return html`
      <chameleon-card outline>
        <h3>Card</h3>
        <p>Here is some sample content for the card</p>
      </chameleon-card>
    `;
  },
  { info: { inline: true } }
);