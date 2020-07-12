import express, { Request, Response } from "express";
import { urlencoded } from "body-parser";
import { router } from "./routes/loginRouter";
import cookieSession from "cookie-session";

class Server {
  app: express.Express = express()

  constructor() {
    this.app.use(urlencoded({ extended: true }));
    this.app.use(cookieSession({ keys: ["laskdjf"] }));
    this.app.use(router);
  }

  start(): void {
    this.app.listen(5088, () => {
      console.log("Listening on port 5088");
    });
  }
}

new Server().start()