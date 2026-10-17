# kentang

Minimalist single-viewport homepage for **[kntl.zip](https://kntl.zip)**.

- Static site, no frameworks — plain HTML/CSS/JS
- Light/dark theme with smooth cross-fade (persisted, follows system by default)
- Responsive name: `Kent Liusudarso` → `Kent Liu` → `Kent L.` → `Kent`
- EN / JA language switch (name in katakana when Japanese)
- Icon links: email, LinkedIn, GitHub, CV

## Structure

```
public/          Static assets served by Cloudflare Workers
  index.html
  style.css
  script.js
wrangler.toml    Assets-only Worker config (name: kentang)
```

## Develop

Open `public/index.html` directly, or preview via:

```sh
npx wrangler dev
```

## Deploy

```sh
npx wrangler deploy
```

Deploys the Worker `kentang`, which serves the `kntl.zip` apex custom domain.
