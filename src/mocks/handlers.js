import { rest } from "msw";

const baseURL = "https://body-doodles-api.herokuapp.com/";

const handlers = [
  // mocks a request to get the logged in user
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => res(
    ctx.json({
      "pk": 5,
      "username": "jack2",
      "email": "",
      "first_name": "",
      "last_name": "",
      "profile_id": 5,
      "profile_image": "https://storage.googleapis.com/body-doodle-images/profile_images/default_profile.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=body-doodle-cs%40body-doodles.iam.gserviceaccount.com%2F20220929%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20220929T024254Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=3f32bc0609e6cdfed57128f64b9cb590da2902f18c53322e9d589f786eed93dd01feb33db79b1a6a493423a4ce1869d2432e18ae53f051c1066fe2bd28f3c2cc6a15fe0e26a528eda327b47e593dfdd35a8efbf38f1069c6eabf4c9956971cb43333aab7757d45adbf88b140077fade7667bc709b254da9a59f4704299b04aeeb2bc63c4eb37609c0678ab87c3aac59b4312fb93e4b507108b5ced2778c4c75833da3ee418e02ba78f0c79095ea155893028003996f312135749103066b262739f6765e98cf05acef5f64a19ec8fc9ea80e1f6a585ff578ee78085fe50d488dcf5a0315e8681de17ac340fab766b242d66c5d565c00574c65d578313c650e15d"
    }),
  )),
  // mocks a request to log a user out
  rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => res(ctx.status(200))),
];
export default handlers;
