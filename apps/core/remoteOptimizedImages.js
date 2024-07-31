module.exports = fetch('https://sanny.io/api/media?limit=100')
  .then(response => response.json())
  .then(({ docs }) => docs.map(doc => `https://sanny.io${doc.url}`))