export const generateHash = (urlFormat: string, urlInstance: string) => {
  urlFormat = urlFormat.trim();
  urlInstance = urlInstance.trim();
  if (!urlFormat || !urlInstance) {
    console.error('url format and url instance are invalid.');
    return null;
  }
  // Separate the parts and remove any empty string
  const splittedUrlFormat = urlFormat.split('/').filter((item) => item !== '');
  const splittedUrlInstance = urlInstance
    .split('/')
    .filter((item) => item !== '');

  if (splittedUrlFormat.length !== splittedUrlInstance.length) {
    console.warn('strings should have the same format');
    return null;
  }

  const hash = {};

  splittedUrlFormat.forEach((part, index) => {
    if (part.startsWith(':')) {
      if (splittedUrlInstance[index].includes('?')) {
        const [lastPart, queryParamsString] =
          splittedUrlInstance[index].split('?');
        if (lastPart) {
          const key = part.substring(1);
          hash[key] = lastPart;
        }

        if (queryParamsString) {
          if (queryParamsString.includes('&')) {
            const queryParams = queryParamsString.split('&');
            queryParams.forEach((param) => {
              const [key, value] = param.split('=');
              hash[key] = value;
            });
          } else {
            const [key, value] = queryParamsString.split('=');
            hash[key] = value;
          }
        }
      } else {
        const key = part.substring(1);
        hash[key] = splittedUrlInstance[index];
      }
    }
  });

  return hash;
};
