+++
title = "Demo Page"
[extra]
archive = "This page is in fact not archived. It is only here to demonstrate the archival statement."
trigger = "This page contains blackjack and hookers, and bad jokes such as this one."
disclaimer = """
- All tricks in this page are performed by the lab boys, don't try this at home.
- Don't expose yourself to 4000° kelvin.
- Don't take party escort submission position.
- Don't interact with asbestos and moon rocks.
"""
+++

## Markdown

Text can be **bold**, *italic*, ~~strikethrough~~, and ***~~all at the same time~~***.

[Link to another page](@/demo/page.md).

There should be whitespace between paragraphs[^1].

# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6

This is a normal paragraph[^2] following a header.

😭😂🥺🤣❤️✨🙏😍🥰😊

```
Long, single-line code blocks should not wrap. They should horizontally scroll if they are too long. This line should be long enough to demonstrate this.
```

> "Original content is original only for a few seconds before getting old"
> > Rule #21 of the internet

- Item 1
- Item 2
  - Item 2.1
  - Item 2.2
- Item 3
- `Item 4`

1. Perform step #1
2. Proceed to step #2
3. Conclude with step #3

- [ ] Milk
- [x] Eggs
- [x] Flour
- [ ] Coffee
- [x] Combustible lemons

[![Male mallard duck](https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Male_mallard_duck_2.jpg/800px-Male_mallard_duck_2.jpg)](https://upload.wikimedia.org/wikipedia/commons/2/24/Male_mallard_duck_2.jpg)

| Mare         | Rating            | Additional info  |
| :----------- | :---------------- | :--------------- |
| Fluttershy   | Best pone         | Shy and adorable |
| Apple Jack   | Good pone         | Honest and nice  |
| Pinkie Pie   | Fun pone          | Parties and ADHD |
| Twilight     | Main pone         | Neeerd           |
| Rainbow Dash | Yes               | Looks badass     |
| Rarity       | Fancy pone        | Generous         |
| Derpy Hooves | *M u f f i n s*   | [REDACTED]       |

```rust
let highlight = true;
```

```scss, linenos, linenostart=10, hl_lines=3-4 8-9, hide_lines=2 7
pre mark {
  // If you want your highlights to take the full width
  display: block;
  color: currentcolor;
}
pre table td:nth-of-type(1) {
  // Select a colour matching your theme
  color: #6b6b6b;
  font-style: italic;
}
```

***

## Extra

### KaTeX

Duckquill can render LaTeX using the [KaTeX](https://katex.org) library. It can be enabled using the `extra.katex` config variable.

```latex
$$\relax f(x) = \int_{-\infty}^\infty\hat{f}(\xi)\,e^{2 \pi i \xi x}\,d\xi$$
```

$$\relax f(x) = \int_{-\infty}^\infty\hat{f}(\xi)\,e^{2 \pi i \xi x}\,d\xi$$

```latex
$\relax f(x) = \int_{-\infty}^\infty\hat{f}(\xi)\,e^{2 \pi i \xi x}\,d\xi$
```

$\relax f(x) = \int_{-\infty}^\infty\hat{f}(\xi)\,e^{2 \pi i \xi x}\,d\xi$

### Shortcodes

Duckquill provides a few useful [shortcodes](https://www.getzola.org/documentation/content/shortcodes/) that simplify some tasks. They can be used on all pages.

#### Alerts

[GitHub-style](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#alerts) alerts. Simply wrap the text of desired alert inside the shortcode to get the desired look.

Available alert types:

- `note`: Useful information that users should know, even when skimming content.
- `tip`: Helpful advice for doing things better or more easily.
- `important`: Key information users need to know to achieve their goal.
- `warning`: Urgent info that needs immediate user attention to avoid problems.
- `caution`: Advises about risks or negative outcomes of certain actions.

```jinja2
{%/* alert(note=true) */%}
-> Alert text <-
{%/* end */%}
```

{% alert(note=true) %}
Useful information that users should know, even when skimming content.
{% end %}

{% alert(tip=true) %}
Helpful advice for doing things better or more easily.
{% end %}

{% alert(important=true) %}
Key information users need to know to achieve their goal.
{% end %}

{% alert(warning=true) %}
Urgent info that needs immediate user attention to avoid problems.
{% end %}

{% alert(caution=true) %}
Advises about risks or negative outcomes of certain actions.
{% end %}

#### Images and Videos

By default images and videos come with some generic styling, such as rounded corners and shadow. To fine-tune these, you can use shortcodes with different variable combinations.

Available variables are:

- `url`: URL to an image.
- `url_min`: URL to compressed version of an image, original can be opened by clicking on the image.
- `alt`: Alt text, same as if the text were inside square brackets in Markdown.
- `full`: Forces image to be full-width.
- `full_bleed`: Forces image to fill all the available screen width. Removes shadow, rounded corners and zoom on hover.
- `start`: Float image to the start of paragraph and scale it down.
- `end`: Float image to the end of paragraph and scale it down.
- `pixels`: Uses nearest neighbor algorithm for scaling, useful for keeping pixel-art sharp.
- `transparent`: Removes rounded corners and shadow, useful for images with transparency.
- `no_hover`: Removes zoom on hover.
- `spoiler`: Blurs image until hovered over/pressed on, useful for plot rich game screenshots.
- `spoiler` with `solid`: Ditto, but makes the image completely hidden.

```jinja2
{{/* image(url="image.png", alt="This is an image" no_hover=true) */}}
```

<figure>
{{ image(url="https://i1.theportalwiki.net/img/2/23/Ashpd_blueprint.jpg", alt="Portal Gun blueprint", no_hover=true) }}
<figcaption>Image with an alt text and without zoom on hover</figcaption>
</figure>

<figure>
{{ image(url="https://upload.wikimedia.org/wikipedia/commons/b/b4/JPEG_example_JPG_RIP_100.jpg", url_min="https://upload.wikimedia.org/wikipedia/commons/3/38/JPEG_example_JPG_RIP_010.jpg", alt="The gravestone of J.P.G.", no_hover=true) }}
<figcaption>Image with compressed version, an alt text, and without zoom on hover</figcaption>
</figure>

<figure>
{{ image(url="https://files.catbox.moe/lk7nee.jpg", alt="Portal Gun blueprint", spoiler=true) }}
<figcaption>Image with an alt text, hidden behind a spoiler</figcaption>
</figure>

Alternatively, you can append the following URL anchors. It can be more handy in some cases, e.g. such images will render normally in any Markdown editor, opposed to the Zola shortcodes.

- `#full`: Forces image to be full-width.
- `#full-bleed`: Forces image to fill all the available screen width. Removes shadow, rounded corners and zoom on hover.
- `#start`: Float image to the start of paragraph and scale it down.
- `#end`: Float image to the end of paragraph and scale it down.
- `#pixels`: Uses nearest neighbor algorithm for scaling, useful for keeping pixel-art sharp.
- `#transparent`: Removes rounded corners and shadow, useful for images with transparency.
- `#no-hover`: Removes zoom on hover.
- `#spoiler`: Blurs image until hovered over/pressed on, useful for plot rich game screenshots.
- `#spoiler` with `#solid`: Ditto, but makes the image completely hidden.

<br />
<figure>

[![Toolbx header image](https://containertoolbx.org/assets/toolbx.gif#full#pixels#transparent#no-hover)](https://containertoolbx.org)
<figcaption>Full-width image with an alt text, pixel-art rendering, no shadow and rounded corners, and no zoom on hover</figcaption>
</figure>

<br />

![1966 Ford Mustang coupe white](https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/1966_Ford_Mustang_coupe_white_003.jpg/320px-1966_Ford_Mustang_coupe_white_003.jpg#start)
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim aeque doleamus animo, cum corpore dolemus, fieri tamen permagna accessio potest, si aliquod aeternum et infinitum impendere malum nobis opinemur.

\
[![Picture of the magnificent lej da staz just before sunrise in october](https://images.unsplash.com/photo-1635410773896-da585e1fe138?q=80&w=2063&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D#full-bleed)](https://unsplash.com/photos/a-mountain-lake-surrounded-by-trees-and-snow-CqTOTZh5vrs)

For videos it's all the same except for a few differences: `no_hover` and `url_min` variables are not available.

```jinja2
{{/* video(url="video.webm", alt="This is a video") */}}
```

<figure>
{{ video(url="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm", alt="Red flower wakes up") }}
<figcaption>WebM video example from MDN</figcaption>
</figure>

<figure>
{{ video(url="https://upload.wikimedia.org/wikipedia/commons/transcoded/0/0e/Duckling_preening_%2881313%29.webm/Duckling_preening_%2881313%29.webm.720p.vp9.webm", alt="Duckling preening", full_bleed=true) }}
<figcaption>Duckling preening</figcaption>
</figure>

#### CRT

Alright, this one doesn't simplify anything, it just adds a CRT-like effect around Markdown code blocks.

```jinja2
{%/* crt() */%}
-> Markdown code block <-
{%/* end */%}
```

{% crt() %}

```
 _____________________________________________
|.'',        Public_Library_Halls         ,''.|
|.'.'',                                 ,''.'.|
|.'.'.'',                             ,''.'.'.|
|.'.'.'.'',                         ,''.'.'.'.|
|.'.'.'.'.|                         |.'.'.'.'.|
|.'.'.'.'.|===;                 ;===|.'.'.'.'.|
|.'.'.'.'.|:::|',             ,'|:::|.'.'.'.'.|
|.'.'.'.'.|---|'.|, _______ ,|.'|---|.'.'.'.'.|
|.'.'.'.'.|:::|'.|'|???????|'|.'|:::|.'.'.'.'.|
|,',',',',|---|',|'|???????|'|,'|---|,',',',',|
|.'.'.'.'.|:::|'.|'|???????|'|.'|:::|.'.'.'.'.|
|.'.'.'.'.|---|','   /%%%\   ','|---|.'.'.'.'.|
|.'.'.'.'.|===:'    /%%%%%\    ':===|.'.'.'.'.|
|.'.'.'.'.|%%%%%%%%%%%%%%%%%%%%%%%%%|.'.'.'.'.|
|.'.'.'.','       /%%%%%%%%%\       ','.'.'.'.|
|.'.'.','        /%%%%%%%%%%%\        ','.'.'.|
|.'.','         /%%%%%%%%%%%%%\         ','.'.|
|.','          /%%%%%%%%%%%%%%%\          ','.|
|;____________/%%%%%Spicer%%%%%%\____________;|
```

{% end %}

There's also a `cursor` class that you can add to a span with e.g. `█` character to simulate the terminal cursor. It doesn't work from inside Markdown code blocks though.

#### YouTube

Allows to embed a YouTube video using youtube-nocookie.

Available variables are:

- `autoplay`: Whether the video should autoplay.
- `start`: On which second video should start.

```jinja2
{{/* youtube(id="0Da8ZhKcNKQ") */}}
```

{{ youtube(id="0Da8ZhKcNKQ") }}

#### Vimeo

Allows to embed a Vimeo video.

Available variables are:

- `autoplay`: Whether the video should autoplay.

```jinja2
{{/* vimeo(id="869483483") */}}
```

{{ vimeo(id="869483483") }}

### Description List (`<dl>`)

```html
<dl>
<dt>Something</dt>
<dd>And its description</dd>
</dl>
```

<dl>
<dt>Name</dt>
<dd>Godzilla</dd>
<dt>Born</dt>
<dd>1952</dd>
<dt>Birthplace</dt>
<dd>Japan</dd>
<dt>Color</dt>
<dd>Green</dd>
</dl>

### Form Input (`<input>`)

```html
<input type="checkbox" />
<label>Checkbox</label>
```

<ul>
  <li>
    <input type="checkbox" />
    <label>&nbsp;Milk</label>
  </li>
  <li>
    <input type="checkbox" />
    <label>&nbsp;Eggs</label>
  </li>
  <li>
    <input type="checkbox" />
    <label>&nbsp;Flour</label>
  </li>
  <li>
    <input type="checkbox" checked />
    <label>&nbsp;Coffee</label>
  </li>
  <li>
    <input type="checkbox" disabled />
    <label>&nbsp;Combustible lemons</label>
  </li>
</ul>

With `switch` class:

```html
<input class="switch" type="checkbox" />
<label>Checkbox</label>
```

<ul>
  <li>
    <input class="switch" type="checkbox" />
    <label>&nbsp;Milk</label>
  </li>
  <li>
    <input class="switch" type="checkbox" />
    <label>&nbsp;Eggs</label>
  </li>
  <li>
    <input class="switch" type="checkbox" />
    <label>&nbsp;Flour</label>
  </li>
  <li>
    <input class="switch" type="checkbox" checked />
    <label>&nbsp;Coffee</label>
  </li>
  <li>
    <input class="switch" type="checkbox" disabled />
    <label>&nbsp;Combustible lemons</label>
  </li>
</ul>

With `switch` and `big` classes:

```html
<input class="switch big" type="checkbox" />
<label>Checkbox</label>
```

<ul>
  <li>
    <input class="switch big" type="checkbox" />
    <label>&nbsp;Milk</label>
  </li>
  <li>
    <input class="switch big" type="checkbox" />
    <label>&nbsp;Eggs</label>
  </li>
  <li>
    <input class="switch big" type="checkbox" />
    <label>&nbsp;Flour</label>
  </li>
  <li>
    <input class="switch big" type="checkbox" checked />
    <label>&nbsp;Coffee</label>
  </li>
  <li>
    <input class="switch big" type="checkbox" disabled />
    <label>&nbsp;Combustible lemons</label>
  </li>
</ul>

With `radio` type:

```html
<input type="radio" name="test" />
<label>Radio</label>
```

<ul>
  <li>
    <input type="radio" name="test" />
    <label>&nbsp;Milk</label>
  </li>
  <li>
    <input type="radio" name="test" />
    <label>&nbsp;Eggs</label>
  </li>
  <li>
    <input type="radio" name="test" />
    <label>&nbsp;Flour</label>
  </li>
  <li>
    <input type="radio" name="test" checked />
    <label>&nbsp;Coffee</label>
  </li>
  <li>
    <input type="radio" name="test" disabled />
    <label>&nbsp;Combustible lemons</label>
  </li>
</ul>

With `color` type:

```html
<label>Color:</label>
<input type="color" value="#000000" />
```

<label for="color">Color:</label>
<input id="color" type="color" value="#b57edc" />

<label for="color">Disabled:</label>
<input id="color" type="color" value="#b57edc" disabled />

With `range` type:

```html
<input type="range" max="100" value="33">
```

<input type="range" max="100" value="33" id="range">
<!-- For the demo purposes only -->
<small id="range-value"></small>

<script type="text/javascript">
  var slider = document.getElementById("range");
  var output = document.getElementById("range-value");
  output.innerHTML = slider.value;

  slider.oninput = function() {
    output.innerHTML = this.value;
  }
</script>
<!-- End -->

### Figure Captions (`<figcaption>`)

```markdown
<figure>
  -> Whatever content <-
  <figcaption>Caption of content above</figcaption>
</figure>
```

<figure>

  ![The Office](https://i.ibb.co/MPDJRsT/ImMAXM3.png)
  <figcaption>The Office where Stanley works, it has yellow floor and beige walls</figcaption>
</figure>

### Accordion (`<details>`)

```markdown
<details>
  <summary>Accordion title</summary>
  -> Contents here <-
</details>
```

<details>
  <summary>Reveal accordion</summary>

  Get it? I know, it's an awful pun.
  ![Piano Accordion](https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/PianoAccordeon.jpg/916px-PianoAccordeon.jpg#transparent#no-hover)

</details>

### Side Comment (`<small>`)

```html
<small>Small, cute text that doesn't catch attention.</small>
```

<small>Small, cute text that doesn't catch attention.</small>

### Abbreviation (`<abbr>`)

```html
<abbr title="American Standard Code for Information Interchange">ASCII</abbr>
```

The <abbr title="American Standard Code for Information Interchange">ASCII</abbr> art is awesome!

### Aside (`<aside>`)

```html
<aside>
-> Contents here <-
</aside>
```

<aside>
Quill and a parchment
<img class="transparent no-hover" style="margin-block-end: 0; border-radius: 0;" alt="Quill and a parchment" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/%D7%A7%D7%9C%D7%A3%2C_%D7%A0%D7%95%D7%A6%D7%94_%D7%95%D7%93%D7%99%D7%95.jpg/326px-%D7%A7%D7%9C%D7%A3%2C_%D7%A0%D7%95%D7%A6%D7%94_%D7%95%D7%93%D7%99%D7%95.jpg" />
</aside>

A quill is a writing tool made from a moulted flight feather (preferably a primary wing-feather) of a large bird. Quills were used for writing with ink before the invention of the dip pen, the metal-nibbed pen, the fountain pen, and, eventually, the ballpoint pen.

As with the earlier reed pen (and later dip pen), a quill has no internal ink reservoir and therefore needs to periodically be dipped into an inkwell during writing. The hand-cut goose quill is rarely used as a calligraphy tool anymore because many papers are now derived from wood pulp and would quickly wear a quill down. However it is still the tool of choice for a few scribes who have noted that quills provide an unmatched sharp stroke as well as greater flexibility than a steel pen.

### Keyboard Input (`<kbd>`)

```html
<kbd>⌘ Command</kbd>.
```

To switch the keyboard layout, press <kbd>⌘ Super</kbd> + <kbd>Space</kbd>.

### Mark Text (`<mark>`)

```html
<mark>Marked text</mark>
```

You know what? I'm gonna say some <mark>very important</mark> stuff, so <mark>important</mark> that even **bold** is not enough.

### Deleted and Inserted Text (`<del>` and `<ins>`)

```html
<del>Something deleted</del> <ins>Something added</ins>
```

<del>Text deleted</del> <ins>Text added</ins>

### Progress Indicator (`<progress>`)

```html
<progress></progress>
<progress value="33" max="100"></progress>
```

<progress></progress>
<progress value="33" max="100"></progress>

### Sample Output (`<samp>`)

```html
<samp>Sample Output</samp>
```

<samp>Sample Output</samp>

### Inline Quotation (`<q>`)

```html
<q>Someone said something</q>
```

Blah blah <q>Inline Quote</q> hmm.

### Unarticulated Annotation (`<u>`)

```html
<u>Gmarrar mitsakes</u>
```

<u>Yeet</u> the <u>sus</u> drip while <u>vibing</u> with the <u>TikTok</u> <u>fam</u> on a cap-free boomerang.

### External Links

```html
<a class="external" href="https://example.org">External link</a>
```

<a class="external" href="https://example.org">Link to site</a>

### Spoilers

```html
<span class="spoiler">Some spoiler</span>
```

You know, <span class="spoiler">Duckquill is a pretty dumb name.</span> I know, crazy.

With `solid` class:

```html
<span class="spoiler solid">Some spoiler</span>
```

You know, <span class="spoiler solid">Duckquill is a pretty dumb name.</span> I know, crazy.

### Buttons Dialog

```html.j2
<div class="dialog-buttons">
  <a class="inline-button" href="#top">Go to Top</a>
  <a class="inline-button colored external" href="https://example.org">Example</a>
</div>
```

<div class="dialog-buttons">
  <a class="inline-button" href="#top">Go to Top</a>
  <a class="inline-button colored external" href="https://example.org">Example</a>
</div>

[^1]: Footnote
[^2]: [Footnote (link)](https://example.org)

<!-- For the demo purposes only -->
<div id="color-picker-container">
  <small>Accent color:</small>
  <br />
  <input id="color-picker-light" type="color" value="#ff7800" />
  <label for="color-picker-light">Light theme</label>
  <br />
  <input id="color-picker-dark" type="color" value="#ffa348" />
  <label for="color-picker-dark">Dark theme</label>
  <br />
  <small>Fix contrast:</small>
  <br />
  <input id="contrast-color-light" class="switch" type="checkbox" />
  <label for="contrast-color-light">Light theme</label>
  <br />
  <input id="contrast-color-dark" class="switch" type="checkbox" checked />
  <label for="contrast-color-dark">Dark theme</label>
</div>

<style>
  #color-picker-container {
    -webkit-backdrop-filter: var(--blur);
    position: fixed;
    transform: translateX(calc(-100% + 1rem));
    z-index: 1;
    backdrop-filter: var(--blur);
    transition: var(--transition);
    inset-block-end: 1rem;
    inset-inline-start: 0;
    box-shadow: var(--edge-highlight), var(--shadow-glass);
    border-start-end-radius: var(--rounded-corner);
    border-end-end-radius: var(--rounded-corner);
    background-color: var(--nav-bg);
    padding: 0.5rem;
  }

  #color-picker-container:hover {
    transform: none;
  }

  #color-picker-container label {
    margin-inline-end: 0.25rem;
    color: var(--fg-muted-4);
    font-weight: bold;
  }

  :root[dir*="rtl"] #color-picker-container {
    transform: translateX(calc(100% - 1rem));
  }

  :root[dir*="rtl"] #color-picker-container:hover {
    transform: none;
  }

  #color-picker-light,
  #color-picker-dark,
  #contrast-color-light,
  #contrast-color-dark {
    margin-inline-end: 0.25rem;
  }
</style>

<script type="text/javascript">
  const colorPickerLight = document.querySelector("#color-picker-light");
  const colorPickerDark = document.querySelector("#color-picker-dark");
  const contrastCheckboxLight = document.querySelector("#contrast-color-light");
  const contrastCheckboxDark = document.querySelector("#contrast-color-dark");

  let accentColorLight = colorPickerLight.value;
  let accentColorDark = colorPickerDark.value;

  colorPickerLight.addEventListener("input", updateAccentColorLight);
  colorPickerDark.addEventListener("input", updateAccentColorDark);
  contrastCheckboxLight.addEventListener("change", updateStyles);
  contrastCheckboxDark.addEventListener("change", updateStyles);

  function updateAccentColorLight() {
    accentColorLight = colorPickerLight.value;
    updateStyles();
  }

  function updateAccentColorDark() {
    accentColorDark = colorPickerDark.value;
    updateStyles();
  }

  function updateStyles() {
    const contrastColorLight = contrastCheckboxLight.checked;
    const contrastColorDark = contrastCheckboxDark.checked;

    let styleElement = document.getElementById("dynamic-styles");

    if (!styleElement) {
      styleElement = document.createElement("style");
      styleElement.id = "dynamic-styles";
      document.head.appendChild(styleElement);
    }

    let styles = `
      :root {
        --accent-color: ${accentColorLight};
      }
      [data-theme="dark"] {
        --accent-color: ${accentColorDark};
      }
      @media (prefers-color-scheme: dark) {
        :root:not([data-theme="light"]) {
          --accent-color: ${accentColorDark};
        }
      }
    `;

    if (contrastColorLight) {
      styles += `
        :root {
          --contrast-color: rgb(0 0 0 / 0.8);
        }
      `;
    } else {
      styles += `
        :root {
          --contrast-color: #fff;
        }
      `;
    }

    if (contrastColorDark) {
      styles += `
        [data-theme="dark"] {
          --contrast-color: rgb(0 0 0 / 0.8);
        }
        @media (prefers-color-scheme: dark) {
          :root:not([data-theme="light"]) {
            --contrast-color: rgb(0 0 0 / 0.8);
          }
        }
      `;
    } else {
      styles += `
        [data-theme="dark"] {
          --contrast-color: #fff;
        }
        @media (prefers-color-scheme: dark) {
          :root:not([data-theme="light"]) {
            --contrast-color: #fff;
          }
        }
      `;
    }

    styleElement.textContent = styles;
  }

  updateStyles();
</script>
<!-- End -->
