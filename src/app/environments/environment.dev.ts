export const environment = {
  production: false,
  apiHost:
    'https://public-api.wordpress.com/rest/v1.1/sites/en.blog.wordpress.com',

  getUrl(postId: number) {
    return `https://public-api.wordpress.com/rest/v1.1/sites/en.blog.wordpress.com/posts/${postId}/replies/?number=1`;
  },
};
