# DaBubble

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


# Instructions: 
## 1. Adjust the Angular build budgets in `angular.json`:

Open the `angular.json` file and modify the `"budgets"` section inside the `"production"` configuration like this:

```json
"configurations": {
  "production": {
    "budgets": [
      {
        "type": "initial",
        "maximumWarning": "500kb",
        "maximumError": "1mb"
      },
      {
        "type": "anyComponentStyle",
        "maximumWarning": "8kb",   // NEW
        "maximumError": "12kb"     // NEW
      }
    ]
  }
}
```
This prevents Angular from throwing errors or warnings when using customized SCSS themes and component-specific stylesheets.

Check Angular version in package.json:

Make sure your project uses Angular v17.x.

## 2. Your dependencies section in package.json should look like this:

```json
"dependencies": {
  "@angular/animations": "^17.3.0",
  "@angular/common": "^17.3.0",
  "@angular/compiler": "^17.3.0",
  "@angular/core": "^17.3.0",
  "@angular/forms": "^17.3.0",
  "@angular/platform-browser": "^17.3.0",
  "@angular/platform-browser-dynamic": "^17.3.0",
  "@angular/router": "^17.3.0",
  "rxjs": "~7.8.0",
  "tslib": "^2.3.0",
  "zone.js": "~0.14.3"
}
```
If you're unsure, run ng version in your terminal to verify all installed Angular packages.

## 3. Typography:

The DA-Bubble UI uses two fonts:

- **Nunito** – for all primary UI elements (headings, body text, buttons)
- **Figtree** – for secondary elements (helper text, legal notices)

⚠️ Note: Although some text samples in the design file use **Inter**, these appear to be placeholder text and should not be used in the actual application.

---

Recommended hierarchy (can be adapted in SCSS):

| Element       | Font     | Size  | Weight | Line-height |
|---------------|----------|-------|--------|-------------|
| H1            | Nunito   | 46px  | 400    | 120%        |
| H2            | Nunito   | 38px  | 400    | 120%        |
| H3            | Nunito   | 32px  | 400    | 120%        |
| Body Large    | Nunito   | 22px  | 400    | 120%        |
| Body Medium   | Nunito   | 18px  | 400    | 120%        |
| Body Small    | Nunito   | 15px  | 400    | 120%        |
| Caption       | Nunito   | 12px  | 400    | 120%        |
| Legal/Helper  | Figtree  | 12px  | 400    | 120%        |



## 4. Colors

### 🎨 Color Scheme

| Color Name       | Hex Code  | Role            |
|------------------|-----------|-----------------|
| Purple 1         | #444DF2   | Primary color   |
| Purple 2         | #797EF3   | —               |
| Purple 3         | #535AF1   | Secondary color |
| Light Purple     | #ADB0D9   | Lines           |
| Background       | #ECEEFE   | Background color |
| White            | #FFFFFF   | Text on dark background |
| Text Gray        | #686868   | Regular text    |
| Black            | #000000   | Headlines, labels |
| Error Pink       | #ED1E79   | Warning color   |
| Online Green     | #92C83E   | Success color   |

All colors are defined via custom Angular Material palettes in `src/scss-styles/custom-colors.scss`.  
They are used throughout the application via a centralized SCSS design system and accessible in all component `.scss` files.

---

### 📌 Usage in component SCSS

To reference a specific color in a component, use the following syntax:

```scss
@use '@angular/material' as mat;
@use '../scss-styles/index' as style; // Adjust the relative path if necessary

h1 {
  color: mat.get-color-from-palette(style.$warn-pink-palette, 500);
}
```

You can replace 500 with another shade (50, 100, ..., 900) depending on your use case.
You can also replace `style.$warn-pink-palette` with any other custom color palette defined in the file `_custom-colors.scss`, located in the `scss-styles/` folder.

For contrast text colors, use:
```scss
color: mat.get-contrast-color-from-palette(style.$warn-pink-palette, 500);
```

