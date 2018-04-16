import { Context } from "koa";
import { getManager } from "typeorm";

/**
 * Loads all posts from the database.
 */
export async function testAction(context: Context) {
  // return loaded posts
  context.body = "www";
}
