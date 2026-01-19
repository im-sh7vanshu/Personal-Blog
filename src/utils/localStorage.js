const KEY = "blogs";

export const getBlogs = () => {
  return JSON.parse(localStorage.getItem(KEY)) || [];
};

export const saveBlogs = (blogs) => {
  localStorage.setItem(KEY, JSON.stringify(blogs));
};

export const initializeSampleBlogs = () => {
  const existingBlogs = getBlogs();
  if (existingBlogs.length === 0) {
    const sampleBlogs = [
      {
        id: 1,
        title: "Sample Blog 1",
        content: "This is a sample blog post.",
        author: "Author",
        date: new Date().toISOString()
      },
      {
        id: 2,
        title: "Sample Blog 2",
        content: "Another sample blog post.",
        author: "Author",
        date: new Date().toISOString()
      }
    ];
    saveBlogs(sampleBlogs);
  }
};
