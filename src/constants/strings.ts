const screens = {
  splash: 'SPLASH_SCREEN',
  posts: 'POSTS_SCREEN',
  postDetail: 'POST_DETAIL_SCREEN',
  comments: 'COMMENTS_SCREEN',
};

const stacks = {
  init: 'INIT_STACK',
  posts: 'POSTS_STACK',
};

const labels = {
  endOfList: "I've reached the end.",
  post: 'Post',
  author: 'Author',
  location: 'Location',
  actions: 'Actions',
  call: 'Call',
  email: 'Email',
  website: 'Website',
  hasBeenAddedToFavorites: 'Has been added to favorites.',
  hasBeenRemovedFromFavorites: 'Has been removed from favorites.',
  comments: 'Comments',
  seeAll: 'See all',
  weHaveProblemsToLoadPosts: 'We have problems to load posts.',
  noHavePosts: 'No have posts.',
  tryAgain: 'Try again',
  deletePost: 'Delete post',
  areYouSureToDeleteThisPost:
    'Are you sure to delete this post? (For see again, you need to refresh the list)',
  cancel: 'Cancel',
  delete: 'Delete',
  deleteAllPosts: 'Delete all posts',
  areYouSureToDeleteAllPosts: 'Are you sure to delete all posts?',
  rigthNowYouAreInOfflineMode: 'Rigth now you are in offline mode.',
};

export default {
  screens,
  stacks,
  labels,
};
