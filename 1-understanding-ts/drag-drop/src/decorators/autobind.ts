  // autobind decorator
export function autoBind(_: any, _2: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    get() {
      const bounFn = originalMethod.bind(this);
      return bounFn;
    }
  }
  return adjDescriptor;
}