/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
        url: 'postgresql://neondb_owner:npg_VRh3vPH2rKuy@ep-cold-snowflake-a5o2grkd-pooler.us-east-2.aws.neon.tech/ai-mock-interviewer?sslmode=require',
    }
};