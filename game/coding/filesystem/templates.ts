import { FileSystemRoot } from "./fs";

export const initialFileSystem: FileSystemRoot = {
  "main.mr": {
    type: "file",
    content: `// =======================================================
// MultiRaptor Sample: Entry Point (main.mr)
// =======================================================
Import("demo.mr"); // Load demo file containing proc_demo and constants.
Import("src/utils.mr");

// --- Execution ---
Signal("Initializing the MultiRaptor Demo.");
Signal("-----------------------------------");
proc_demo(); // Execute the main demonstration procedure!
Signal("-----------------------------------");
Signal("Demo execution complete.");
`,
  },
  "demo.mr": {
    type: "file",
    content: `// =======================================================
// MultiRaptor Demo Showcase (demo.mr)
// =======================================================

// 1. CONSTANT DECLARATION (seal)
seal MAX_ATTEMPTS = 5;
seal BASE_POWER = 12.5;

// 2. VARIABLE DECLARATION (vault)
vault target_name = "Core Reactor Alpha";

// 3. FUNCTION DEFINITION
proc proc_demo() {
  Signal("Demo running inside proc_demo.");
  Signal("Target: " + target_name);

  vault result_1 = (BASE_POWER + 7.5) * 3;
  vault result_2 = 100 / MAX_ATTEMPTS - 5;

  Signal("Power Calculation: ((12.5 + 7.5) * 3) = " + result_1);
  Signal("Attempts Calculation: (100 / 5 - 5) = " + result_2);

  vault counter = 1;
  Signal("Initial Counter: " + counter);
  counter = counter + 4;
  Signal("Updated Counter: " + counter);

  vault computed_value = proc_data_message(result_1, 2);
  Signal("Function Call Result: " + computed_value);

  vault radius = 10;
  vault area = Math.PI * Math.pow(radius, 2);
  Signal("Area of Circle (Radius 10): " + area);
}

Signal("Global statements loaded successfully.");
`,
  },
  src: {
    type: "folder",
    children: {
      "utils.mr": {
        type: "file",
        content: `// =======================================================
// MultiRaptor Utility Functions (src/utils.mr)
// =======================================================

proc proc_data_message(base_value, multiplier) {
  vault intermediate = base_value + 20;
  Signal("Utility called. Intermediate: " + intermediate);
  return base_value * multiplier;
}
`,
      },
      config: {
        type: "folder",
        children: {
          "settings.mr": {
            type: "file",
            content: `// =======================================================
// MultiRaptor Settings (src/config/settings.mr)
// =======================================================

seal VERSION = "5.1.0";
Signal("Config loaded. Version: " + VERSION);
`,
          },
        },
      },
    },
  },
};
