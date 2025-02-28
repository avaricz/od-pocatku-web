import { db } from './index';

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

statement.run(
    'Předporodní kurz: Příprava těla pro porod bez obav',
    '2025-03-08 09:30:00',
    '2025-03-08 11:30:00',
    'RC Klubíčko - Albertova 4062, Kroměříž',
    '250,-',
    null,
    '<p><strong>Kurz pro ženy ve II. trimestru</strong> o tom, jak zůstat v těhotenství fit, být k porodu v co největší formě a zajistit si tak jeho hladký průběh i rychlý návrat zpět do kondice. Prevence diastázy a povoleného pánevního dna!</p><p><strong>Co nás čeká:</strong></p><ul><li>Aktivace coru v těhotenství – význam hlubokého stabilizačního systému</li><li>Aktivace i relaxace pánevního dna</li><li>Dechové techniky pro pevný core i jednotlivé porodní fáze</li><li>Série cviků vhodných v těhotenství</li><li>Cviky na mobilitu pánve pro snadnější porod</li><li>A mnoho dalších užitečných informací</li></ul>',
    'https://od-pocatku.reenio.cz/cs/service/predporodni-kurzy-40417/2025-03-08;viewMode=7-days'
);

statement.run(
    'Předporodní kurz: Porod a vše kolem něj',
    '2025-03-28 15:30:00',
    '2025-03-28 18:30:00',
    'RC Klubíčko - Albertova 4062, Kroměříž',
    '250,-',
    null,
    '<p><strong>Co nás čeká:</strong></p><ul><li>Vše o čtyřech dobách porodních</li><li>Jak se na porod co nejvíc připravit po fyzické i mentální stránce</li> <li>Jak poznat začátek porodu a co dělat pro hladký start</li><li>Jak k porodu zapojit partnera</li><li>Vše o bondingu i porodu placenty</li><li>Jak se zbavit strachu a úzkosti – jak s těmito emocemi pracovat</li><li>Jak si porod užít tak, aby byl pro tebe nezapomenutelným zážitkem</li></ul>',
    'https://od-pocatku.reenio.cz/cs/service/predporodni-kurzy-40417/2025-03-28;viewMode=7-days'
)