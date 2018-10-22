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

module.exports = {
  daysSinceGithubCreated,
  languages,
  times
};
