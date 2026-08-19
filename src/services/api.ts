type SignUpData = {
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

const baseURL = 'https://readjourney.b.goit.study/api';

export default async function signUp(data: SignUpData) {
  let response = await fetch(`${baseURL}/users/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  let result = await response.json();

  return result;
}
