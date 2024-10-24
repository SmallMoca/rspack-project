export const log = (str) => {
  console.log(str);
};

export const mockFetch: <T>(data: T, timer?: number) => Promise<T> = async (
  data,
  timer = 1000,
) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, timer);
  });
};
