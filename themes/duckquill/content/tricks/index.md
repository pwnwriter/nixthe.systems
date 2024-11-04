+++
title = "Tricks"
+++

Several lesser known Duckquill thingies.

<small>If you have some, please consider sharing them here.</small>

## Table of Contents

- [Styling](#styling)
  - [Navbar](#navbar)
  - [Headings](#headings)
  - [Strikethrough](#strikethrough)
  - [Edge Highlights](#edge-highlights)
  - [Horizontal Rules](#horizontal-rules)
  - [Background Image](#background-image)

## Styling

Duckquill is pretty easy to restyle with just a few lines of SCSS in the [appropriate location](@/_index.md#custom-styles). Let's see some examples.

### Navbar

You can make navbar have more traditional look:

![classic navabr](https://files.catbox.moe/wd9nal.png)

```scss
#site-nav {
    margin-block-start: 0;
    inset-block-start: 0;
    box-shadow: var(--shadow-glass);
    border-radius: 0;
    width: 100%;
    max-width: 100%;

    nav,
    #search-container {
        margin: 0 auto;
        width: min(var(--container-width), 90%);
    }

    nav ul li {
        a,
        summary,
        &#search button,
        &#language-switcher details summary,
        &#theme-switcher details summary {
            border-radius: var(--rounded-corner);
        }

    }

    #search-container {
        #search-bar {
            border-radius: var(--rounded-corner);
        }
    }
}
```

Or you can make it sticked to top but not full-width:

![sticked navabr](https://files.catbox.moe/vr62lb.png)

```scss
#site-nav {
    margin-block-start: 0;
    inset-block-start: 0;
    box-shadow: var(--shadow-glass);
    border-radius: 0 0 calc(var(--rounded-corner) + 0.5rem) calc(var(--rounded-corner) + 0.5rem);

    nav ul li {
        a,
        summary,
        &#search button,
        &#language-switcher details summary,
        &#theme-switcher details summary {
            border-radius: var(--rounded-corner);
        }

    }

    #search-container {
        #search-bar {
            border-radius: var(--rounded-corner);
        }
    }
}
```

### Headings

Default headings might not fit your taste, that's understandable. Good thing is that we can ~~make them boring~~ fix them:

![boring headings](https://files.catbox.moe/6ok740.png)

```scss
h1,
h2,
h3,
h4,
h5,
h6 {
    font-weight: bold;
    font-family: var(--font-system-ui)
}

h1 {
    font-weight: 900;
}
```

### Strikethrough

The default strikethrough style is too much? Let's sort this out:

![plain strikethrough](https://files.catbox.moe/y2tbwm.png)

```scss
del {
    box-shadow: none;
    border-radius: 0;
    background-color: transparent;
    padding: 0;
    color: inherit;
}
```

### Edge Highlights

Hate the skeuomorphic edge highlight on all semi-transparent elements? Let's get rid of them:

```scss
@import "../themes/duckquill/sass/_variables.scss";

@include theme-variables using ($theme) {
    @if $theme == "light" {
        --edge-highlight: 0 0 0 transparent;
    }
}
```

### Horizontal Rules

Don't like that fancy horizontal rule? Let's make it more modern:

![modern horizontal rule](https://files.catbox.moe/qyqzoy.png)

```scss
hr {
	box-shadow: var(--edge-highlight);
	border: none;
	border-radius: 999px;
	background-color: var(--fg-muted-2);
	width: 50%;
	height: 0.25rem;

    &::after {
        display: none;
    }
}
```

### Background Image

Want to set some nice image as a background? We got you covered:

![background image](https://files.catbox.moe/no8vfc.png)

```scss
@import "../themes/duckquill/sass/_variables.scss";

@include theme-variables using ($theme) {
    @if $theme == "dark" {
        --bg-overlay: linear-gradient(rgb(0 0 0 / 0.9), rgb(0 0 0 / 0.9));
    }

    @else {
        --bg-overlay: linear-gradient(rgb(255 255 255 / 0.8), rgb(255 255 255 / 0.8));
    }
}

body {
    background: var(--bg-overlay), center / cover no-repeat fixed url("https://images.unsplash.com/photo-1523712999610-f77fbcfc3843");
}
```

Most of the time contrast should be okay, but what if it's not? Simply adjust the opacity of `--bg-overlay` based on your needs.
