import { Request, Response } from "express";
import { TechnologyVersionService } from "@service/TechnologyVersion.service";
import { RequestUtils } from "@utils/RequestUtils";

export class TechnologyVersionController {
  constructor(private service: TechnologyVersionService) {}

  async getTechnologyVersions(req: Request, res: Response) {
    try {
      const orderBy: string | null = RequestUtils.getOrderByParam(req);
      const results = await this.service.getAll(req, orderBy);

      res.status(200).json(results);
    } catch (err: unknown) {
      if (err instanceof Error) {
        res.status(500).json({ error: err.message });
      } else {
        res.status(500).json({ error: String(err) });
      }
    }
  }

  async getTechnologyVersionById(req: Request, res: Response) {
    try {
      const id: string | null = RequestUtils.getFieldParam(req, "id");
      const orderBy: string | null = RequestUtils.getOrderByParam(req);

      let results = null;
      if (id) {
        results = await this.service.getById(req, id, orderBy);
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

  async getTechnologyVersionsByIdTechnology(req: Request, res: Response) {
    try {
      const id_technology: string | null = RequestUtils.getFieldParam(
        req,
        "id_technology"
      );
      const orderBy: string | null = RequestUtils.getOrderByParam(req);

      let results = null;
      if (id_technology) {
        results = await this.service.getByIdTechnology(
          req,
          id_technology,
          orderBy
        );
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
