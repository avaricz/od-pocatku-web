import type { Event } from "~/types/types";

export class EventModel {

    id: number
    title: string
    adress: string
    price?: string
    image_url?: string
    description?: string
    reservation_link?: string
    date_start: string
    date_start_day: string
    date_start_month: string
    date_end: string
    time_start: string
    time_end: string
    map_image?: string
    map_url?: string

    constructor (event: Event) {
        this.id = event.id
        this.title = event.title
        this.adress = event.adress
        this.price = event.price
        this.image_url = event.image_url
        this.description = event.description
        this.reservation_link = event.reservation_link

        const startDate = new Date(event.date_start)
        const endDate = new Date(event.date_end)
        this.date_start = startDate.toLocaleDateString('cs-CZ')

        this.date_start_day = startDate.getDate().toString()

        this.date_start_month = startDate.toLocaleDateString('cs-CZ', { month: 'long'})

        this.date_end = endDate.toLocaleDateString('cs-CZ')
        this.time_start = startDate.toLocaleTimeString('cs-CZ', { hour: '2-digit', minute: '2-digit' })
        this.time_end = endDate.toLocaleTimeString('cs-CZ', { hour: '2-digit', minute: '2-digit' })

        this.map_image = event.map_image
        this.map_url = event.map_url



    }
}