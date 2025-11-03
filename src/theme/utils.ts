/** Check memorization Of Some array properties */
export const checkMemoOfSomeArrProps = (
  prevProps: { [key: string]: any },
  nextProps: { [key: string]: any },
  propsArr: string[]
): boolean => {
  return !propsArr.some((x) => !(prevProps[x] === nextProps[x]));
};

export const _objectWithoutProperties = <IObject>(
  obj: IObject,
  keys: string[]
) => {
  const target: { [key: string]: any } | IObject = {};
  for (let i in obj) {
    if (keys.indexOf(i) >= 0) {
      continue;
    }
    if (!Object.prototype.hasOwnProperty.call(obj, i)) {
      continue;
    }
    target[i] = obj[i];
  }
  return target;
};

export const delay = (ms = 1000) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const extractFirstTouchedErrorFormik = (
  errors: object,
  touched: object
) => {
  const errorObjectEntries = Object.entries(errors);
  const touchedObjectKeys = Object.keys(touched);

  let currentError;
  if (errorObjectEntries.length + touchedObjectKeys.length > 0) {
    currentError = errorObjectEntries.find((element) => {
      return touchedObjectKeys.find((elem) => {
        return elem === element[0];
      });
    });
  }

  if (Array.isArray(currentError) && currentError.length > 0) {
    return {
      inputName: currentError[0],
      errorMessage: currentError[1],
    };
  } else {
    return {
      inputName: "",
      errorMessage: "",
    };
  }
};
