export interface AuthService {
  login: (email: string, password: string) => Promise<boolean>;
  register: (username: string, firstName: string, lastName: string, email: string, password: string) => Promise<boolean>;
  refreshAccessToken: () => Promise<boolean>;
  logout: () => Promise<void>;
}

const authService: AuthService = {
  login: async (email: string, password: string) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/login`, {
        method: 'POST',
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        const data = await response.json();

        localStorage.setItem('accessToken', data.accessToken);
        localStorage.setItem('refreshToken', data.refreshToken);
        return true;
      }
      return false;
    } catch (err) {
      console.error(err);
      return false;
    }
  },

  register: async (username: string, firstName: string, lastName: string, email: string, password: string) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/register`, {
        method: 'POST',
        body: JSON.stringify({
          username,
          firstName,
          lastName,
          email,
          password,
        }),
      });
      if (response.ok) {
        const data = await response.json();

        localStorage.setItem('accessToken', data.accessToken);
        localStorage.setItem('refreshToken', data.refreshToken);
        return true;
      }
      return false;
    } catch (err) {
      console.error(err);
      return false;
    }
  },

  refreshAccessToken: async () => {
    const refreshToken = localStorage.getItem('refreshToken');

    if (!refreshToken) {
      return false;
    }

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/refresh-token`, {
        method: 'POST',
        body: JSON.stringify({ refreshToken }),
      });
      if (response.ok) {
        const data = await response.json();

        localStorage.setItem('accessToken', data.accessToken);
        return true;
      }
      return false;
    } catch (err) {
      console.error(err);
      return false;
    }
  },

  logout: async () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    window.location.href = '/login';
  },
};

export default authService;
