const host = "http://localhost:";
const port = "8081";

export const getALLBlogsApiEndPoint = host+port+"/admin/blog/get-all-blogs";

export const getAllUserApiEndPoint = host+port+"/admin/user/all-user";
export const getAUserEndPoint = host+port+"/admin/user/user-activity?userId=";



export const getAllBlogActivityApiEndPoint = host+port+"/admin/blog/get-blog-activity";

export const getAllBlogStatApiEndPoint = host+port+"/admin/blog/get-blog-stat";

export const loginEndPoint = host+port+"/authentication/login"
export const logoutEndPoint = host+port+"/authentication/logout"