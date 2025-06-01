// const data = undefined; Working!
// const data = null; Sort of working!
// const data = 10; Working!
// const data = NaN; Problems checking if NaN. Was trying to use isNaN but gave negative results.
// const data = 'string'; Working!
// const data = true; Working!
// const data = () => {}; Function working!
// const data = new Object(); Working!
const data = new Array(); //Working!

let type = typeof data;

//Null handler
if (data === null) {
  type = null;
}

//Array handler
if (Array.isArray(data)) {
  type = 'array';
}

switch (type) {
  case 'undefined':
    console.log('undefined');
    break;

  case null:
    console.log('null');
    break;

  case 'number':
    console.log('number');
    break;

  case NaN:
    console.log('not a number');
    break;

  case 'string':
    console.log('string');
    break;

  case 'boolean':
    console.log('boolean');
    break;

  case 'function':
    console.log('function');
    break;

  case 'object':
    console.log('object');
    break;

  case 'array':
    console.log('array');
    break;

  default:
    console.log('I have no idea!');
}
