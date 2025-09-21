import { Request } from "express";
import { TechnologyRepository } from "@repo/Technology.repository";

export class TechnologyService {
  constructor(private repo: TechnologyRepository) {}

  async getTechnologies(req: Request, dependencies = false) {
    const result: any = await this.repo.getAll(req);

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

  async getTechnology(req: Request, id: string, dependencies = false) {
    const result: any = await this.repo.getById(id, req);

    if (!result) {
      throw new Error("Technology not found");
    }
    if (dependencies) {
      const versions =
        await this.repo.technologyVersionRepository.getByIdTechnology(id, req);
      result.versions = versions;
    }

    return result;
  }
}
