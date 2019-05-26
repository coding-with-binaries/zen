export interface AuthPayload {
  email: string;
  password: string;
}

export interface AuthResponse {
  accessToken: string;
}

export interface AuthUser {
  zenId: number;
  firstName: string;
  lastName: string;
  email: string;
}

export interface Auth {
  validating: boolean;
  failed: {
    status: boolean;
    message?: string;
  };
  authUser: AuthUser | null;
}
