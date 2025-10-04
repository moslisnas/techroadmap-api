import { Request } from "express";
import { TechnologyVersionRepository } from "@repo/TechnologyVersion.repository";
import { TechnologyVersion } from "@interfaces/TechnologyVersion.interface";

export class TechnologyVersionService {
  constructor(private repo: TechnologyVersionRepository) {}

  async getAll(req: Request): Promise<TechnologyVersion[] | Error> {
    const result: TechnologyVersion[]|null = await this.repo.getAll(req);

    if (!result) {
      throw new Error("Technology versions not found");
    }

    return result;
  }

  async getById(req: Request, id: string): Promise<TechnologyVersion | Error> {
    const result: TechnologyVersion|null = await this.repo.getById(id, req);

    if (!result) {
      throw new Error("Technology not found");
    }

    return result;
  }

  async getByIdTechnology(
    req: Request,
    id_technology: string
  ): Promise<TechnologyVersion[] | Error> {
    const result: TechnologyVersion[]|null = await this.repo.getByIdTechnology(
      id_technology,
      req
    );

    if (!result) {
      throw new Error("Technology versions not found");
    }

    return result;
  }
}
