# Copilot Instructions for This Project

## Project Overview
This project is a single-page HTML portfolio website (`Hello.html`). It is designed as a personal portfolio for "Mohit Raju Shirsath" and features modern web design with custom CSS, Google Fonts, Font Awesome icons, and animated backgrounds using Three.js and Vanta.js.

## Key Files
- `Hello.html`: The main and only source file. Contains all HTML, CSS (in a `<style>` block), and JavaScript (via external CDN links).

## Architecture & Patterns
- **Single-file structure**: All markup and styles are in `Hello.html`. No separate JS or CSS files are present.
- **External dependencies**: Uses CDN links for Font Awesome, Google Fonts, Three.js, and Vanta.js for visual effects.
- **Custom CSS variables**: The design uses a set of CSS variables (see `:root` in the `<style>` block) for colors, gradients, and shadows.
- **No build system**: There is no build, test, or deployment automation. All changes are made directly to `Hello.html`.

## Developer Workflow
- **Edit directly**: Make all changes in `Hello.html`.
- **Preview**: Open `Hello.html` in a browser to view changes. No local server or build step is required.
- **No tests**: There are no automated tests or test frameworks.

## Conventions
- **CSS naming**: Uses BEM-like class names (e.g., `.container`, `.section`) and semantic HTML.
- **Responsiveness**: The CSS includes responsive design via `max-width` and `width: 90%` for containers.
- **Accessibility**: Standard HTML5 elements are used, but no explicit ARIA roles or accessibility scripts are present.

## Examples
- To add a new section, insert a `<section>` block in `Hello.html` and style it within the `<style>` tag.
- To add a new font or icon, update the relevant `<link>` or `<script>` tags in the `<head>`.

## Integration Points
- **CDN dependencies**: All external libraries are loaded via CDN. Ensure links are up-to-date if upgrading dependencies.

---

For more details, see the top of `Hello.html` for meta tags and external resource links.
