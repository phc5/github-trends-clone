// 1202342400000 represents the Epoch timestamp, in milliseconds, of the first day GitHub was created
const daysSinceGithubCreated = Math.floor(
  Math.abs(Date.now() - 1202342400000) / 1000 / 86400
);

const languages = {
  assembly: 'Assembly',
  c: 'C',
  cpp: 'C++',
  csharp: 'C#',
  go: 'Go',
  lisp: 'Lisp',
  javascript: 'JavaScript',
  perl: 'Perl',
  php: 'PHP',
  python: 'Python',
  ruby: 'Ruby',
  rust: 'Rust',
  swift: 'Swift',
  typescript: 'TypeScript'
};

const times = {
  'Past Day': 1,
  'Past Week': 7,
  'Past Month': 31,
  'Past Year': 365,
  'All Time': daysSinceGithubCreated
};

const colors = {
  assembly: '#b71c1c',
  c: '#4A148C',
  cpp: '#BF360C',
  csharp: '#006064',
  go: '#F57F17',
  lisp: '#263238',
  javascript: '#0091EA',
  perl: '#880E4F',
  php: '#00C853',
  python: '#311B92',
  ruby: '#FF6F00',
  rust: '#212121',
  swift: '#33691E',
  typescript: '#0D47A1'
};

module.exports = {
  colors,
  daysSinceGithubCreated,
  languages,
  times
};
