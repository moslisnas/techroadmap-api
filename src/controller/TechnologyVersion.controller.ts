import { Request, Response } from "express";
import { TechnologyVersionService } from "@service/TechnologyVersion.service";

export class TechnologyVersionController {
  constructor(private service: TechnologyVersionService) {}

  async getTechnologyVersions(req: Request, res: Response) {
    try {
      const results = await this.service.getAll(req);

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
      const id: string | null = req.query.id
        ? typeof req.query.id == "string"
          ? req.query.id
          : null
        : null;

      let results = null;
      if (id) {
        results = await this.service.getById(req, id);
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
      const id_technology: string | null = req.query.id_technology
        ? typeof req.query.id_technology == "string"
          ? req.query.id_technology
          : null
        : null;

      let results = null;
      if (id_technology) {
        results = await this.service.getByIdTechnology(req, id_technology);
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
