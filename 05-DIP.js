class MySQLConnection {
    connect() {
        // AQUÍ iría el código para conectar a la base de datos MySQL
    }
}

class PasswordReminder {
    constructor() {
        this.dbConnection = new MySQLConnection();
    }
}

// Esta manera de definir la clase PasswordReminder está obligada a que la conexión sea con MySQL. Si queremos cambiar en un futuro a otra base de datos tendremos un problema. Estamos violando el principio de inversión de dependencias.

// -----------------------------------
// Refactorización de PasswordReminder
// -----------------------------------

class MySQLConnection {
    connect() {
        // AQUÍ iría el código para conectar a la base de datos MySQL
    }
}

class PostgreSQLConnection {
    connect() {
        // AQUÍ iría el código para conectar a la base de datos PostgreSQL
    }
}

// Agregamos al constructor un argumento para evitar esa dependencia
class PasswordReminder {
    constructor(dbConnection) {
        this.dbConnection = dbConnection;
    }
}