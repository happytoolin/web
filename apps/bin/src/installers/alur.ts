const latestReleaseBase = "https://github.com/happytoolin/alur/releases/latest/download";

export const shellInstallCommand = "curl -fsSL https://bin.happytoolin.com/alur | sh";
export const powershellInstallCommand = "irm https://bin.happytoolin.com/alur.ps1 | iex";

export const shellInstaller = `#!/bin/sh
set -eu

installer_url="\${ALUR_INSTALLER_URL:-${latestReleaseBase}/alur-installer.sh}"

if command -v curl >/dev/null 2>&1; then
  curl --proto '=https' --tlsv1.2 -LsSf "$installer_url" | sh
elif command -v wget >/dev/null 2>&1; then
  wget -qO- "$installer_url" | sh
else
  echo "alur installer requires curl or wget" >&2
  exit 1
fi
`;

export const powershellInstaller = `$ErrorActionPreference = "Stop"

$installerUrl = $env:ALUR_INSTALLER_URL
if ([string]::IsNullOrWhiteSpace($installerUrl)) {
  $installerUrl = "${latestReleaseBase}/alur-installer.ps1"
}

Invoke-RestMethod -Uri $installerUrl | Invoke-Expression
`;

const commonHeaders = {
  "Cache-Control": "public, max-age=300",
  "X-Content-Type-Options": "nosniff",
};

export function scriptResponse(body: string, contentType: string) {
  return new Response(body, {
    headers: {
      ...commonHeaders,
      "Content-Type": contentType,
    },
  });
}
