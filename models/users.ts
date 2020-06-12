import { Drash } from "https://deno.land/x/drash@v1.0.5/mod.ts";
import { User, Users } from "../interfaces/user.ts";

export class UserModel {
  private static readFileContents(file: string) {
    const fileContentsRaw = Deno.readFileSync(file);
    const decoder = new TextDecoder();

    return decoder.decode(fileContentsRaw);
  }

  static getUsers(): Users {
    try {
      const users = this.readFileContents("./mocks/user.json");

      return JSON.parse(users);
    } catch (err) {
      throw new Drash.Exceptions.HttpException(
        400,
        `Error getting users". Error: ${err.message}.`,
      );
    }
  }

  static getUserByID(userID: number): User {
    let user = null;

    try {
      const users = this.getUsers();
      user = users.filter((v) => v.id === userID);
    } catch (err) {
      throw new Drash.Exceptions.HttpException(
        400,
        `Error getting user with ID ${userID}. Error: ${err.message}.`,
      );
    }

    if (user.length === 0) {
      throw new Drash.Exceptions.HttpException(
        404,
        `User with ID ${userID} not found.`,
      );
    }

    return user[0];
  }
}
