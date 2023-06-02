const skills = [
  {
    title: "Quantitative Analysis",
    competency: 3,
    category: ["Financial Engineering", "Risk Management"]
  },
  {
    title: "Financial Theory",
    competency: 4,
    category: ["Financial Engineering", "Investing"]
  },
  {
    title: "Risk Management",
    competency: 2,
    category: ["Financial Engineering", "Investing"]
  },
  {
    title: "Algorithmic Trading",
    competency: 3,
    category: ["Financial Engineering"]
  },
  {
    title: "Regulatory Knowledge",
    competency: 5,
    category: ["Financial Engineering", "Investing"]
  },
  {
    title: "Financial Modeling",
    competency: 3,
    category: ["Financial Engineering", "Investing"]
  },
  {
    title: "Python for Finance",
    competency: 2,
    category: ['Programming', "Investing", "Tool"]
  },
  {
    title: 'Problem-Solving',
    competency: 5,
    category: ['Programming'],
  },
  {
    title: 'Data Analysis and Modeling',
    competency: 3,
    category: ['Programming'],
  },
  {
    title: 'Risk Management',
    competency: 3,
    category: ['Tool'],
  },
  {
    title: 'Regulatory Knowledget',
    competency: 5,
    category: ['Tool'],
  },
  {
    title: 'SQL',
    competency: 2,
    category: ['Programming'],
  },

].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#0d216b',
  '#0944e1',
  '#08c0ff',
  '#0ffff8',
];

const categories = [
  ...new Set(skills.flatMap(({ category }) => category)),
].sort().map((category, index) => ({
  name: category,
  color: colors[index],
}));

export { categories, skills };
