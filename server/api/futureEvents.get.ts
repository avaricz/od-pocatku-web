import { db, initializeDatabase } from '~/server/db';

export default defineEventHandler(async () => {
    await initializeDatabase(); 
    const events = await db.sql`SELECT * FROM events`;
    return events.rows;
});