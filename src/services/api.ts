export type SignUpData = {
  name: string;
  email: string;
  password: string;
};

export type SignInData = {
  email: string;
  password: string;
};

export type SignOutData = {
  message: string;
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
  if (!response.ok) {
    const error = await response.json();
    throw Error(error.message);
  }
  const result = (await response.json()) as AuthResponse;

  return result;
}

export async function signIn(data: SignInData) {
  const response = await fetch(`${baseURL}/users/signin`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    const error = await response.json();
    throw Error(error.message);
  }
  const result = (await response.json()) as AuthResponse;

  return result;
}

export async function signOut() {
  const token = localStorage.getItem('token');

  const response = await fetch(`${baseURL}/users/signout`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!response.ok) {
    const error = await response.json();
    throw Error(error.message);
  }

  const result = (await response.json()) as SignOutData;
  return result;
}
