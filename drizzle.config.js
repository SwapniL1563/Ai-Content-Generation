import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./utils/schema.tsx",
  dbCredentials:{
    url:"postgresql://aiOutput_owner:nzKbN8j6rCcZ@ep-billowing-frog-a5jxta5e.us-east-2.aws.neon.tech/aiOutput?sslmode=require"
  }
});
