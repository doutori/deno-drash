import { Drash } from "https://deno.land/x/drash@v1.0.5/mod.ts";

class HomeResource extends Drash.Http.Resource {
  static paths = ["/"];
  public GET() {
    this.response.body = "Hello World! deno + Drash is cool!";
    return this.response;
  }
}

export default HomeResource;
