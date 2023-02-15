export const endpoints = {
  post: {
    getAllPost: '/posts',
    getPostComments: '/posts/:postId/comments',
  },
  user: {
    getUserByUserId: '/users',
  },
  comment: {
    getCommentsByPostId: '/comments',
  },
};
