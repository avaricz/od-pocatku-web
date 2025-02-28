export const db = useDatabase('events')

export async function initializeDatabase() {
    await db.sql`
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
    `;

    console.log('Database initialized');
    
//     await db.sql`
//     INSERT OR IGNORE INTO events (title, date_start, date_end, adress, price, image_url, description, reservation_link) 
//     VALUES 
//     ('Předporodní kurz: Příprava těla pro porod bez obav', '2025-03-08 09:30:00', '2025-03-08 11:30:00', 'RC Klubíčko - Albertova 4062, Kroměříž', '250,-', null, '<p><strong>Kurz pro ženy ve II. trimestru</strong> o tom, jak zůstat v těhotenství fit...</p>', 'https://od-pocatku.reenio.cz/cs/service/predporodni-kurzy-40417/2025-03-08;viewMode=7-days'),
//     ('Předporodní kurz: Porod a vše kolem něj', '2025-03-28 15:30:00', '2025-03-28 18:30:00', 'RC Klubíčko - Albertova 4062, Kroměříž', '250,-', null, '<p><strong>Co nás čeká:</strong></p><ul><li>Vše o čtyřech dobách porodních...</li></ul>', 'https://od-pocatku.reenio.cz/cs/service/predporodni-kurzy-40417/2025-03-28;viewMode=7-days')
// `;


    console.log('Default data inserted');
}