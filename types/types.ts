export interface Event {
    id: number;
    title: string;
    date_start: string;
    date_end: string;
    adress: string;
    price?: string;
    image_url?: string;
    description?: string;
    reservation_link?: string;
}

export interface InfoCard {
    title: string;
    description: string | string[];
    img: string;
}