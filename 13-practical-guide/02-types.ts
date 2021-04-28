/**
 * literal types: string, mumber, boolean
 * enum: es un conjunto restringido de valores.
 * any: indica que una variable/parametro puede ser cualquier cosa, omitienddo efectivamente el sistema de tipos.
 * unknow: es la contra parte de tipo seguro de any.
 * void: indica que una funcion no retornara nada.
 * never: indica que una función siempre lanza una excepción o nunca finaliza su ejecución.
 */

// Esta funcion no aceptará un numero, pero solo 3 o 4
declare function processNumber(s: 3 | 4);

declare function processAnyNumber(n: number);

const n: number = 10;
const n2: 3 = 3;

processNumber(n);
processAnyNumber(n2);
