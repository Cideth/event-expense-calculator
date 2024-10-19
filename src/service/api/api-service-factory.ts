// is mocking, is server component
// if mocking true = mockingServer
// if server true = server axiosinstance
export type serviceFactoryType = {
  isMocking: boolean;
  isServer: boolean | undefined;
};
export function getApiServiceFactory({
  isMocking = false,
  isServer,
}: serviceFactoryType) {
  if (isServer === undefined) {
    console.error("");
  }
}

/*

서버일 경우에는 AxiosInstance에서 baseURL이 달라져야함.
interceptor도 요청에 따라서 달라지긴 해야함.
header에서 받은 토큰을 전달하는 방식으로 가야할것 같은데





axios instance만 주입받으면 될것같은데


*/
