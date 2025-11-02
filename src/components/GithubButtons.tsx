import GitHubButton from 'react-github-btn';

export default function GithubButtons() {
  return (
        <div className="flex gap-5">
            <GitHubButton href="https://github.com/Jbbcch" data-icon="octicon-star" data-size="large" data-show-count="true">
                Star
            </GitHubButton>

            <GitHubButton href="https://github.com/Jbbcch" data-icon="octicon-repo-forked" data-size="large" data-show-count="true">
                Fork
            </GitHubButton>

            <GitHubButton href="https://github.com/Jbbcch" data-icon="octicon-eye" data-size="large" data-show-count="true">
                Watch
            </GitHubButton>
        </div>
    );
}