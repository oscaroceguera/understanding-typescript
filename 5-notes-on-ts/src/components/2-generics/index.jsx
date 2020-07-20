function isDefinedNumber(a: number): boolean {
  return a != null || a !== undefined;
}

function isDefinedString(a: string): boolean {
  return a !== null || a !== undefined;
}

function isDefined<Type>(a: Type): boolean {
  return a !== null || a !== undefined;
}

function of<Type>(a: Type) : Type[] {
  return [a]
}

const toNumbers = of(1) // const toNumbers: number[]
const toString = of('Test of') // const toStrng: string[]

const toNumbers2 = of<number>(1) // const toNumber: number[]
const toString2 = of<string>('Algo') // const toString: string[]

// used any
function of2(a: any): any {
  if(a.length !== undefined){
    return a;
  }
  return a;
}


function of3<Type>(a: Type): Type[] {
  if(a.length !== undefined){
    return a
  }
  return [a]
}

function of4<Type>(a: Type | Type[]) : Type[] {
  if(Array.isArray(a)){
    return a
  }
  return [a]
}

const a = of4(1) // const a: number[]
const b = of4([1]) // const b: number[]


class GenericClass<Type> {
  of = (a: Type | Type[]): Type[] => {
    if(Array.isArray(a)){
      return a
    }
    return [a]
  }
}

const genericClass = new GenericClass<number>()
const a = genericClass.of(1) // const a: nummber[]
const b = genericClass.of("1") // error!
const c = genericClass.of([1]) // const c: nummber[]