import { Request, Response } from "express";
import { TechnologyService } from "@service/Technology.service";
import { RequestUtils } from "@utils/RequestUtils";

export class TechnologyController {
  constructor(private service: TechnologyService) {}

  async getTechnologies(req: Request, res: Response) {
    try {
      const orderBy: string | null = RequestUtils.getOrderByParam(req);
      const dependencies: boolean = RequestUtils.getDependeciesBoolean(req);
      const results = await this.service.getAll(req, orderBy, dependencies);

      res.status(200).json(results);
    } catch (err: unknown) {
      if (err instanceof Error) {
        res.status(500).json({ error: err.message });
      } else {
        res.status(500).json({ error: String(err) });
      }
    }
  }

  async getTechnologyById(req: Request, res: Response) {
    try {
      const id: string | null = RequestUtils.getFieldParam(req, "id");
      const orderBy: string | null = RequestUtils.getOrderByParam(req);
      const dependencies: boolean = RequestUtils.getDependeciesBoolean(req);

      let results = null;
      if (id) {
        results = await this.service.getById(req, id, orderBy, dependencies);
      }
      res.status(200).json(results);
    } catch (err: unknown) {
      if (err instanceof Error) {
        res.status(500).json({ error: err.message });
      } else {
        res.status(500).json({ error: String(err) });
      }
    }
  }
}
