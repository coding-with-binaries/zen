export const ZEN_AUTH_TOKEN = 'zen-auth-token';

export const headers = () => ({
  'zen-auth-token': `token:${localStorage.getItem(ZEN_AUTH_TOKEN)}`
});
