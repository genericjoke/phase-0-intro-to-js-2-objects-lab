// Write your solution in this file!
const employee = {
    name: "name",
    address: "address"
};
function updateEmployeeWithKeyAndValue(obj, key, value) {
    const emp = { ...obj };
    emp[key] = value;
    return emp;
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    obj[key] = value;
    return obj;
}

 function deleteFromEmployeeByKey(obj, key){
    const emp = {...obj};
    delete emp[key];
    return emp;
  }

function destructivelyDeleteFromEmployeeByKey(obj, key){
    delete obj[key];
    return obj;
 }