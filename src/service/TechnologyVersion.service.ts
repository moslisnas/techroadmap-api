import { Request } from "express";
import { TechnologyVersionRepository } from "src/repository/TechnologyVersion.repository";

export class TechnologyVersionService {
  constructor(private repo: TechnologyVersionRepository) {}

  async getAll(req: Request) {
    const result: any = await this.repo.getAll(req);

    if (!result) {
      throw new Error("Technology versions not found");
    }

    return result;
  }

  async getById(req: Request, id: string) {
    const result: any = await this.repo.getById(id, req);

    if (!result) {
      throw new Error("Technology not found");
    }

    return result;
  }

  async getByIdTechnology(req: Request, id_technology:string) {
    const result: any = await this.repo.getByIdTechnology(id_technology, req);

    if (!result) {
      throw new Error("Technology versions not found");
    }

    return result;
  }
}