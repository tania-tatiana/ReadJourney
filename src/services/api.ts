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

export type GetCurrentUser = {
  _id: string;
  name: string;
  email: string;
  token: string;
  refreshToken: string;
};

export type AuthResponse = {
  email: string;
  name: string;
  token: string;
  refreshToken: string;
};

export type GetBook = {
  _id: string;
  title: string;
  author: string;
  imageUrl: string;
  totalPages: number;
  recommend: boolean;
};

export type GetBooksResponse = {
  results: GetBook[];
  totalPages: number;
  page: number;
  perPage: number;
};

export type GetBooksFilters = {
  title: string;
  author: string;
};

export type GetBooksParams = GetBooksFilters & {
  page: number;
  limit: number;
};

export type Status = 'unread' | 'in-progress' | 'done';

export type ReadingProgress = {
  _id: string;
  startPage: number;
  startReading: string;
  finishPage: number;
  finishReading: string;
  speed: number;
  status: string;
};

export type AddBookResponse = {
  _id: string;
  title: string;
  author: string;
  imageUrl: string;
  totalPages: number;
  status: Status;
  recommend: boolean;
  owner: string;
  progress: ReadingProgress[];
  createdAt: string;
  updatedAt: string;
};

export type LibraryBook = GetBook & {
  status: Status;
  owner: string;
  progress: ReadingProgress[];
};

export type ReadingBook = Omit<LibraryBook, 'recommend'> & {
  recommend?: boolean;
  timeLeftToRead?: {
    hours: number;
    minutes: number;
    seconds: number;
  };
};

export type LibraryBooks = LibraryBook[];

export type AddBookData = {
  title: string;
  author: string;
  totalPages: number | null;
};

export type AddLibraryBookResponse = {
  title: string;
  author: string;
  imageUrl: string | null;
  totalPages: number;
  status: Status;
  owner: string;
  _id: string;
  progress: ReadingProgress[];
};

const baseURL = 'https://readjourney.b.goit.study/api';

let refreshPromise: Promise<
  Pick<AuthResponse, 'token' | 'refreshToken'>
> | null = null;

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
  // const token = localStorage.getItem('token');

  // const response = await fetch(`${baseURL}/users/signout`, {
  //   method: 'POST',
  //   headers: { Authorization: `Bearer ${token}` },
  // });

  const response = await authorizedFetch(`${baseURL}/users/signout`, {
    method: 'POST',
  });

  if (!response.ok) {
    const error = await response.json();
    throw Error(error.message);
  }

  const result = (await response.json()) as SignOutData;
  return result;
}

export async function getCurrentUser() {
  // const token = localStorage.getItem('token');

  // const response = await fetch(`${baseURL}/users/current`, {
  //   method: 'GET',
  //   headers: { Authorization: `Bearer ${token}` },
  // });

  const response = await authorizedFetch(`${baseURL}/users/current`);

  if (!response.ok) {
    const error = await response.json();
    throw Error(error.message);
  }

  const result = (await response.json()) as GetCurrentUser;
  return result;
}

export async function authorizedFetch(
  url: string,
  options: RequestInit = {},
): Promise<Response> {
  const makeRequest = (token: string | null) => {
    const headers = new Headers(options.headers);
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }

    return fetch(url, { ...options, headers });
  };

  const token = localStorage.getItem('token');
  let response = await makeRequest(token);

  if (response.status !== 401) {
    return response;
  }

  if (!localStorage.getItem('refreshToken')) {
    return response;
  }

  try {
    if (!refreshPromise) {
      refreshPromise = refreshTokens().finally(() => {
        refreshPromise = null;
      });
    }
    const tokens = await refreshPromise;

    response = await makeRequest(tokens.token);
    return response;
  } catch {
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');

    throw new Error('Сесію завершено. Увійдіть у свій акаунт повторно.');
  }
}

export async function getBooks(data: GetBooksParams) {
  // const token = localStorage.getItem('token');

  const params = new URLSearchParams();

  if (data.title) {
    params.set('title', data.title);
  }
  if (data.author) {
    params.set('author', data.author);
  }

  params.set('page', data.page.toString());

  params.set('limit', data.limit.toString());

  // const response = await fetch(
  //   `${baseURL}/books/recommend?${params.toString()}`,
  //   {
  //     method: 'GET',
  //     headers: { Authorization: `Bearer ${token}` },
  //   },
  // );

  const response = await authorizedFetch(
    `${baseURL}/books/recommend?${params.toString()}`,
  );

  if (!response.ok) {
    const error = await response.json();
    throw Error(error.message);
  }

  const result = (await response.json()) as GetBooksResponse;
  return result;
}

export async function addBook(id: string) {
  // const token = localStorage.getItem('token');

  // const response = await fetch(`${baseURL}/books/add/${id}`, {
  //   method: 'POST',
  //   headers: { Authorization: `Bearer ${token}` },
  // });

  const response = await authorizedFetch(`${baseURL}/books/add/${id}`, {
    method: 'POST',
  });

  if (!response.ok) {
    const error = await response.json();
    throw Error(error.message);
  }

  const result = (await response.json()) as AddBookResponse;

  return result;
}

export async function getLibraryBooks(status?: Status) {
  // const token = localStorage.getItem('token');

  const params = new URLSearchParams();

  if (status) {
    params.set('status', status);
  }

  // const response = await fetch(
  //   `${baseURL}/books/own?${params.toString()}`,
  //   {
  //     method: 'GET',
  //     headers: { Authorization: `Bearer ${token}` },
  //   },
  // );

  const response = await authorizedFetch(
    `${baseURL}/books/own?${params.toString()}`,
  );

  if (!response.ok) {
    const error = await response.json();
    throw Error(error.message);
  }
  const result = (await response.json()) as LibraryBooks;
  return result;
}

export async function addLibraryBook(data: AddBookData) {
  // const token = localStorage.getItem('token');

  // const response = await fetch(`${baseURL}/books/add`, {
  //   method: 'POST',
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify(data),
  // });

  const response = await authorizedFetch(`${baseURL}/books/add`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const error = await response.json();
    throw Error(error.message);
  }

  const result = (await response.json()) as AddLibraryBookResponse;
  return result;
}

export async function deleteLibraryBook(id: string) {
  // const token = localStorage.getItem('token');

  // const response = await fetch(`${baseURL}/books/remove/${id}`, {
  //   method: 'DELETE',
  //   headers: { Authorization: `Bearer ${token}` },
  // });

  const response = await authorizedFetch(`${baseURL}/books/remove/${id}`);

  if (!response.ok) {
    const error = await response.json();
    throw Error(error.message);
  }

  return await response.json();
}

export async function startReading(
  id: string,
  page: number,
): Promise<LibraryBook> {
  // const token = localStorage.getItem('token');

  // const response = await authorizedFetch(`${baseURL}/books/reading/start`, {
  //   method: 'POST',
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({ id, page }),
  // });

  const response = await authorizedFetch(`${baseURL}/books/reading/start`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id, page }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw Error(error.message);
  }

  return await response.json();
}

export async function finishReading(
  id: string,
  page: number,
): Promise<LibraryBook> {
  // const token = localStorage.getItem('token');

  // const response = await authorizedFetch(`${baseURL}/books/reading/finish`, {
  //   method: 'POST',
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({ id, page }),
  // });

  const response = await authorizedFetch(`${baseURL}/books/reading/finish`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id, page }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw Error(error.message);
  }
  return await response.json();
}

export async function deleteReading(
  bookId: string,
  readingId: string,
): Promise<void> {
  // const token = localStorage.getItem('token');

  const params = new URLSearchParams({ bookId, readingId });

  // const response = await fetch(
  //   `${baseURL}/books/reading?${params.toString()}`,
  //   { method: 'DELETE', headers: { Authorization: `Bearer ${token}` } },
  // );

  const response = await authorizedFetch(
    `${baseURL}/books/reading?${params.toString()}`,
    { method: 'DELETE' },
  );

  if (!response.ok) {
    const error = await response.json();
    throw Error(error.message);
  }
}

export async function getBookById(id: string): Promise<ReadingBook> {
  // const token = localStorage.getItem('token');

  // const response = await authorizedFetch(`${baseURL}/books/${id}`, {
  //   method: 'GET',
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  // });

  const response = await authorizedFetch(`${baseURL}/books/${id}`);

  if (!response.ok) {
    const error = await response.json();
    throw Error(error.message);
  }

  const result = (await response.json()) as ReadingBook;
  return result;
}

export async function refreshTokens(): Promise<
  Pick<AuthResponse, 'token' | 'refreshToken'>
> {
  const refreshToken = localStorage.getItem('refreshToken');

  if (!refreshToken) {
    throw Error('Refresh token not found');
  }

  const response = await fetch(`${baseURL}/users/current/refresh`, {
    method: 'GET',
    headers: { Authorization: `Bearer ${refreshToken}` },
  });

  if (!response.ok) {
    const error = await response.json();
    throw Error(error.message);
  }

  const result = (await response.json()) as Pick<
    AuthResponse,
    'token' | 'refreshToken'
  >;

  localStorage.setItem('token', result.token);
  localStorage.setItem('refreshToken', result.refreshToken);

  return result;
}
