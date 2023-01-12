const employee = {name: "John", streetAddress: "125 chambers"}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {...employee, ...{ [key]: value } }
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    // clone before deleting to avoid destroying original employee object
    const newObj = { ...employee }
    delete newObj[key];
    return newObj;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}

