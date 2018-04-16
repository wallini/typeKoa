import { Context } from "koa";
import { testAction } from "./controller/TestAction";

/**
 * All application routes.
 */
export const AppRoutes = [
  {
    path: "/test",
    method: "get",
    action: testAction
  }
];
