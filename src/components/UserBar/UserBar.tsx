import { useEffect, useState } from 'react';
import css from './UserBar.module.css';
import { getCurrentUser, type GetCurrentUser } from '../../services/api.js';

export default function UserBar() {
  const [user, setUser] = useState<GetCurrentUser | null>(null);
  useEffect(() => {
    async function getUser() {
      const result = await getCurrentUser();
      setUser(result);
    }
    getUser();
  }, []);
  if (!user) {
    return null;
  }
  return (
    <div className={css.userBar}>
      <div className={css.avatar}>{user.name.charAt(0).toUpperCase()}</div>
      <p className={css.user}>{user.name}</p>
    </div>
  );
}
