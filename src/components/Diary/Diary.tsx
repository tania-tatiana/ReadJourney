import css from './Diary.module.css';

type DiaryType = {
  setActiveButton: (value: 'diary' | 'statistics') => void;
};

const totalPages = 400;

const diary = [
  {
    finishPage: 45,
    startPage: 3,
    speed: 45,
    status: 'inactive',

    createdAt: '2023-10-21',

    time: 29,
  },

  {
    finishPage: 87,
    startPage: 46,
    speed: 50,
    status: 'inactive',

    createdAt: '2023-10-19',

    time: 40,
  },
];

export default function Diary({ setActiveButton }: DiaryType) {
  return (
    <div className={css.wrapper}>
      <div className={css.firstLine}>
        <h3 className={css.title}>Diary</h3>
        <div className={css.buttons}>
          <button
            className={css.buttonSVG}
            onClick={() => setActiveButton('diary')}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 7.99998L5.15141 5.62615C4.72818 5.27346 4.51656 5.09711 4.36443 4.88094C4.22963 4.6894 4.12953 4.47567 4.06868 4.2495C4 3.99424 4 3.71877 4 3.16785V1.33331M8 7.99998L10.8486 5.62615C11.2718 5.27346 11.4834 5.09711 11.6356 4.88094C11.7704 4.6894 11.8705 4.47567 11.9313 4.2495C12 3.99424 12 3.71877 12 3.16785V1.33331M8 7.99998L5.15141 10.3738C4.72818 10.7265 4.51656 10.9028 4.36443 11.119C4.22963 11.3106 4.12953 11.5243 4.06868 11.7505C4 12.0057 4 12.2812 4 12.8321V14.6666M8 7.99998L10.8486 10.3738C11.2718 10.7265 11.4834 10.9028 11.6356 11.119C11.7704 11.3106 11.8705 11.5243 11.9313 11.7505C12 12.0057 12 12.2812 12 12.8321V14.6666"
                stroke="#F9F9F9"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2.66699 1.33331H13.3337M2.66699 14.6666H13.3337"
                stroke="#F9F9F9"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <button
            className={css.buttonSVG}
            onClick={() => setActiveButton('statistics')}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_18723_4450)">
                <path
                  opacity="0.4"
                  d="M11.4663 9.33336C11.651 9.33336 11.7433 9.33336 11.8182 9.37436C11.8799 9.40819 11.9374 9.4717 11.9649 9.5365C11.9982 9.61506 11.9898 9.69865 11.973 9.86582C11.8861 10.7325 11.5878 11.5677 11.1008 12.2964C10.5148 13.1735 9.68186 13.857 8.70732 14.2607C7.73278 14.6644 6.66043 14.77 5.62586 14.5642C4.5913 14.3584 3.64099 13.8505 2.89511 13.1046C2.14923 12.3587 1.64128 11.4084 1.43549 10.3738C1.2297 9.33927 1.33532 8.26692 1.73899 7.29238C2.14265 6.31784 2.82624 5.48489 3.7033 4.89885C4.43205 4.41192 5.26718 4.11363 6.13388 4.02667C6.30105 4.00989 6.38464 4.00151 6.4632 4.03484C6.528 4.06233 6.59152 4.11979 6.62534 4.18152C6.66634 4.25636 6.66634 4.34869 6.66634 4.53336V8.80002C6.66634 8.98671 6.66634 9.08005 6.70268 9.15136C6.73463 9.21408 6.78563 9.26507 6.84835 9.29703C6.91965 9.33336 7.01299 9.33336 7.19968 9.33336H11.4663Z"
                  stroke="#686868"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.33301 1.86668C9.33301 1.68201 9.33301 1.58967 9.37401 1.51484C9.40783 1.4531 9.47135 1.39564 9.53615 1.36815C9.6147 1.33482 9.69829 1.34321 9.86547 1.35997C11.0844 1.48224 12.2303 2.02155 13.1042 2.89544C13.9781 3.76934 14.5174 4.91528 14.6397 6.13421C14.6565 6.30139 14.6649 6.38498 14.6315 6.46354C14.604 6.52834 14.5466 6.59185 14.4848 6.62567C14.41 6.66668 14.3177 6.66668 14.133 6.66668L9.86634 6.66668C9.67966 6.66668 9.58631 6.66668 9.51501 6.63035C9.45229 6.59839 9.4013 6.5474 9.36934 6.48468C9.33301 6.41337 9.33301 6.32003 9.33301 6.13335L9.33301 1.86668Z"
                  stroke="#686868"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_18723_4450">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
      </div>
      <div className={css.content}>
        <ul className={css.list}>
          {diary.map((item) => (
            <li className={css.item}>
              <div className={css.dairyFirstLine}>
                <div className={css.dateLine}>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="16" height="16" rx="4" fill="#686868" />
                    <rect
                      x="4"
                      y="4"
                      width="8"
                      height="8"
                      rx="2"
                      fill="#1F1F1F"
                    />
                  </svg>
                  <p className={css.date}>{item.createdAt}</p>
                </div>
                <p className={css.pages}>
                  {item.finishPage - item.startPage} pages
                </p>
              </div>
              <div className={css.dairySecondLine}>
                <div className={css.percentAndTime}>
                  <p className={css.percent}>
                    {(
                      ((item.finishPage - item.startPage) / totalPages) *
                      100
                    ).toFixed(1)}
                    %
                  </p>
                  <p className={css.time}>{item.time} minutes</p>
                </div>
                <div className={css.scheduleAndSpeedAndButton}>
                  <div className={css.scheduleAndSpeed}>
                    <svg
                      width="44"
                      height="18"
                      viewBox="0 0 44 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M43.5625 1L0.5625 6.96493V18H43.5625V1Z"
                        fill="#30B94D"
                        fill-opacity="0.2"
                      />
                      <rect
                        width="43.5143"
                        height="2.17572"
                        rx="1"
                        transform="matrix(-0.987181 0.159606 0.159606 0.987181 42.8096 0)"
                        fill="#30B94D"
                      />
                    </svg>
                    <p className={css.speed}>{item.speed} pages per hour</p>
                  </div>
                  <button className={css.deleteButton}>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.75 3.5H2.91667H12.25"
                        stroke="#686868"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M11.0837 3.50002V11.6667C11.0837 11.9761 10.9607 12.2729 10.742 12.4916C10.5232 12.7104 10.2264 12.8334 9.91699 12.8334H4.08366C3.77424 12.8334 3.47749 12.7104 3.2587 12.4916C3.03991 12.2729 2.91699 11.9761 2.91699 11.6667V3.50002M4.66699 3.50002V2.33335C4.66699 2.02393 4.78991 1.72719 5.0087 1.5084C5.22749 1.2896 5.52424 1.16669 5.83366 1.16669H8.16699C8.47641 1.16669 8.77316 1.2896 8.99195 1.5084C9.21074 1.72719 9.33366 2.02393 9.33366 2.33335V3.50002"
                        stroke="#686868"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M5.83301 6.41669V9.91669"
                        stroke="#686868"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M8.16699 6.41669V9.91669"
                        stroke="#686868"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
