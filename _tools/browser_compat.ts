// https://github.com/denoland/deno_std/blob/bcfec95e6f110d468bea1eb29ad7e24f3d8b0bf7/_tools/check_browser_compat.ts

import { walk } from "https://deno.land/std@0.220.1/fs/walk.ts";

const ROOT = new URL("../", import.meta.url);
const SKIP = [/(test|example|bench|\/_|\\_|testdata|version.ts)/];

function isBrowserCompatible(filePath: string): boolean {
  const command = new Deno.Command(Deno.execPath(), {
    args: [
      "check",
      "--no-lock",
      "--config",
      "browser-compat.tsconfig.json",
      filePath,
    ],
  });
  const { success } = command.outputSync();
  return success;
}

for await (const { path } of walk(ROOT, { exts: [".ts"], skip: SKIP })) {
  if (isBrowserCompatible(path)) {
    console.log(
      `${path} is likely browser-compatible`,
    );
  }
}
