import { Link } from 'react-router-dom';
import css from './Statistics.module.css';

type StatisticsType = {
  setActiveButton: (value: 'diary' | 'statistics') => void;
};

export default function Statistics({ setActiveButton }: StatisticsType) {
  return (
    <div className={css.wrapper}>
      <div className={css.firstLine}>
        <h3 className={css.title}>Statistics</h3>
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
                stroke="#686868"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2.66699 1.33331H13.3337M2.66699 14.6666H13.3337"
                stroke="#686868"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
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
              <g clip-path="url(#clip0_18738_4815)">
                <path
                  opacity="0.8"
                  d="M11.4663 9.33336C11.651 9.33336 11.7433 9.33336 11.8182 9.37436C11.8799 9.40819 11.9374 9.4717 11.9649 9.5365C11.9982 9.61506 11.9898 9.69865 11.973 9.86582C11.8861 10.7325 11.5878 11.5677 11.1008 12.2964C10.5148 13.1735 9.68186 13.857 8.70732 14.2607C7.73278 14.6644 6.66043 14.77 5.62586 14.5642C4.5913 14.3584 3.64099 13.8505 2.89511 13.1046C2.14923 12.3587 1.64128 11.4084 1.43549 10.3738C1.2297 9.33927 1.33532 8.26692 1.73899 7.29238C2.14265 6.31784 2.82624 5.48489 3.7033 4.89885C4.43205 4.41192 5.26718 4.11363 6.13388 4.02667C6.30105 4.00989 6.38464 4.00151 6.4632 4.03484C6.528 4.06233 6.59152 4.11979 6.62534 4.18152C6.66634 4.25636 6.66634 4.34869 6.66634 4.53336V8.80002C6.66634 8.98671 6.66634 9.08005 6.70268 9.15136C6.73463 9.21408 6.78563 9.26507 6.84835 9.29703C6.91965 9.33336 7.01299 9.33336 7.19968 9.33336H11.4663Z"
                  stroke="#F9F9F9"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.33301 1.86668C9.33301 1.68201 9.33301 1.58967 9.37401 1.51484C9.40783 1.4531 9.47135 1.39564 9.53615 1.36815C9.6147 1.33482 9.69829 1.34321 9.86547 1.35997C11.0844 1.48224 12.2303 2.02155 13.1042 2.89544C13.9781 3.76934 14.5174 4.91528 14.6397 6.13421C14.6565 6.30139 14.6649 6.38498 14.6315 6.46354C14.604 6.52834 14.5466 6.59185 14.4848 6.62567C14.41 6.66668 14.3177 6.66668 14.133 6.66668L9.86634 6.66668C9.67966 6.66668 9.58631 6.66668 9.51501 6.63035C9.45229 6.59839 9.4013 6.5474 9.36934 6.48468C9.33301 6.41337 9.33301 6.32003 9.33301 6.13335L9.33301 1.86668Z"
                  stroke="#F9F9F9"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_18738_4815">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
      </div>
      <div className={css.content}>
        <div className={css.percents}>100%</div>
        <div className={css.wrapperSecondLine}>
          <div className={css.point}></div>
          <div className={css.textWrapper}>
            <p className={css.percent}>19.14%</p>

            <p className={css.readBook}>171 pages read</p>
          </div>
        </div>
      </div>
    </div>
  );
}
