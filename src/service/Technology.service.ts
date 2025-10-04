import { Request } from "express";
import { TechnologyRepository } from "@repo/Technology.repository";
import { Technology } from "@interfaces/Technology.interface";
import { TechnologyVersion } from "@interfaces/TechnologyVersion.interface";

export class TechnologyService {
  constructor(private repo: TechnologyRepository) {}

  async getAll(
    req: Request,
    dependencies = false
  ): Promise<Technology[] | Error> {
    const result: Technology[]|null = await this.repo.getAll(req);

    if (!result) {
      throw new Error("Technologies not found");
    }
    /*if (dependencies) {
    // TODO: Add iterations
      const versions = await this.repo.technologyVersionRepository.getVersionsByTechnologyId(id);
      result.versions = versions;
    }*/

    return result;
  }

  async getById(
    req: Request,
    id: string,
    dependencies = false
  ): Promise<Technology | Error> {
    const result: Technology|null = await this.repo.getById(id, req);

    if (!result) {
      throw new Error("Technology not found");
    }
    if (dependencies) {
      const versions: TechnologyVersion[] =
        await this.repo.technologyVersionRepository.getByIdTechnology(id, req);
      result.versions = versions;
    }

    return result;
  }
}
