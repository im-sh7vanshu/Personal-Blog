const KEY = "blogs";

export const getBlogs = () => {
  return JSON.parse(localStorage.getItem(KEY)) || [];
};

export const saveBlogs = (blogs) => {
  localStorage.setItem(KEY, JSON.stringify(blogs));
};

export const clearBlogs = () => {
  localStorage.removeItem(KEY);
};


