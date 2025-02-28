export default defineEventHandler ( async (event) => {
    const requestBody = await readBody(event)


    const db = useDatabase('events')

    await db.sql`CREATE TABLE IF NOT EXISTS events 
    
    (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        date_start TEXT NOT NULL,
        date_end TEXT NOT NULL,
        adress TEXT NOT NULL,
        price TEXT DEFAULT NULL,
        image_url TEXT DEFAULT NULL,
        description TEXT DEFAULT NULL,
        reservation_link TEXT DEFAULT NULL
    )
        `;

     const result = await db.sql`INSERT INTO events (title, date_start, date_end, adress, price, image_url, description, reservation_link) VALUES (${requestBody.title}, ${requestBody.start}, ${requestBody.end}, ${requestBody.location}, ${requestBody.price}, ${requestBody.image}, ${requestBody.description}, ${requestBody.link})`

     console.log(result)
});