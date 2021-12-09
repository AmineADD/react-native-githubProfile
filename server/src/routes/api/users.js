import { Router } from "express";
import { findOrCreateUser } from "./services/user.service";
var { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const api = Router();

api.get("/:username", async (request, response) => {
  const { username } = request.params;

  prisma.user
    .findFirst({
      where: {
        username: username.trim().toUpperCase(),
      },
    })
    .then(async (result) => {
      result
        ? response.json({
            data: result,
          })
        : (async () => {
            response.json({
              data: await findOrCreateUser(username),
            });
          })();
    });
});

export default api;
