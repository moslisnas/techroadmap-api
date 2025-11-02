export class MySqlQueryUtils {
  static buildOrderByClause(orderBy: string | null): string {
    let result: string = "";
    const sort: boolean = orderBy !== null && orderBy !== "";
    const orderByDirection =
      orderBy !== null
        ? orderBy.toLowerCase().includes(".desc")
          ? "DESC"
          : "ASC"
        : "ASC";
    const sortField =
      orderBy !== null
        ? orderBy.toLowerCase().replace(".asc", "").replace(".desc", "")
        : "";
    result = sort ? " ORDER BY " + sortField + " " + orderByDirection : "";

    return result;
  }
}
