//@types/aws-cognito-ops/index.d.ts

declare module 'aws-cognito-ops' {

    interface CognitoTokens {
        accessToken : string,
        refreshToken: string
    }

    export default class Cognito {
      static authDomain: string;
      static clientId: string;
      static scope: string;
      static callBackUrl: string;
      static poolData: {
        UserPoolId: string;
        ClientId: string;
      };
      static accessTokenExp: number;
      static refreshTokenExp: number;
      static defaultContextPath: string;
      static defaultCookieDomain: string;


      static get implicitGrantUrl(): string;
      static get authCodeGrantUrl(): string;

      static getAccessToken(req: Record<string, any>): string | undefined;
      static getAccessTokenCallback(callbackToken: string): string | false;

      static getTokens(authorizationCode: string): Promise<CognitoTokens>;
      static getTokenByAPI(username: string, password: string, needRefreshToken: boolean): Promise<CognitoTokens | string>;

      static setCookie(res: Record<string, any>, type: 'accessToken' | 'refreshToken', token: string, contextPath?: string, domain?: string): boolean;
      static checkToken(req: Record<string, any>, res: Record<string, any>): Promise<string | false>;
      static signOut(res: Record<string, any>, type: 'accessToken' | 'refreshToken', contextPath?: string, domain?: string): boolean;

      static getSession(object: object): Promise<Record<string, any>>;
      static globalSignOut(username: string): Promise<true | Record<string, any>>;
      static changePassword(username: string, oldPassword: string, newPassword: string): Promise<true | Record<string, any>>;

      static sendForgotPasswordCode(username: string): Promise<true | Record<string, any>>;
      static confirmPassword(username: string, newPassword: string, verificationCode: string): Promise<true | Record<string, any>>;
    }
  }
