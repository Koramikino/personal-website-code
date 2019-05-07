const ghpages = require('gh-pages')

ghpages.publish(
    'public',
    {
        branch: 'master',
        repo: 'https://github.com/Koramikino/personal-website.git',
    },
    () => {
        console.log('deploy complete')
    }
)