> [!WARNING]  
> WinterDevs is still in very early development. It may contain outdated information. If you see something wrong, please open an issue or PR.

# WinterDevs

A community-driven resource for Roblox developers & creators. On WinterDevs,
you'll find tutorials, tools, scripts, and more for your roblox games/projects.

WinterDevs is just starting out, and contributions are welcome! If you see something
wrong, please open an issue or PR.

## Contributing

WinterDevs is built with [Astro](https://astro.build/) & TailwindCSS.

### Adding a Tool

Adding a tool is very simple, and can be done in a few steps:

1. Create a new file in the `src/content/tools` folder. The file name should be
   the name of the tool, and the file extension should be `.mdx`.
2. Add the following frontmatter to the top of the file (and edit it based on your
   suggestion):

```yaml
---
title: Tool Name
description: A short description of the tool.
author: Your GitHub username
draft: false
date: 2024-12-25
category: design
pricingModel: Paid
platform:
  - Windows
  - macOS
  - Mobile
link: https://example.com
---
```

- `title`: The name of the tool.
- `description`: A short description of the tool.
- `author`: Your GitHub username.
- `draft`: Set this to `true` if you want to hide the tool from the public view. Generally should be set to `false` when submitting a PR.
- `date`: The date the tool was added.
- `category`: The category of the tool. This can be any of the following: `design`, `video`, `audio`, `development`, `other`.
- `pricingModel`: The pricing model of the tool. This can be any of the following: `Free`, `Paid`, `Freemium`.
- `platform`: The platforms the tool supports. This can be any of the following: `Windows`, `macOS`, `Linux`, `Web`, `Mobile`.
- `link`: The link to the tool's website.

3. Add the content of the tool to the file. This can be any markdown or HTML.
4. Save the file and submit a PR.

### Adding a Resource

Adding a resource is very simple, and can be done in a few steps.

1. Find the category.json file in the `src/content/resources` folder.
2. Add a new object to the links aray with the following properties:

```json
{
  "title": "Resource Name",
  "url": "https://example.com"
}
```

3. Save the file and submit a PR.
