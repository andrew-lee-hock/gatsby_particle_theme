import { useStaticQuery, graphql } from 'gatsby';

export function useNavItems() {
  const {
    allNavItemsYaml: { edges },
  } = useStaticQuery(graphql`
    query LEFT_NAV_QUERY {
      allNavItemsYaml {
        edges {
          node {}
            pages {
              title
              path
            }
            hasDivider
          }
        }
    }
  `);

  const navItems = edges.map(({ node }) => node);
  return navItems;
}
