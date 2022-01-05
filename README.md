# FoxBoxUI 🦊

[![npm version](https://badge.fury.io/js/@fo-ox%2Ffox-box-ui.svg)](https://badge.fury.io/js/@fo-ox%2Ffox-box-ui)

UI KIT 
*/ develop in progress */ 🔋

## NPM Install: 

Run `npm install @fo-ox/fox-box-ui`

## Install fonts:

The library uses the `IMB Plex Sans` font family. To include a font in your angular project,
add `@import "~node_modules/fox-box-ui/assets/fonts/font-face";` in your root style file

## Components:
### 🟣 [FoxButton]

  Use `fox-button` selector on <button> or <a> tags.
  
  #### Style:
  
  | class | | `_secondary` | `_link` | `_outline` |
  | ----- | - | -            | -       | -          |
  | default  | ![primary](http://foto.fo-ox.site/pr.png) | ![secondary](http://foto.fo-ox.site/sec.png) | ![link](http://foto.fo-ox.site/li.png) | ![outline](http://foto.fo-ox.site/ou.png) |
  | `_disable` | ![primary](http://foto.fo-ox.site/pr_d.png) | ![secondary](http://foto.fo-ox.site/sec_d.png) | ![link](http://foto.fo-ox.site/li_d.png) | ![outline](http://foto.fo-ox.site/ou_d.png) |
  
  #### @Inputs:
  - loading: boolean
  - loaderType: 'circle' | 'chart';
  - loaderColor: string (html5 colors + hex)
  
  #### @Outputs:
  - onClick: { disable: boolean; loading: boolean } - *emit on click & tap*
  - onSubmit: void - *emit on click & tap only button enable and not load*
  
#### Example
  
  ```html
  <button fox-button 
          class="_outline" 
          [class._disable]="disable" 
          [loading]="loading" 
          (onClick)="click($event)" 
          (onSubmit)="submit()"
  >
    <h3>Your template</h3>
  </button>
  ```
  
#### Customize
  edit space, font, color and other styles, via simple class 
  
  ![secondary](http://foto.fo-ox.site/cust.png)
  
  ```html
  <button fox-button class="_secondary _customize">
    <h3>Custom button styles</h3>
  </button>
  ```
  
  ```less
  ._customize {
    color: olive;
    background: bisque;
    border-radius: 10px;
  
    &:hover {
      color: sandybrown;
    }
  }
  ```

### 🟣 [FoxLoader]
  
  Use `fox-loader` selector
  
  #### Style:
  
  | type | `circle` | `chart` |
  | ----- | -       | -       | 
  | loader | ![circle](http://foto.fo-ox.site/circle.png) | ![chart](http://foto.fo-ox.site/chart.png) | 
  
  #### @Inputs:
  - show: boolean
  - type: 'circle' | 'chart';
  - color: string (html5 colors + hex)
  - size: string ('10px', '100vh', '10%')
  
  *Loader is proportionally stretched to full width of the parent container provided to it. If you want to fix the size - set size parameter to it*

#### Example
  
   ```html
  <fox-loader [size]="'10px'" [type]="'chart'" [color]="'yellow'" [show]="loading"></fox-loader>
  ```

You can also add color palettes, variables and mixins used in the library.
  
  ----
   *🌼 Works? Do not touch ;)  🌼*
