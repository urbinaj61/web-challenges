// Implement the launch sequence function here and export it as the default export.
import { NFSAT, FISHSAT } from "./payload/satellites.js";
import { loadPayload } from "./core/load.js";
import { countdown } from "./core/countdown.js";
import { deployPayload } from "./core/deploy.js";
import { fuel } from "./core/fuel.js";
import { liftoff } from "./core/liftoff.js";

export default function launch() {
  loadPayload(NFSAT);
  loadPayload(FISHSAT);

  fuel();
  for (let i = 1; i <= 5; i++) {
    countdown();
  }

  liftoff();
  deployPayload();
}
