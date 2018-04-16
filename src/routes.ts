import { Context } from "koa";
import { Alarm } from "./entity/Alarm";

/**
 * All application routes.
 */
export const AppRoutes = [
  {
    path: "/fuck",
    method: "get",
    action: async function postGetAllAction(context: Context) {
      const entity = new Alarm();
      entity.alarmLevel = 1;
      entity.alarmStatus = 2;
      entity.deviceNo = "dev123";
      entity.lineLabel = "lineLabel";
      entity.stamp = 1234556;
      entity.status = "[1,2,3]";
      entity.systemLabel = "vobc";
      await entity.save();
      context.body = `wwwwwwwwwwwwwwwwww1`;
    }
  },
  {
    path: "/test",
    method: "get",
    action: async function postGetAllAction(context: Context) {
      context.body = "www";
    }
  }
];
