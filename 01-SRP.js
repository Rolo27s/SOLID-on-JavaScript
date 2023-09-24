/* Esta función tiene dos responsabilidades:
    - Calcular el salario
    - Devolver un reporte
    
Aunque sea simple, deberíamos dividir las tareas para que sea única */
function calculateSalary (employee) {
    const salary = employee.hoursWorked * employee.payPerHour;

    const report = `
        Name : ${employee.name}
        Hours worked: ${employee.hoursWorked}
        Pay per hour: ${employee.payPerHour}
        Total salary: ${salary}
    `;

    console.log(report);

    return salary;
}

// ---------------------------------------------------
/* La refactorización correcta sería de esta manera */
// ---------------------------------------------------

// Función que se encarga de calcular el salario
function calculateSalary(employee) {
    return employee.hoursWorked * employee.payPerHour;
}

// Función que se encarga de generar el reporte
function generateReport (employee, salary) {
    const report = `
        Name : ${employee.name}
        Hours worked: ${employee.hoursWorked}
        Pay per hour: ${employee.payPerHour}
        Total salary: ${salary}
    `;

    console.log(report);
}