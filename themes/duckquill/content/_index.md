+++
insert_anchor_links = "right"
title = "Home"
+++

{% crt() %}
```
      _          _          _          _          _
    >(')____,  >(')____,  >(')____,  >(')____,  >(') ___,
      (` =~~/    (` =~~/    (` =~~/    (` =~~/    (` =~~/
jgs~^~^`---'~^~^~^`---'~^~^~^`---'~^~^~^`---'~^~^~^`---'~^~^~
```
{% end %}

# Duckquill

Duckquill is an opinionated, modern, pretty, and clean [Zola](https://www.getzola.org) theme that has the purpose of greatly simplifying the process of rolling up your blog. It aims to provide all the necessary options for comfortable writing, while keeping the balance of simplicity.

With it, you can change some configuration variables, tweak some of the included graphics, and have a nice blog up in minutes!

Some of the features Duckquill has to offer:

- Cute and informative social media cards for Discourse, Facebook, LinkedIn, Mastodon and more.
- [Mastodon-powered comments](https://carlschwan.eu/2020/12/29/adding-comments-to-your-static-blog-with-mastodon/); comment under a post by using your Mastodon account.
- Lightweight by default, powerful when needed; no JavaScript is used by default.
- Privacy respecting analytics using [GoatCounter](https://www.goatcounter.com), with support for self-hosting.
- Estimated read time of the post; put away those with short attention spans.
- Light/dark/system theme switcher (for some reason everyone likes these).
- Everything is tinted with the user-defined accent color for a pleasant look.
- GitHub-style alerts. Yes, they're pretty, but don't overuse them. 
- Post banners; they're even used in the social media cards!
- YouTube/Vimeo shortcodes for easy video embedding.
- Tiny by default; only ~100kB. Take that, 5MB Medium!
- Customizable copyright text; you Better Quack Soul!
- Image styling via URL. Yes, you read that right.
- Useless CRT style that everyone seems to like.
- Fully localizeable, worry not, [it's pretty easy](#localization).
- Social links in the footer, with special styling.
- LaTeX markup support via the [KaTeX](https://katex.org) library.
- Emoji favicon if you're lazy to draw one.
- Copy button for code blocks.
- Search functionality.

{% alert(note=true) %}
Although Duckquill is made based on the needs of [my website](https://daudix.one), I am very open to feature requests as long as they are somewhat useful to others, so if you need a feature/configuration that does not exist, feel free to open an issue, or better yet, a pull request!
{% end %}

{% alert(tip=true) %}
If you use Duckquill and enjoy it, or just like my work, please consider [buying me a coffee](https://daudix.one/coffee/), it would mean the world to me ^^.
{% end %}

## Installation

First, if you already have Git setup, add this theme as a submodule:

```bash
git submodule init
git submodule add https://codeberg.org/daudix/duckquill.git themes/duckquill
```

Otherwise, simply clone it to your `themes` directory:

```bash
git clone https://codeberg.org/daudix/duckquill.git themes/duckquill
```

{% alert(important=true) %}
It is highly recommended to switch from the `main` branch to the latest release:
{% end %}

```bash
cd themes/duckquill
git checkout tags/v5.1.0
```

Then, enable it in your `config.toml`:

```toml
theme = "duckquill"
```

To update the theme, simply switch to a new tag:

```bash
git submodule update --remote --merge
cd themes/duckquill
git checkout tags/v5.1.0
```

{% alert(important=true) %}
Check the changelog for all versions after the one you are using; there may be breaking changes that require manual involvement.
{% end %}

## Options

Duckquill offers some configuration options to make it fit you better; most options have pretty descriptive comments, so it should be easy to understand what they do.

## Front Matter

Duckquill has some [front matter](https://www.getzola.org/documentation/content/page/#front-matter) variables that you can use by setting them in the `[extra]` section:

### Global

Configuration variables from `config.toml` that can be set/overriden per page/section:

- `default_theme`: Which theme should be used by default (light/dark).
- `accent_color`: Sets theme and [browser theme](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name/theme-color) color.
- `accent_color_dark`: Ditto but for the dark theme. If not set regular variant will be used.
- `fix_contrast`: Whether to fix low contrast in text selection, checkboxes, etc. Use only if the default doesn't provide enough contrast, e.g. the accent color is set to yellow.
- `fix_contrast_dark`: Ditto but for the dark theme.
- `emoji_favicon`: Use emoji as a favicon. Only one emoji is being rendered, everything else is truncated.
- `styles`: Additional CSS styles; expects them to be in the `./static/` directory. If you are using Sass it will be generated there automatically.
- `scripts`: Additional JavaScript scripts; expects them to be in the `./static/` directory.

Other variables:

- `apple_touch_icon`: Filename of the [colocated](https://www.getzola.org/documentation/content/overview/#asset-colocation) Apple Touch Icon.
- `favicon`: Filename of the [colocated](https://www.getzola.org/documentation/content/overview/#asset-colocation) favicon.
- `card`: Filename of the [colocated](https://www.getzola.org/documentation/content/overview/#asset-colocation) metadata card.
- `archive`: Displays an archived message.
- `trigger`: Displays a trigger warning message.
- `disclaimer`: Displays a disclaimer message.
- `toc`: Enables table of contents. Only first 2 levels of headings are listed.

### Blog post specific:

- `banner`: Filename of the [colocated](https://www.getzola.org/documentation/content/overview/#asset-colocation) banner image. Recommended dimensions are 2:1 aspect ratio and 1920x960 resolution.
- `banner_pixels` Makes the banner use nearest neighbor algorithm for scaling, useful for keeping pixel-art sharp.
- `archived`: Make the post visually stand out in the post list. Also accepts message as a value.
- `featured`: Ditto but doesn't accept message as a value.
- `hot`: Ditto.
- `poor`: Ditto.

In `[extra.comments]` section:

- `host`: The Mastodon server on which the post was posted.
- `user`: The username of the poster.
- `id`: ID of the post; the one in the URL.

### Localization

Duckquill ships with a localization system based on one used in [tabi](https://github.com/welpo/tabi), it's very easy to use and quite flexible at the same time.

To add a translation, simply create a file in your site's `i18n` directory called `LANG_CODE.toml`, e.g `fr.toml`. The language code should be either [ISO 639-1](https://localizely.com/iso-639-1-list/) or [BCP 47](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry).

Inside that file, copy-paste one of the existing translations from Duckquill and adapt it to your needs. You can also check [tabi](https://github.com/welpo/tabi/tree/main/i18n) translation files for reference.

Additionally to translating Duckquill, you can also override the English stings by copy-pasting `en.toml` from Duckquill to the `i18n` directory of your website and adjusting the values to your liking.

### Custom Styles

To add your own or override existing styles, create a custom style and add it in the `config.toml`:

```toml
[extra]
styles = [
  "YOUR_STYLE.css",
  "ALSO_YOUR_STYLE.css"
]
```

Additional styles are expected it to be in the `static` directory. If you are using Sass they will be compiled there by default.

If for some reason overridden style is not respected, try using `!important` (don't use it unless needed). You can import styles from Duckquill using:

```scss
@use "../themes/duckquill/sass/NEEDED_FILE.scss";
```

You can also load styles per page/section by setting them inside page's front matter:

```toml
[extra]
styles = [
  "YOUR_PAGE_STYLE.css"
]
```

### Accent Color

Duckquill respects chosen accent color everywhere. To use your own, simply change it in `config.toml`:

```toml
[extra]
accent_color = "#3584e4"
```

Additionally, you can set a separate color for dark mode:

```toml
[extra]
accent_color_dark = "#ff7800"
```

### Favicon

Files named `favicon.png` and `apple-touch-icon.png` are used as favicon and Apple Touch Icon respectively. For animated favicon you can use APNG with the `png` file extension.

## In the Wild

<details>
  <summary>This list is starting to get long, so click on it to expand it.</summary>

- [agustinramirodiaz.github.io](https://agustinramirodiaz.github.io)
- [alavi.me](https://alavi.me)
- [amritcodes.xyz](https://amritcodes.xyz)
- [arfh.pages.dev](https://arfh.pages.dev)
- [bambalabs.co](https://www.bambalabs.co)
- [bano.dev](https://bano.dev)
- [benjaminandre.be](https://benjaminandre.be)
- [blog.digital-horror.co](https://blog.digital-horror.com)
- [blog.pansi21.xyz](https://blog.pansi21.xyz)
- [cabysm.github.io](https://cabysm.github.io)
- [daudix.one](https://daudix.one) <small>(obviously)</small>
- [daveparr.info](https://www.daveparr.info)
- [davepoltorak.com](https://davepoltorak.com)
- [enriquekesslerm.com](https://enriquekesslerm.com)
- [gregorni.gitlab.io](https://gregorni.gitlab.io)
- [harrypotterexplained.com](http://harrypotterexplained.com)
- [hyouteki.github.io](https://hyouteki.github.io)
- [ikergimenez.neocities.org](https://ikergimenez.neocities.org)
- [kaipeacock.com](https://kaipeacock.com)
- [luciengheerbrant.com](https://luciengheerbrant.com)
- [lukoktonos.com](http://www.lukoktonos.com)
- [matteorisso.github.io](https://matteorisso.github.io)
- [maxime.letemple.fr](https://maxime.letemple.fr)
- [mourelask.xyz](https://mourelask.xyz)
- [muelsyse.codeberg.page](https://muelsyse.codeberg.page)
- [mukuljoshi.xyz](https://mukuljoshi.xyz)
- [nbenedek.me](https://nbenedek.me)
- [nezumi.party](https://nezumi.party)
- [nisf.be](https://nisf.be)
- [nullpuppy.github.io](https://nullpuppy.github.io)
- [nutn-isc.gitlab.io](https://nutn-isc.gitlab.io/nutn-isc-website/)
- [orbitalmartian.codeberg.page](https://orbitalmartian.codeberg.page)
- [orzklv.uz](https://orzklv.uz)
- [penandink.work](https://penandink.work)
- [pyter.at](https://pyter.at)
- [rbd.gg](https://www.rbd.gg)
- [rerere.unlogic.co.uk](https://rerere.unlogic.co.uk)
- [rossjr.dev](https://rossjr.dev)
- [samienr.com](https://samienr.com)
- [shrimple.srht.site](https://shrimple.srht.site)
- [siddharthsabron.in](https://siddharthsabron.in)
- [skaven.org](https://skaven.org)
- [sorg.codeberg.page](https://sorg.codeberg.page)
- [sungsphinx.codeberg.page](https://sungsphinx.codeberg.page)
- [tmblog.pages.dev](https://tmblog.pages.dev)
- [treeniks.github.io](https://treeniks.github.io)
- [vikramxd.github.io](https://vikramxd.github.io)
- [voluxyy.github.io](https://voluxyy.github.io/portfolio/)
- Yours? <small>(feel free to [contact me](https://daudix.one/find/#contacts) or send a pull request)</small>

</details>

## In Credits

- [andreatitolo.com](https://www.andreatitolo.com/credits)
- [aplos.gxbs.me](https://aplos.gxbs.me)
- [archaeoramblings.com](https://www.archaeoramblings.com/credits)
- [oomfie.town](https://oomfie.town/credits)

## Assets Sources

All sources for Duckquill's assets are available [here](https://codeberg.org/daudix/archive/src/branch/main/duckquill/src) and licensed under CC BY-SA 4.0. The reason for not putting the sources in the same repo as Duckquill itself is simple: I want it to be as small as possible, so that repo cloning is fast and doesn't make the site significantly heavier; this is also why the demo uses remote images instead of local copies.

## Credits

- [Quill image used in the metadata card](https://commons.wikimedia.org/wiki/File:3quills.jpg)

## Tools Used

- [VSCodium](https://vscodium.com) - Free/Libre Open Source Software Binaries of VS Code
  - [Capitalize](https://marketplace.visualstudio.com/items?itemName=viablelab.capitalize) - Title capitalization without random websites.
  - [Even Better TOML](https://marketplace.visualstudio.com/items?itemName=tamasfe.even-better-toml) - For `config.toml` basically.
  - [Monokai Pro](https://marketplace.visualstudio.com/items?itemName=monokai.theme-monokai-pro-vscode) - Awfully pretty theme.
  - [PX to REM](https://marketplace.visualstudio.com/items?itemName=cipchk.cssrem) - Easy conversion from PX to REM and vice versa.
  - [SCSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=mrmlnc.vscode-scss) - Not sure if it actually works. ¯\\\_(ツ)_/¯
  - [Sort CSS](https://marketplace.visualstudio.com/items?itemName=piyushsarkar.sort-css-properties) - A lifesaver for long CSS properties.
  - [Tera](https://marketplace.visualstudio.com/items?itemName=karunamurti.tera) - Tera template engine (the one Zola uses) support.
- [Firefox developer tools](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools) - Best of its kind.

As for the code formatter I use built-in VSCodium one. Prettier is good but I don't like how it tries to make code fit in a very narrow column, this can be changed of course, but built-in formatter does it's job so I don't bother doing so.

## Thanks To

- [Jakub Steiner](https://jimmac.eu) for the [OS Component Website](https://jimmac.github.io/os-component-website), which served as a starting point and inspiration.
- [Óscar](https://osc.garden) for [tabi](https://welpo.github.io/tabi/) and its [translation system](https://github.com/welpo/tabi/blob/main/templates/macros/translate.html).
- [Carl Schwan](https://carlschwan.eu) for the [Mastodon-powered Comments](https://carlschwan.eu/2020/12/29/adding-comments-to-your-static-blog-with-mastodon/).
- [Jonathan Neal](https://jonneal.dev) for the [normalize.css](https://csstools.github.io/normalize.css/).
- [GNOME design team](https://gitlab.gnome.org/Teams/Design) for the [icon development kit](https://gitlab.gnome.org/Teams/Design/icon-development-kit)
- [Modern Font Stacks](https://modernfontstacks.com) for the system font stack.
- [TheEvilSkeleton](https://tesk.page) for helping to improve the look and accessibility.
- [Dexter Reed](https://sungsphinx.codeberg.page) for being the first Duckquill user, preventing it from being axed.
- Everyone who supported me and said good stuff <3
