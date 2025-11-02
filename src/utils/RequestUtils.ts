import { Request } from "express";

export class RequestUtils {
  private static ORDER_BY_PARAM: string = "order_by";
  private static DEPENDENCIES_PARAM: string = "dependencies";

  static getFieldParam(req: Request, fieldName: string): string | null {
    let result: any = null;

    if (req.query[fieldName]) {
      if (typeof req.query[fieldName] == "string") {
        result = req.query[fieldName];
      }
    }

    return result;
  }

  static getOrderByParam(req: Request): string | null {
    let result: any = null;

    if (req.query[this.ORDER_BY_PARAM]) {
      if (typeof req.query[this.ORDER_BY_PARAM] == "string") {
        result = req.query[this.ORDER_BY_PARAM];
      }
    }

    return result;
  }

  static getDependeciesBoolean(req: Request): boolean {
    let result: any = false;

    if (req.query[this.DEPENDENCIES_PARAM]) {
      if (typeof req.query[this.DEPENDENCIES_PARAM] == "string") {
        result = req.query[this.DEPENDENCIES_PARAM] === "true";
      }
    }

    return result;
  }
}
