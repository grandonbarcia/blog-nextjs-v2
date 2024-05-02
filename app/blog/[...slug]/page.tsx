import { Post } from '@/.velite';
import { posts } from '#site/content';
interface PostPageProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams(params: PostPageProps['params']) {
  const slug = params?.slug?.join('/');
  const post = posts.find((post) => post.slugAsParams === slug);
}

export default async function PostPage({ params }: PostPageProps) {
  return (
    <article className="container py-6 prose dark:prose-invert max-w-3xl mx-auto">
      <h1 className="mb-2"></h1>
    </article>
  );
}
