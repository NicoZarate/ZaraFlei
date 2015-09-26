Super Commenter

Este proyecto fue propuesto por los docentes Urbieta Matias y Firmenich Sergio, de la cátedra Orientacion a Objetos 2 
de la Facultad de Informática de la UNLP, como trabajo final para dicha cátedra.
Los desarrolladores somos Fleitas Martín y Zarate Nicolas.

La finalidad del proyecto es agregar la capacidad de comentar un producto de un determinado dominio que posea un 
catálogo de venta y no incluya esta funcionalidad, sin alterar en nada el código fuente del dominio. 
La motivación de agregar esta funcionalidad es testear si los clientes del sitio encuentran útil esta posibilidad,
y si a los propietarios les resulta conveniente obtener este feedback por parte de sus clientes. También el hecho
de considerar, en base a la utilización de la misma, el incluir o no esta funcionalidad como parte propia del sistema.
Entonces, hasta efectuar todas las pruebas necesarias para decidir si es útil o no, los propietarios se ahorrarían
el costo de realizar cambios en su código fuente hasta estar completamente seguros de que les va a ser reedituable.

Para comenzar hemos utilizado Tampermonkey en Chrome/Chromium para añadir un script de usuario (javascript) en el
dominio.
Hemos instalado Node.js y npm en nuestro host (con apt-get install nodejs npm), agregamos Express como framework, 
que entre otras cosas crea la estructura del proyecto con el comando "express" dentro del directorio del mismo y utiliza
Jade como motor de plantillas para facilitar la escritura de html.
Con esto logramos implementar la comunicación cliente/servidor propia de una aplicación web estandar.
