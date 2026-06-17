export const APP_URL = 'https://viraza.net/';
export const SIGN_UP_URL = 'https://viraza.net/contact';
export const GITHUB_URL = 'https://github.com/previraza';
export const BOOK_A_CALL_URL = 'https://viraza.net/contact';
export const ENTERPRISE_CONTACT_URL = 'mailto:info@viraza.net?subject=Contact%20Viraza';

const config = {
  projectName: 'Viraza',
  logo: {
    light: '/logo-light.svg',
    dark: '/logo-dark.svg',
  },
  logoAlt: 'Viraza',
  logoLink: '/',
  metaThemeColors: {
    light: '#040406',
    dark: '#040406',
  },
  defaultSocialImage: '/social-previews/main.jpg',
  githubOrg: 'previraza',
  githubRepo: 'viraza',
  blog: {
    postsPerPage: 20,
    contentWidth: 704,
    // postCardCoverWidth: 302,
    // featuredPostCount: 2,
    // coverAspectRatio: 16 / 9,
    contentDir: 'src/content/blog',
  },
  legal: {
    contentDir: 'src/content/policies',
  },
  changelog: {
    // We would prefer of keeping content outside of src folder but it would disable hot reloading.
    contentDir: 'src/content/changelog',
    postsPerPage: 20,
  },
};

export default config;
