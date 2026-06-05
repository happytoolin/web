import { scriptResponse, shellInstaller } from "../installers/alur";

export const prerender = true;

export function GET() {
  return scriptResponse(shellInstaller, "text/x-shellscript; charset=utf-8");
}
