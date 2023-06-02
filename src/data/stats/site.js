import dayjs from 'dayjs';

/* Keys match keys returned by the github api. Fields without keys are
 * mostly jokes. To see everything returned by the github api, run:
 curl https://api.github.com/repos/imflos/xing.github.io
 */
const data = [
  {
    label: 'Last updated at',
    key: 'pushed_at',
    link: 'https://github.com/imflos/xing.github.io/commits',
    format: (x) => dayjs(x).format('MMMM DD, YYYY'),
  },
];

export default data;
