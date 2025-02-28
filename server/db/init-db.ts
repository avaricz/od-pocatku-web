import { initializeDatabase } from '~/server/db';

export default defineNitroPlugin(async () => {
    console.log('volám')
    await initializeDatabase();
});