class Product {
    getDetails() {
        // getDetails implementation
    }

    saveToDb() {
        // saveToDb implementation
    }

    displayInFrontend() {
        // displayInFrontend implementation
    }
}

class DigitalProduct extends Product {
    // The DigitalProduct inherits all methods from Product.

    /* 
    Si nuestra subclase DigitalProduct no necesitara algún método de su clase padre Product, entraríamos en violación de este principio.
    La refactorización deberá ser relacionarlo con otra clase, generar una clase nueva distinta o modificar los métodos de la clase padre y dividir esa clase padre en dos con sus métodos mejor diversificados.

    En este ejemplo DigitalProduct no necesitaría del método saveToDb()
    */
}

// ---------------------------------
// Refactorización de Product
// ---------------------------------

class Product {
    getDetails() {
        // getDetails implementation
    }

    displayInFrontend() {
        // displayInFrontend implementation
    }
}

class PhysicalProduct extends Product {
        saveToDb() {
        // saveToDb implementation
    }
}

class DigitalProduct extends Product {
    // The DigitalProduct inherits all methods from Product.
}