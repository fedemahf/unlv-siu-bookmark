# unlv-siu-bookmark

unlv-siu-bookmark es una simple página estática que facilita el acceso al SIU Guaraní de la UNLVirtual, removiendo completamente la necesidad de acceder al Campus Virtual.

## Instrucciones

Clonar este repositorio.

Iniciar sesión en el [Campus Virtual](https://www.unlvirtual.edu.ar/campusvirtual/admin/).

Abrir las herramientas de desarrollador (por lo general con F12, o también CTRL + SHIFT + I).

Acceder a la pestaña "Consola" y pegar el siguiente código el cual imprimirá las credenciales del usuario de SIU.

```JS
const getHtmlDocument = async () => {
  const response = await fetch("https://www.unlvirtual.edu.ar:443/campusvirtual/JSPs/home/guarani.jsp?url=https://servicios.unl.edu.ar/fich_cemed&compartida=false&id_perfil=8");
  if (response.status !== 302) {
    throw `Error ${response.status} - asegúrate de haber iniciado sesión en el campus virtual`;
  }
  return await response.text();
}

const printUserAndPassword = async () => {
  const htmlDocument = await getHtmlDocument();
  const domParser = new DOMParser();
  const htmlDoc = domParser.parseFromString(htmlDocument, 'text/html');
  const user = htmlDoc.forms[0].fUsuario.value;
  const password = htmlDoc.forms[0].fClave.value;
  console.log("user:", user);
  console.log("password:", password);
}

printUserAndPassword();
```

Copiar las credenciales (`user` y `password`), editar el archivo `main.js`, reemplazar `your_user` por el user y `your_password` por el password.

Eso es todo. Ahora cada vez que abras el archivo `index.html` en cualquier navegador, se iniciará sesión en el SIU de UNLVirtual.
