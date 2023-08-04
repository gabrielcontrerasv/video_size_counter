# Video Size Counter

El proyecto **Video Size Counter** es una herramienta que permite calcular el espacio utilizado por los videos de una carpeta específica en Vimeo, utilizando el API proporcionado por Vimeo.

## Funcionalidad

La funcionalidad principal del proyecto es obtener los tamaños de los videos almacenados en una carpeta de Vimeo y calcular el espacio total utilizado por estos videos. La herramienta utiliza el API de Vimeo para acceder a la información de los videos, incluyendo el tamaño de cada video, y luego realiza los cálculos necesarios para obtener el tamaño total en gigabytes (GB).

## Requisitos

Para poder utilizar esta herramienta, se necesitan los siguientes requisitos:

1. **Access Token de Vimeo**: Se requiere un Access Token válido proporcionado por Vimeo para autenticar las solicitudes al API.

2. **ID del Proyecto**: Se debe proporcionar el ID del proyecto de Vimeo que contiene los videos cuyo espacio se desea calcular.
3. **ID del usuario** : Se necesita el ID del usuario con el objetivo de filtrar con base a dicho usuario

## Instrucciones de Uso

1. Clona el repositorio de Video Size Counter en tu máquina local.

2. Instala las dependencias del proyecto utilizando el gestor de paquetes yarn o npm install.
3. una vez ejecutadas las depencias ejecuta yarn dev o npm run dev para realizar la ejecucion.
4. Finalmente vas a obtener un resultado en la consola con los valores convertidos a bytes,Kilobytes,Megabytes y Gigabytes

## Notas importantes

Esta herramienta está diseñada para funcionar con cuentas y proyectos de Vimeo válidos. Asegúrate de tener los permisos adecuados para acceder a la información de los videos en el proyecto proporcionado.

Si encuentras algún problema o error durante el uso de la herramienta, por favor, verifica que los requisitos se cumplan correctamente y que los valores de configuración sean válidos.

Para más información sobre el API de Vimeo y las funcionalidades que ofrece, consulta la documentación oficial de Vimeo.

