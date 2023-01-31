export interface GitHubUser {
    login: string;
    id: number;
    node_id: string;
    avatar: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
    name: string;
    company: null | string;
    blog: string;
    location: string;
    email: null | string;
    hireable: boolean;
    bio: null | string;
    twitter: null | string;
    repos: number;
    public_gists: number;
    followers: number;
    following: number;
    created: Date;
    updated: Date;
}

export interface LocalGitHubUser {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
    name: string;
    company: null | string;
    blog: string;
    location: string;
    email: null | string;
    hireable: boolean;
    bio: null | string;
    twitter: null | string;
    public_repos: number;
    public_gists: number;
    followers: number;
    following: number;
    created_at: Date;
    updated_at: Date;
}

export interface GitHubResError {
    message: string;
    documentation_url: string;
}
