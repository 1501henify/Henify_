// Github API Star Counter
const repos = [
  { username: '1501henify', repo: 'CSS_Intro', elementId: 'star-count-1' },
  { username: '1501henify', repo: 'Snow-animation', elementId: 'star-count-2' },
  {
    username: '1501henify',
    repo: 'henify-Observer-API',
    elementId: 'star-count-3',
  },
  {
    username: '1501henify',
    repo: 'Learning-Python',
    elementId: 'star-count-4',
  },
];

repos.forEach(({ username, repo, elementId }) => {
  fetch(`https://api.github.com/repos/${username}/${repo}`)
    .then((response) => {
      if (!response.ok) throw new Error('GitHub API error');
      return response.json();
    })
    .then((data) => {
      document.getElementById(
        elementId
      ).innerHTML = `<i class="fas fa-star"></i> ${data.stargazers_count}`;
    })
    .catch((error) => {
      document.getElementById(
        elementId
      ).innerHTML = `<i class="fas fa-star"></i> Error`;
      console.error(`Error fetching stars for ${repo}:`, error);
    });
});
