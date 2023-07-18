export type ReturedHeaders = { [key: string]: string };

export const getHeadersObject = (reqHeaders: any): ReturedHeaders => {
  const header: ReturedHeaders = {};
  for (const pair of reqHeaders) {
    header[pair[0]] = pair[1];
  }

  return header;
};
