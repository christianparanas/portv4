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

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${process.env.GITHUB_PERSONAL_ACCESS_TOKEN}`,
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


export async function getPinnedRepos() {
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

  const { user } = data
  const pinnedRepos = user.pinnedItems.edges.map(({ node }) => node);

  return pinnedRepos
}

export async function getRepos() {
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
  `
  })

  const { user } = data
  const repos = user.repositories.edges.map(({ node }) => node);

  return repos
}
