import {
  NbAuthOptions,
  NbPasswordAuthStrategy,
  NbAuthStrategies,
  NbAuthSocialLink,
  NbAuthOAuth2JWTToken,
} from "@nebular/auth";

const nbAuthStrategies: NbAuthStrategies = [
  NbPasswordAuthStrategy.setup({
    name: "local",
    baseEndpoint: "",
    token: {
      class: NbAuthOAuth2JWTToken,
      key: "token",
    },
    errors: {
      key: "message",
    },
    login: {
      endpoint: "/api/auth/login",
      defaultErrors: [],
    },
    logout: {
      endpoint: "/api/auth/logout",
    },
    register: {
      endpoint: "/api/auth/register",
      defaultErrors: [],
    },
    refreshToken: {
      endpoint: "/api/auth/refresh_token",
      redirect: {
        success: null,
        failure: null,
      },
      defaultErrors: ["Something went wrong with token, please try again."],
      defaultMessages: ["Your token has been successfully refreshed."],
    },

    // ,requestPass: {
    //   endpoint: '/auth/request-pass',
    //   method: 'post',
    // },
    // resetPass: {
    //   endpoint: '/auth/reset-pass',
    //   method: 'post',
    // },
  }),
];

const socialLinks: NbAuthSocialLink[] = [
  {
    // link: "",
    url: "/api/auth/google",
    // target:"",
    title: "google",
    icon: "google",
  },
];

const nbAuthForms: any = {
  login: {
    redirectDelay: 500, // delay before redirect after a successful login, while success message is shown to the user
    strategy: "local", // strategy id key.
    rememberMe: true, // whether to show or not the `rememberMe` checkbox
    showMessages: {
      // show/not show success/error messages
      success: true,
      error: true,
    },
    socialLinks, // social links at the bottom of a page
  },
  register: {
    redirectDelay: 500,
    strategy: "local",
    showMessages: {
      success: true,
      error: true,
    },
    terms: true,
    socialLinks,
  },
  requestPassword: {
    redirectDelay: 500,
    strategy: "local",
    showMessages: {
      success: true,
      error: true,
    },
    socialLinks,
  },
  resetPassword: {
    redirectDelay: 500,
    strategy: "local",
    showMessages: {
      success: true,
      error: true,
    },
    socialLinks,
  },
  logout: {
    redirectDelay: 500,
    strategy: "local",
  },
  validation: {
    username: {
      required: true,
      regexp: /^.{4,12}$/,
      minLength: 4,
      maxLength: 12,
    },
    password: {
      required: true,
      regexp: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/,
      minLength: 8,
      maxLength: 16,
    },
    email: {
      required: true,
      regexp: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/,
      mixLength: 5,
      maxLength: 25,
    },
    familyName: {
      required: true,
      regexp: /^[a-zA-Z]{2,12}$/,
      minLength: 2,
      maxLength: 12,
    },
    givenName: {
      required: true,
      regexp: /^[a-zA-Z]{2,12}$/,
      minLength: 2,
      maxLength: 12,
    },
  },
};

export const nbAuthOptions: NbAuthOptions = {
  strategies: nbAuthStrategies,
  forms: nbAuthForms,
};
