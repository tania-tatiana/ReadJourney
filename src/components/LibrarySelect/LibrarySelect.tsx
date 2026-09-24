import { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { IoIosArrowUp } from 'react-icons/io';

import css from './LibrarySelect.module.css';
import clsx from 'clsx';
import type { Status } from '../../services/api.js';

type LibraryProps = {
  status: Status;
  setStatus: (status: Status) => void;
};

export default function LibrarySelect({ status, setStatus }: LibraryProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={css.select}>
      <button className={css.selectVariant} onClick={() => setIsOpen(!isOpen)}>
        <span className={css.text}>{status}</span>
        {isOpen ? <IoIosArrowUp size={16} /> : <IoIosArrowDown size={16} />}
      </button>

      {isOpen && (
        <ul className={css.list}>
          <li className={css.item}>
            <button
              className={clsx(
                css.itemButton,
                status === 'Unread' && css.active,
              )}
              onClick={() => {
                setIsOpen(false);
                setStatus('Unread');
              }}
            >
              Unread
            </button>
          </li>
          <li className={css.item}>
            <button
              className={clsx(
                css.itemButton,
                status === 'In progress' && css.active,
              )}
              onClick={() => {
                setIsOpen(false);
                setStatus('In progress');
              }}
            >
              In progress
            </button>
          </li>
          <li className={css.item}>
            <button
              className={clsx(css.itemButton, status === 'Done' && css.active)}
              onClick={() => {
                setIsOpen(false);
                setStatus('Done');
              }}
            >
              Done
            </button>
          </li>
          <li className={css.item}>
            <button
              className={clsx(
                css.itemButton,
                status === 'All books' && css.active,
              )}
              onClick={() => {
                setIsOpen(false);
                setStatus('All books');
              }}
            >
              All books
            </button>
          </li>
        </ul>
      )}
    </div>
  );
}
