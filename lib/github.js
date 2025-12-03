import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  gql,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: "https://api.github.com/graphql",
});

const token = process.env.GITHUB_PERSONAL_ACCESS_TOKEN;
const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      ...(token ? { authorization: `Bearer ${token}` } : {}),
    },
  };
});

const client = new ApolloClient({
  link: token ? authLink.concat(httpLink) : httpLink,
  cache: new InMemoryCache(),
});

export async function getPinnedRepos() {
  try {
  const { data } = await client.query({
    query: gql`
      {
        user(login: "christianparanas") {
          pinnedItems(first: 5) {
            edges {
              node {
                ... on Repository {
                  id
                  name
                  description
                  homepageUrl
                  url
                  openGraphImageUrl
                  languages(first: 10) {
                    nodes {
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
    `,
  });

  const { user } = data;
  const pinnedRepos = user.pinnedItems.edges.map(({ node }) => node);

  return pinnedRepos;
  } catch (e) {
    return [];
  }
}

export async function getRepos() {
  try {
  const { data } = await client.query({
    query: gql`
      {
        user(login: "christianparanas") {
          repositories(
            first: 8
            privacy: PUBLIC
            orderBy: { field: UPDATED_AT, direction: DESC }
          ) {
            edges {
              node {
                homepageUrl
                name
                description
                url
                languages(first: 10) {
                  edges {
                    node {
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
    `,
  });

  const { user } = data;
  const repos = user.repositories.edges.map(({ node }) => node);

  return repos;
  } catch (e) {
    return [];
  }
}

export async function getGists() {
  try {
  const { data } = await client.query({
    query: gql`
      {
        user(login: "christianparanas") {
          avatarUrl
          login
          gists(first: 10, orderBy: { field: CREATED_AT, direction: DESC }) {
            edges {
              node {
                id
                description
                files {
                  language {
                    name
                  }
                  text
                  name
                }
                createdAt
              }
            }
          }
        }
      }
    `,
  });

  const { user } = data;
  
  const gists = user.gists.edges.map(({ node }) => node);
  const avatarUrl = user.avatarUrl;
  const username = user.login;

  return {
    gists,
    avatarUrl,
    username,
  };
  } catch (e) {
    return { gists: [], avatarUrl: "", username: "" };
  }
}
