import { Router } from "express";
import { SettingsController } from "./controllers/SettingsController";
import { UsersController } from "./controllers/UserController";
import { MessagesController } from "./controllers/MessagesController";

const routes = Router();

/**
 * Tipos de parametros
 * Routes Params => Parametros de rotas
 * Query Params => Filtros e buscas
 * Body Params => {
 *  
 * }
 */

const settingsController = new SettingsController();
const usersController = new UsersController();
const messagesController = new MessagesController();

routes.post("/settings", settingsController.create);
routes.get("/settings:username", settingsController.findByUsername);
routes.put("/settings:username", settingsController.update);

routes.post("/users", usersController.create);

routes.post("/messages", messagesController.create);
routes.get("/messages/:id", messagesController.showByUser);

export { routes }
