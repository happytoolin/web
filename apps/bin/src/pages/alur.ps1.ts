import { powershellInstaller, scriptResponse } from "../installers/alur";

export const prerender = true;

export function GET() {
  return scriptResponse(powershellInstaller, "text/x-powershell; charset=utf-8");
}
