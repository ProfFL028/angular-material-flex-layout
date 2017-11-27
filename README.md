This is an angular project learned from coursera(full-stack web development):
### install nodejs
### swap to taobao registry
```
npm install -g cnpm --registry=https://registry.npm.taobao.org
```
### install angular-cli
```
cnpm install --save @angular/cli
// set ng using cnpm install of npm 
ng set --global packageManager=cnpm
```
### install project
```
ng new conFusion -dir=<The path of your Angular folder>/conFusion --style=scss
cnpm install
```
### install material
```
cnpm install --save @angular/material @angular/cdk
cnpm install --save @angular/animations
cnpm install --save hammerjs
```
### include material modules in app.module.ts
```
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';
import {MatXXXModule} form '@angular/material';
...
@NgModule({
  ...
  imports: [BrowserAnimationsModule],
  ...
})
```
### include material css in style.scss
```
@import "~@angular/material/prebuilt-themes/indigo-pink.css";
```
### install material icons
```
cnpm install --save material-design-icons
```
### add following code to style.scss
```
@font-face {
  font-family: 'Material Icons';
  font-style: normal;
  font-weight: 400;
  src: url(../node_modules/material-design-icons/iconfont/MaterialIcons-Regular.woff2) format('woff2');
}

.material-icons {
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: 'liga';
  -webkit-font-smoothing: antialiased;
}
```
### include MatIconModule in app.module.ts
```
import { MatIconModule } from '@angular/material/icon';
```
