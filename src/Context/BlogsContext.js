import React, { createContext, useReducer } from 'react';
export const BlogsContext = createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case 'GETALLBLOGS':
      return {
        blogs: action.payload,
      };
    case 'ADDBLOG':
      return {
        blogs: [...state.blogs, action.payload],
      };
    case 'DELETEBLOG':
      return {
        blogs: [
          ...state.blogs.filter((data) => data._id !== action.payload._id),
        ],
      };

    default:
      return state;
  }
};
export function BlogsContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, { blogs: null });

  return (
    <BlogsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </BlogsContext.Provider>
  );
}
