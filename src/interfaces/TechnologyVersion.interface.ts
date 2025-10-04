import { RowDataPacket } from "mysql2";

export interface TechnologyVersion extends RowDataPacket {
  name: string;
  description: string;
  release_date: Date;
  url?: string;
  lts?: boolean;
}
