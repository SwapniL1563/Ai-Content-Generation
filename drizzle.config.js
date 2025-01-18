import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./utils/schema.tsx",
  dbCredentials:{
    url:NEXT_PUBLIC_DRIZZLE_DB_URL,
  }
});
