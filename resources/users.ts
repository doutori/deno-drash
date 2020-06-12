import { Drash } from "https://deno.land/x/drash@v1.0.5/mod.ts";
import { UserModel } from "../models/users.ts";

export class UsersResource extends Drash.Http.Resource {
  static paths = ["/users"];
  public GET() {
    this.response.body = UserModel.getUsers();

    return this.response;
  }
}

export class UserResource extends Drash.Http.Resource {
  static paths = ["/users/:id"];
  public GET() {
    let userID = this.request.getPathParam("id");
    userID = Number(userID);
    this.response.body = UserModel.getUserByID(userID);

    return this.response;
  }
}
