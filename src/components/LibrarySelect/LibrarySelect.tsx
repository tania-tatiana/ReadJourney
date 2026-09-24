import { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { IoIosArrowUp } from 'react-icons/io';

import css from './LibrarySelect.module.css';
import clsx from 'clsx';
import type { Status } from '../../services/api.js';

type LibraryProps = {
  status: Status | undefined;
  setStatus: (status: Status | undefined) => void;
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
                status === 'unread' && css.active,
              )}
              onClick={() => {
                setIsOpen(false);
                setStatus('unread');
              }}
            >
              Unread
            </button>
          </li>
          <li className={css.item}>
            <button
              className={clsx(
                css.itemButton,
                status === 'in-progress' && css.active,
              )}
              onClick={() => {
                setIsOpen(false);
                setStatus('in-progress');
              }}
            >
              In progress
            </button>
          </li>
          <li className={css.item}>
            <button
              className={clsx(css.itemButton, status === 'done' && css.active)}
              onClick={() => {
                setIsOpen(false);
                setStatus('done');
              }}
            >
              Done
            </button>
          </li>
          <li className={css.item}>
            <button
              className={clsx(
                css.itemButton,
                status === undefined && css.active,
              )}
              onClick={() => {
                setIsOpen(false);
                setStatus(undefined);
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
