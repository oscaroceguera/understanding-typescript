import Koa from "koa";
import bodyParser from "koa-bodyparser";
import cors from "koa2-cors";
import logger from "koa-logger";
import healtcheckRoutes from "./routes/healtcheck";
import codeReviewVideosRoutes from "./routes/codereviewvideos";
import { config } from "./config";

const app = new Koa();
const PORT = config.port;

app.use(bodyParser());
app.use(
  cors({
    origin: "*"
  })
);
app.use(logger());

app.use(healtcheckRoutes.routes());
app.use(codeReviewVideosRoutes.routes());

const server = app
  .listen(PORT, async () => {
    console.log(`Server listening on port: ${PORT}`);
  })
  .on("error", (err: any) => {
    console.error(err);
  });

export default server;
