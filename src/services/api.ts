type SingUpData = {
  name: string;
  email: string;
  password: string;
};

type AuthResponse = {
  email: string;
  name: string;
  token: string;
  refreshToken: string;
};
