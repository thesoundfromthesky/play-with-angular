export const Bind = () => (
  target,
  name: string,
  descriptor: PropertyDescriptor
) => {

  const original = descriptor.value;
  if (typeof original === "function") {
    descriptor.value = function (...args) {
      const result = original.apply(this, args);
      console.log(name)
      console.log(this)
      return result
    };
  }
  return descriptor;
};
