export const APP_URL = 'https://viraza.net/';
export const SIGN_UP_URL = 'https://viraza.net/contact';
export const GITHUB_URL = 'https://github.com/virazait';
export const BOOK_A_CALL_URL = 'https://viraza.net/contact';
export const ENTERPRISE_CONTACT_URL = 'mailto:info@viraza.net?subject=Contact%20Viraza';

const config = {
  projectName: 'Viraza',
  logo: {
    light: '/logo-light.svg',
    dark: '/logo-dark.svg',
  },
  logoAlt: 'Viraza IT Solutions',
  logoLink: '/',
  metaThemeColors: {
    light: '#040406',
    dark: '#040406',
  },
  defaultSocialImage: '/social-previews/main.jpg',
  githubOrg: 'virazait',
  githubRepo: 'viraza',
  blog: {
    postsPerPage: 20,
    contentWidth: 704,
    contentDir: 'src/content/blog',
  },
  legal: {
    contentDir: 'src/content/policies',
  },
  changelog: {
    contentDir: 'src/content/changelog',
    postsPerPage: 20,
  },
};

export default config;
