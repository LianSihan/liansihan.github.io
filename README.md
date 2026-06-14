# Lian Sihan (DedSwet) — Portfolio

Two-page portfolio with a playable WebGL game embed.

```
index.html        About + featured playable game (Lights, Camera, Fight!)
projects.html     Three projects
styles.css        Styles
webgl.js          Animated WebGL hero background
games.js          Click-to-load game player + fullscreen
netlify.toml      Headers so the Brotli Unity build loads (see below)
games/            <- you create this; put your build here
```

## 1. Add the playable build

1. Unzip `Web_Build.zip`. You get a folder named **`Web Build`**.
2. Rename that folder to **`lights-camera-fight`** (don't rename the files inside).
3. Create a `games/` folder next to `index.html` and move it in, so you have:
   ```
   games/lights-camera-fight/index.html
   games/lights-camera-fight/Build/...
   games/lights-camera-fight/StreamingAssets/...
   games/lights-camera-fight/TemplateData/...
   ```
The player on the site already points at `games/lights-camera-fight/index.html`.

## 2. Why it won't "just open" locally

Your Unity build uses **Brotli (`.br`) compression**. Browsers only decompress
those files if the server sends `Content-Encoding: br`. Opening the page from
your file system (`file://`) or a plain `python3 -m http.server` does **not**
send that header, so the game won't load. Pick one of the options below.

## 3. Easiest: deploy to Netlify (free, drag-and-drop)

1. Go to https://app.netlify.com/drop
2. Drag this whole folder (with `games/` and `netlify.toml` inside) onto the page.
3. Done — the included `netlify.toml` sets the Brotli headers automatically.

## 4. Alternative: re-export from Unity (works on ANY host, incl. GitHub Pages + local)

In Unity: **Build Settings → Player Settings → Publishing Settings**, then either
- set **Compression Format = Disabled**, or
- tick **Decompression Fallback**.

Re-build. The new build has no `.br` files (or decompresses itself in JS), so it
runs on GitHub Pages, a local server, anywhere. Replace the folder in `games/`
with the new build.

## 5. Editing content

Everything you'd change is marked with `<!-- EDIT -->` comments:
name, bio, the three projects, and all links (itch.io, more-info, downloads).
Project 02 and 03 titles ("Switchback", "Flicker") are working-title suggestions —
rename them in the `<h2>`.
