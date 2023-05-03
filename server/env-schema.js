const { z } = require("zod");

const envSchema = z.object({
  POSTGRES_URL: z.string().url(),
  POSTGRES_PRISMA_URL: z.string().url(),
  POSTGRES_URL_NON_POOLING: z.string().url(),
  POSTGRES_USER: z.string().url(),
  POSTGRES_HOST: z.string().url(),
  POSTGRES_PASSWORD: z.string().url(),
  POSTGRES_DATABASE: z.string().url(),
});

module.exports.envSchema = envSchema;
