import React from "react";
import { ThemeConsumer } from "styled-components";
import Button from "./Button";

export default function TextZoom() {
  return (
    <ThemeConsumer>
      {(theme) => (
        <Button
          variant="primary"
          onClick={(e) =>
            theme.setTheme(
              theme.textZoom === "normal"
                ? { ...theme, textZoom: "magnify" }
                : { ...theme, textZoom: "normal" }
            )
          }
        >
          {theme.textZoom === "normal" ? "Zoom In" : "Zoom Out"}{" "}
        </Button>
      )}
    </ThemeConsumer>
  );
}
