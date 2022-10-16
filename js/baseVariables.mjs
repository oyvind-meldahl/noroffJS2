export const baseURL = "https://nf-api.onrender.com/api/v1/social/";
export const options = {
  headers: {
    Authorization: "Bearer " + localStorage.getItem("accessToken"),
  },
};

export const defaultPhoto =
  "https://cdn.pixabay.com/photo/2017/11/29/09/15/paint-2985569__480.jpg";
