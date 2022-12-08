// eslint-disable-next-line import/no-cycle
import { serverSideClient } from "../apollo/apolloClient";
import { REFRESH_ATOKEN_MUTATION } from "../queries/auth";
import { parseCookies, setCookie } from "nookies";
import { CookiesName } from "./values";

export const getAccessToken = (context: any) => {
  const cookies = parseCookies(context);
  const accessToken = cookies[CookiesName.accessToken] || "";
  return accessToken;
};

export const getRefreshToken = (context: any) => {
  const cookies = parseCookies(context);
  const refreshToken = cookies[CookiesName.refreshToken] || "";
  return refreshToken;
};

export const setAccessToken = (token: string) => {
  setCookie(null, CookiesName.accessToken, token, {
    maxAge: 60 * 60,
    path: "/",
  });
};

export const setRefreshToken = (token: string) => {
  setCookie(null, CookiesName.refreshToken, token, {
    maxAge: 60 * 60 * 24 * 15,
    path: "/",
  });
};

export const getUpdatedToken = async (refreshToken: string) => {
  try {
    const { data } = await serverSideClient.mutate({
      mutation: REFRESH_ATOKEN_MUTATION,
      context: {
        headers: {
          "R-TOKEN": refreshToken,
        },
      },
    });
    const updatedToken = data.getATokenByRToken;
    if (updatedToken) {
      setAccessToken(updatedToken);
    }
    return data.updatedToken || "";
  } catch {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
};
