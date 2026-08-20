export type SignUpData = {
  name: string;
  email: string;
  password: string;
};

export type AuthResponse = {
  email: string;
  name: string;
  token: string;
  refreshToken: string;
};

const baseURL = 'https://readjourney.b.goit.study/api';

export default async function signUp(data: SignUpData) {
  const response = await fetch(`${baseURL}/users/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  const result = (await response.json()) as AuthResponse;

  return result;
}
