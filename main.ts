import { Drash } from "https://deno.land/x/drash@v1.0.5/mod.ts";
import HomeResource from "./resources/home.ts";
import { UsersResource, UserResource } from "./resources/users.ts";

const server = new Drash.Http.Server({
  response_output: "application/json",
  resources: [
    HomeResource,
    UsersResource,
    UserResource,
  ],
});

const opt = {
  hostname: "localhost",
  port: 8080,
};

server.run(opt);

console.log(`Server listening: http://${opt.hostname}:${opt.port}`);
