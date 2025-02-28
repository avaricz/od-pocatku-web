import { db, initializeDatabase } from '~/server/db';

export default defineEventHandler ( async (event) => {
    await initializeDatabase()

    const requestBody = await readBody(event)

    await db.sql`INSERT INTO events (title, date_start, date_end, adress, price, image_url, description, reservation_link) VALUES (${requestBody.title}, ${requestBody.start}, ${requestBody.end}, ${requestBody.location}, ${requestBody.price}, ${requestBody.image}, ${requestBody.description}, ${requestBody.link})`

    return { success: true }

});