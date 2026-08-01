import { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { IoIosArrowUp } from 'react-icons/io';

import css from './LibrarySelect.module.css';
import clsx from 'clsx';

export default function LibrarySelect() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('All books');
  return (
    <div className={css.select}>
      <button className={css.selectVariant} onClick={() => setIsOpen(!isOpen)}>
        <span className={css.text}>{selected}</span>
        {isOpen ? <IoIosArrowUp size={16} /> : <IoIosArrowDown size={16} />}
      </button>

      {isOpen && (
        <ul className={css.list}>
          <li className={css.item}>
            <button
              className={clsx(
                css.itemButton,
                selected === 'Unread' && css.active,
              )}
              onClick={() => {
                setIsOpen(false);
                setSelected('Unread');
              }}
            >
              Unread
            </button>
          </li>
          <li className={css.item}>
            <button
              className={clsx(
                css.itemButton,
                selected === 'In progress' && css.active,
              )}
              onClick={() => {
                setIsOpen(false);
                setSelected('In progress');
              }}
            >
              In progress
            </button>
          </li>
          <li className={css.item}>
            <button
              className={clsx(
                css.itemButton,
                selected === 'Done' && css.active,
              )}
              onClick={() => {
                setIsOpen(false);
                setSelected('Done');
              }}
            >
              Done
            </button>
          </li>
          <li className={css.item}>
            <button
              className={clsx(
                css.itemButton,
                selected === 'All books' && css.active,
              )}
              onClick={() => {
                setIsOpen(false);
                setSelected('All books');
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
