/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'UC Berkeley East Asian Library Technical Services ',
    position: 'Purchasing Department - Analyst',
    url: 'https://www.lib.berkeley.edu/visit/east-asian/',
    startDate: '2022-02-01',
    endDate: '2023-05-13',
    summary: "The C.V. Starr East Asian Library at the University of California, Berkeley, is one of the most comprehensive collections of materials in East Asian languages in the United States. ",
    highlights: [
      'Negotiations,contractformulation,igningtoensurethetimely.Utilizedlibrarymanagementsystems to catalog and organize the newly acquired materials, and collaborated with other library staff to evaluate and select relevant materials for acquisition. ',
      'Analyzed data to inform collection development decisions and improve library services.',
    ],
  },
  {
    name: 'Effects of Smoking on Birth Weight',
    position: 'Researcher',
    url: 'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwjSk6TEqqX_AhXFOkQIHdcXCZsQFnoECAwQAQ&url=https%3A%2F%2Fwww.stat.berkeley.edu%2F~rice%2F200B%2Flab5.ps&usg=AOvVaw1VUZaccigVDK7ipw2Unj8x/',
    startDate: '2021-06-01',
    endDate: '2021-08-01',
    summary: 'Collect and analyze relevant data to carry out effective research on the influence of smoking on infant birth weight. ',
    highlights: [
      'Cooperated with 3 members.',
      'collected data from the public database, used STATA to conduct regression analysis, studied the correlation between birth weight and variables, and effectively concluded the reasons for the influence of smoking on birth weight. ',

    ],
  },
  {
    name: 'Study on the Effect of Lead Waterpipe on Infant Mortality',
    position: 'Researcher',
    url: 'https://www.lib.berkeley.edu/research/data-services/',
    startDate: '2021-06-01',
    endDate: '2021-09-20',
    summary: 'Determine the factors affecting infant mortality in specific fields through this research. ',
    highlights: [
      'Served as a researcher of the project, cooperated with 2 students to collect data related to waterpipe type, water PH and demographic statistics from the government website, and conducted regression analysis by using Stata. ',
      'The conclusion was drawn that the increase of lead content in waterpipe would reduce water acidity and lead to an increase in infant mortality.',
    ],
  },
  {
    name: 'Berkeley Chinese Students and Scholars Association ',
    position: 'Head of Finance Department',
    url: 'https://callink.berkeley.edu/organization/bcssa/',
    startDate: '2021-05-01',
    endDate: '2023-05-13',
    summary: "Responsible for developing and managing the annual budget.",
    highlights: [
      'Allocating funds to activities, coordinating with other department heads, maintaining financial records, preparing reports, and presenting financial updates to the executive team and general membership. ',
    ],
  },
  {
    name: 'Sacramento City College Business Club',
    position: 'Minister',
    url: 'https://scc.losrios.edu/campus-life/active-clubs/the-business-society/',
    startDate: '2020-06-01',
    endDate: '2021-05-01',
    summary: 'Managed a team to complete the organization, planning and execution of network activities involving 100 of students. ',
    highlights: [
      'including academic seminars and cultural exchange activities. A deep understanding of financial and managerial accounting, including the preparation of financial statements, budgeting, tax planning.',
    ],
  },

];

export default work;
