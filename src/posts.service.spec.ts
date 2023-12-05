import { Post, PostsService } from './posts.service';

describe('PostsService', () => {
  let postsService: PostsService;
  const post: Omit<Post, 'id' | 'date'> = {
    text: 'Mocked post',
  };
  let preExistingPost: Post;

  beforeEach(async () => {
    postsService = new PostsService();

    postsService.create({ text: 'Some pre-existing post' });
  });

  it('should add a new post', () => {
    // реализуйте тест-кейс
    const post: Omit<Post, 'id' | 'date'> = {
      text: 'Mocked post',
    };
  });

  it('should find a post', () => {
    // реализуйте тест-кейс
    const post = postsService.find(preExistingPost.id);
    expect(post?.text).toEqual(preExistingPost.text);
  });
});
