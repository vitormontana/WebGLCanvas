
# WebGL Canvas

Carregue shaders no canvas do HTML de forma simples!


## Instalação

Importe o código Javascript no seu projeto


```bash
<script type="text/javascript" src="https://vitormontana.github.io/WebGLCanvas/source/webglcanvas.js"></script>
```
(Ou baixe o arquivo e coloque na pasta do seu projeto)
Após adicione um elemento canvas com o link para o arquivo do shaders (pode ser externo ou local). Use os atributos de width e height para definir o tamanho da viewport

```
<canvas class="glslCanvas" data-fragment-url="shaders.frag" width="500" height="500"></canvas>
```
    
## Exemplos

Exemplo com link para o shaders:
```
<script type="text/javascript" src="https://vitormontana.github.io/WebGLCanvas/source/webglcanvas.js"></script>

<canvas class="glslCanvas" data-fragment-url="https://raw.githubusercontent.com/vitormontana/GLSL_Dance_of_Spheres/refs/heads/main/main.frag" width="500" height="500"></canvas>
```



## Uniformes

A lib já vem com algumas `uniform` por padrão, são elas:
`u_time` para o tempo, `u_mouse` para o mouse, e `u_resolution` para a viewport. No futuro pretendo adicionar suporte para as uniforms de outras implementações e mais uniforms.


## Licença

BSD. Também conhecida como "faça o que quiser, só não me encha o saco"


## Roadmap

- Disponibilizar no NPM ou JsDelivr



## Screenshots

![App Screenshot](https://i.ibb.co/Rvp0kqN/screenshot.png)

