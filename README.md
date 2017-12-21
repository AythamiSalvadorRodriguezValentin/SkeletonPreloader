# SkeletonPreloader.js

SkeletonPreloader.js is a fantastic and simple library where you can make a skeleton quickly and effectively for your website providing a fundamental aesthetics for the user.

<a href="https://gyazo.com/bd78fe34b5a9214709e899353dd8b1b9"><img align="center" src="https://i.gyazo.com/bd78fe34b5a9214709e899353dd8b1b9.gif" alt="https://gyazo.com/bd78fe34b5a9214709e899353dd8b1b9" width="424"/></a><br>

## USAGE

[Here](https://aythamisalvadorrodriguezvalentin.github.io/SkeletonPreloader/) is an example of how to use them.

| ﻿Classes | |
|--------------------|--------------------|
| `pr-on` | It will show you the elements during the preload. |
| `pr-off` | It will show you the elements after the preload. |
| `pr-container` | With this class we will define a container to adjust the minimum dimensions of the elements. |


We can also define the type of structure we want in the preload. 

| ﻿Classes | |
|--------------------|--------------------|
| `pr-menu-v` | Vertical Menu. |
| `pr-menu-h` | Horizontal Menu. |
| `pr-user` | User Panel |
| `pr-features` | Feature Panel |
| `pr-placeholder` | Image |

To use it you have to add the class "pr-off" to the element you want to display after preloading, and "pr-on" to the element you want to run during preloading in addition to the class of the type of structure you want toshow. 
And put a div container of everything with the class "pr-container". 

Example: 

```
<div class="pr-container">
     <div class="pr-off">Esto se va a mostrar cuando carge</div>

     <div class="pr-on pr-user">Esto se va a mostrar durante la carga</div>
   </div>
```