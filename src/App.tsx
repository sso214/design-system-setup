import React from "react";
import { FistButton, SecondButton, ThirdButton, GhostButton, DisabledButton } from "./Button";

import "./index.css";
import { Input } from "./Input";

function App() {
  return (
    <ul>
      {/* Fist-Button */}
      <li>
        <FistButton size="large" text="large" onClick={() => console.log("click!")} />
      </li>
      <li>
        <FistButton size="small" text="small" />
      </li>
      <li>
        <FistButton size="fixed" text="fixed" />
      </li>

      {/* Second-Button */}
      <li>
        <SecondButton size="large" text="large" />
      </li>
      <li>
        <SecondButton size="small" text="small" />
      </li>
      <li>
        <SecondButton size="fixed" text="fixed" />
      </li>

      {/* Third-Button */}
      <li>
        <ThirdButton size="large" text="large" />
      </li>
      <li>
        <ThirdButton size="small" text="small" />
      </li>
      <li>
        <ThirdButton size="fixed" text="fixed" />
      </li>

      {/* Ghost-Button */}
      <li>
        <GhostButton size="large" text="large" />
      </li>
      <li>
        <GhostButton size="small" text="small" />
      </li>
      <li>
        <GhostButton size="fixed" text="fixed" />
      </li>

      {/* Disabled-Button */}
      <li>
        <DisabledButton size="large" text="large" />
      </li>
      <li>
        <DisabledButton size="small" text="small" />
      </li>
      <li>
        <DisabledButton size="fixed" text="fixed" />
      </li>

      <Input />
    </ul>
  );
}

export default App;
