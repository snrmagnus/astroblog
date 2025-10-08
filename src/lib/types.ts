interface Post {
  id: string;
  url: string;
  frontmatter: {
    title: string;
    pubDate: string;
    description?: string;
    author: string;
    image: {
      url: string;
      alt: string;
    };
    tags: string[];
  };
}
