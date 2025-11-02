import { Request } from "express";
import { TechnologyVersionRepository } from "@repo/TechnologyVersion.repository";
import { TechnologyVersion } from "@interfaces/TechnologyVersion.interface";
import { MySqlQueryUtils } from "@utils/MySqlQueryUtils";

export class TechnologyVersionService {
  constructor(private repo: TechnologyVersionRepository) {}

  async getAll(
    req: Request,
    orderBy: string | null = null
  ): Promise<TechnologyVersion[] | Error> {
    const result: TechnologyVersion[] | null = await this.repo.getAll(
      req,
      MySqlQueryUtils.buildOrderByClause(orderBy)
    );

    if (!result) {
      throw new Error("Technology versions not found");
    }

    return result;
  }

  async getById(
    req: Request,
    id: string,
    orderBy: string | null = null
  ): Promise<TechnologyVersion | Error> {
    const result: TechnologyVersion | null = await this.repo.getById(
      id,
      req,
      MySqlQueryUtils.buildOrderByClause(orderBy)
    );

    if (!result) {
      throw new Error("Technology not found");
    }

    return result;
  }

  async getByIdTechnology(
    req: Request,
    id_technology: string,
    orderBy: string | null = null
  ): Promise<TechnologyVersion[] | Error> {
    const result: TechnologyVersion[] | null =
      await this.repo.getByIdTechnology(
        id_technology,
        req,
        MySqlQueryUtils.buildOrderByClause(orderBy)
      );

    if (!result) {
      throw new Error("Technology versions not found");
    }

    return result;
  }
}
