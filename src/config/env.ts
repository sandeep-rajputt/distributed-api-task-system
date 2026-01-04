import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z
    .enum(["production", "development", "test"])
    .default("development"),
  PORT: z.number().min(4).max(4).default(3000),
});

const _env = {
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
};

const parsedEnv = envSchema.safeParse(_env);

if (!parsedEnv.success) {
  console.error("❌ Invalid environment variables");
  process.exit(1);
}

const env = Object.freeze(parsedEnv.data);

export default env;
