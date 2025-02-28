import Database from 'better-sqlite3';
// import { createDatabase } from "db0";

export default defineEventHandler ( async (event) => {
    // const config = useRuntimeConfig();
    // const db = new Database(config.databasePath);

    const db = new Database('.data/events-db.sqlite3')

    // const db = createDatabase(
    //     sqlite({
    //       name: ".data/events-db.sqlite3",
    //     }),
    //   );

    const requestBody = await readBody(event);
    console.log(requestBody);

    db.prepare(`
        CREATE TABLE IF NOT EXISTS events (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            date_start TEXT NOT NULL,
            date_end TEXT NOT NULL,
            adress TEXT NOT NULL,
            price TEXT DEFAULT NULL,
            image_url TEXT DEFAULT NULL,
            description TEXT DEFAULT NULL,
            reservation_link TEXT DEFAULT NULL
        );
    `).run();

    const statement = db.prepare(
        'INSERT INTO events (title, date_start, date_end, adress, price, image_url, description, reservation_link) VALUES (?, ?, ?, ?, ?, ?, ?, ?)'
    );

    const result = statement.run(
        requestBody.title,
        requestBody.start,
        requestBody.end,
        requestBody.location,
        requestBody.price,
        requestBody.image,
        requestBody.description,
        requestBody.link
    );

    console.log(result);

    return { success: true, insertedId: result.lastInsertRowid };
});