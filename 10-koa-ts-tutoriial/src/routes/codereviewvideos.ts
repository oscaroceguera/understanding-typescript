import { Context } from "koa";
import { AddGameRequest } from "../request/AddGameRequest";
import { DeleteGameRequest } from "../request/DeleteGameRequest";
import { validate } from "class-validator";
import { redisStorage as storage } from "../storage/redis";
import Router from "koa-router";

const router = new Router();

router.post(`/codereviewvideos`, async (ctx: Context) => {
  try {
    const validatorOptions = {};

    const game = new AddGameRequest();
    game.name = ctx.request.body.name || "";

    const errors = await validate(game, validatorOptions);

    if (errors.length > 0) {
      ctx.status = 400;
      ctx.body = {
        status: "error",
        data: errors
      };

      return ctx;
    }

    const list = "game_list";

    storage.add(list, game.name);

    ctx.status = 201;
    ctx.body = {
      games: await storage.get(list)
    };
  } catch (err) {
    console.error(err);
  }
});

router.delete(`/codereviewvideos`, async (ctx: Context) => {
  try {
    const validatorOptions = {};

    const game = new DeleteGameRequest();
    game.name = ctx.request.body.name || "";

    const errors = await validate(game, validatorOptions);

    if (errors.length > 0) {
      ctx.status = 400;
      ctx.body = {
        status: "error",
        data: errors
      };

      return ctx;
    }

    const list = "game_list";
    const store = storage.redisStorage();

    store.remove(list, game.name);

    ctx.status = 200;
    ctx.body = {
      games: await store.get(list)
    };
  } catch (err) {
    console.error(err);
  }
});

export default router;
