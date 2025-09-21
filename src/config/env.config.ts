import { z } from "zod";

process.loadEnvFile();

const envSchema = z.object({
    NODE_ENV: z.string().min(3, "Need to identify enviroment via NODE_ENV"),
    API_PORT: z.string().min(1, "Need to indicate the port to serve this application via API_PORT"),
    API_VERSION: z.string().min(1, "Need to indicate the API version to serve this application"),
    DATABASE_HOST: z.string().min(3, "Need to identify database hostname via DATABASE_HOST"),
    DATABASE_PORT: z.string().min(1, "Need to indicate the port of the database accessed via DATABASE_PORT"),
    DATABASE_NAME: z.string().min(3, "Need to indicate database name via DATABASE_NAME"),
    DATABASE_USERNAME: z.string().min(3, "Need to indicate database username to access database via DATABASE_USERNAME"),
    DATABASE_PASSWORD: z.string().min(3, "Need to indicate database password to access database via DATABASE_PASSWORD")
});

const { success, error, data } = envSchema.safeParse(process.env);

if(!success){
    console.log("Environment variable errors: ", error.format());
    process.exit(1); //Stop execution, not valid variables
}

export const {
    NODE_ENV,
    API_PORT,
    API_VERSION,
    DATABASE_HOST,
    DATABASE_PORT,
    DATABASE_NAME,
    DATABASE_USERNAME,
    DATABASE_PASSWORD
} = data;