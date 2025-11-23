'use server'

import { database } from '@/service/database'

interface LinkData {
    id: number
    shortUrl: string
    redirectUrl: string
    totalClicked: number
    lastClicked: string | null
    createdAt: string
}

interface ApiResponse {
    data: LinkData[]
    total: number
    limit: number
    offset: number
    total_pages: number
    current_page: number
    has_next: boolean
    has_prev: boolean
}

export async function getLinks(page: number): Promise<ApiResponse> {
    const limit = 10
    const offset = (page - 1) * limit

    const linksData = await database.getUrlsPaginated(limit, offset)
    const urlCount = await database.getUrlCount()

    return {
        data: linksData,
        total: urlCount,
        limit,
        offset,
        total_pages: Math.ceil(urlCount / limit),
        current_page: offset / limit + 1,
        has_next: offset + limit < urlCount,
        has_prev: offset > 0
    }
}
