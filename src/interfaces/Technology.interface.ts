import { RowDataPacket } from "mysql2";
import { TechnologyVersion } from "@interfaces/TechnologyVersion.interface";

export interface Technology extends RowDataPacket {
  name: string;
  description: string;
  url: string;
  logo_path: string;
  color_primary: string;
  color_secondary: string;
  versions: TechnologyVersion[];
}
