import R from "ramda";

export const isURL = (str: string) => {
  try {
    const myURL = new URL(str);
    if (myURL.href) {
      return true;
    } else return false;
  } catch {
    return false;
  }
};

export const isValidateURL = (url: any): boolean => {
  if (Number(url) == url || R.isNil(url)) {
    return false;
  }

  if (!url.toString().includes(".")) {
    return false;
  }

  const sanitize = R.compose(R.toLower, R.trim);

  const httpsURL = (url: string) => {
    if (!url.includes("http")) {
      return `https://${url}`;
    }
    return url;
  };

  const test = R.pipe(sanitize, httpsURL, isURL);
  const isValid = R.tryCatch(test, () => false);
  return isValid(url);
};
