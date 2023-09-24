# Principios S.O.L.I.D.
* Single Responsibility
* Open / Close
* Liskov Substitution
* Interface Segregation
* Dependency Inversion

<br>
<b>By Robert C. Martin</b>
<br>

* Clean code (Código limpio)
* Clean coder (El limpiador de código)

## Single Responsibility principle
El **Principio de responsabilidad única** sostiene que una clase debe tener una sola razón para cambiar. Esto implica que debe tener solo una tarea o responsabilidad

### Mejora el código en:
1. Comprensión
2. Mantenimiento
3. Modificaciones

## Open / Closed principle
El **Principio de Abierto/Cerrado** sostiene que las entidades de software, como clases, módulos y funciones, deben estar abiertas para su extensión, pero cerradas para su modificación.

La estructura debe ser sólida, pero sus complementos adaptables.

## Liskov Substitution principle
El **Principio de sustitución de Liskov** dice que las subclases deben ser sustituibles por sus clases base, es decir, los objetos de una clase deben poder ser reemplazados por los objetos de una subclase sin afectar a la corrección del programa

## Interface Segregation
El **Principio de segregación de la interfaz** establece que ninguna clase debería ser forzada a implementar interfaces o métodos que no va a utilizar

Otra forma de entenderlo es pensar en una navaja suiza. Esta bien para ir de camping y resolver pequeños problemas, pero en condiciones ideales querríamos disponer de cada herramienta concreta para un uso concreto.

## Dependency Inversion principle
Este **Principio de inversión de dependencia** establece que los módulos de alto nivel no deben depender de módulos de bajo nivel.

Ambos módulos deben depender de abstracciones que a su vez no deben depender de los detalles. Los detalles deben depender de las abstracciones.