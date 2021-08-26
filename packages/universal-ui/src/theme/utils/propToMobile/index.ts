function propToMobile<T>(props: any): T {
  const result = Object.keys(props).reduce((acc, item) => {
    const currentProp = props[item];
    return {
      ...acc,
      [item]: Boolean(currentProp.xs) ? currentProp.xs : currentProp,
    };
  }, {} as T);
  return result;
}

export default propToMobile;
