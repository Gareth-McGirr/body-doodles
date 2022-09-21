import { rest } from "msw";

const baseURL = "https://body-doodles-api.herokuapp.com/";

export const handlers = [
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
      ctx.json({
        pk: 2,
        username: "jack2",
        email: "",
        first_name: "",
        last_name: "",
        profile_id: 2,
        profile_image:
          "https://storage.googleapis.com/body-doodle-images/profile_images/parrot-3601194__340_2.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=body-doodle-cs%40body-doodles.iam.gserviceaccount.com%2F20220921%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20220921T142050Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=8a226538458f55547db32a4701fbfc53a5a18d655987092c7b376a7ddaef080db3fa5905777a6fd1b56d778dd284c98d7f36bbea67be9e7facd5a24e27609f1f5f8c120656ff5a2546a1437a0c3eca8cce9ed24c80efe1ad93d770426827443f54918a39d0ff875bee819b499368a4b9aacea3b14bf6afd8a3ce41073b1b3e87c98941c7ff372b1c2f5bb78ec672986ec3ed9bae10ccc897bdfd221f075baa04bf995cfcfce0cdd0097017884a5a3b3bfa2799dc3b7b550a540a2239deb69625e230ef2a8101ad2df328b10b485c72f8cd69322aee316baf669542f9985b49506c8906682821e303a5e7687142fdf79edda0c9d503cba63ca213611c2982a09e",
      })
    );
  }),
  rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];
