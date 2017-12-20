# SkeletonPreloader.js

Preloader.js es una fantástica y simple librería donde podrás realizar un skeleton de manera rápida y efectiva para tu web aportando
una estética fundamental de cara al usuario.

## INSTALACIÓN
Esta librería no requiere de instalación previa.
Solo sigue los pasos de como usarla y listo :)

## USO
Para usar SkeletonPreLoader.js solo tienes que seguir los siguientes pasos:

1.- Enlazar dentro de tu ```<head>``` los link de javascript y de css de SkeletonPreloader.js:
                                    (imagen):  
2.-Añadir un pequeño script al final de tu index.html, como esta en la imágen.:
                                    (imagen):
Dentro de la etiqueta "opcional", puedes poner la acción que más te convenga, es decir, que puedes hacer cualquier: 
llamada desde ahí con el tiempo que quieras. Lo único esencial es la llamada a la clase("preload.finish()").:
| ﻿Clases | |
|--------------------|--------------------|
| `pr-on` |`Te mostrará los elementos durante el preload.` |
| `pr-off` |`Te mostrará los elementos después del preload.` |
| `pr-container` |`Con esta clase vamos a definir un contenedor para ajustar las medidas mínimas de los elementos.` |


También podemos definir el tipo de estructura que queremos en el preload.:
| ﻿Clases | |
|--------------------|--------------------|
| `pr-menu-v` |`Menu Vertical.` |
| `pr-menu-h` |`Menú Horizontal.` |
| `pr-text` |`Texto.` |
| `pr-input` |`Inputs.` |
| `pr-form` |`Formularios.` |
| `pr-user` |`Panel de usuario.` |
| `pr-option` |`Lista desordenada.` |
| `pr-features` |`Panel de características.` |
| `pr-placeholder` |`Imagenes ...` |

Para usarlo tienes que añadir la clase "pr-off" al elemento que quieras que se muestre despues de la precarga, y "pr-on" al: elemento que quieras que se ejecute durante la precarga además de la clase del tipo de estructura que quieres:
mostrar. Y poner un div contenedor de todo con la clase "pr-container".:

Ejemplo completo:

```<div class="pr-container">
   <div class="pr-off">Esto se va a mostrar cuando carge</div>
   <div class="pr-on pr-text">Esto se va a mostrar durante la carga</div>
</div>```

Aquí tienes un ejemplo de como usarlas: link landing-page.