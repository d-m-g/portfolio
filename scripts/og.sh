#!/bin/sh
# Regenerate public/og.jpg from scripts/og.html.
#
# og.html re-runs the Backdrop fragment shader as a single frozen frame at
# 1200x630 and lays the OG type over it, so the preview card and the live site
# come from the same shader rather than drifting apart by hand.
#
# Needs the Chromium that Playwright caches; nothing is installed for this.
# ponytail: hardcoded browser build, bump the glob if playwright updates.
set -e
cd "$(dirname "$0")"

CHROME=$(echo "$HOME"/Library/Caches/ms-playwright/chromium-*/chrome-mac*/*.app/Contents/MacOS/*)
[ -x "$CHROME" ] || { echo "no cached chromium: npx playwright install chromium" >&2; exit 1; }

# swiftshader: headless has no GPU, and the shader needs a real GL backend.
# virtual-time-budget: without it the screenshot fires before the script draws.
"$CHROME" --headless --use-angle=swiftshader --enable-unsafe-swiftshader \
  --allow-file-access-from-files --hide-scrollbars \
  --window-size=1200,630 --virtual-time-budget=3000 \
  --screenshot=/tmp/og-raw.png og.html >/dev/null 2>&1

# JPEG at 80: the contour field is a smooth dark gradient, which PNG stores
# badly (548K) and JPEG stores well (172K) with no visible banding.
sips -s format jpeg -s formatOptions 80 /tmp/og-raw.png --out ../public/og.jpg >/dev/null
rm -f /tmp/og-raw.png
echo "wrote public/og.jpg"
