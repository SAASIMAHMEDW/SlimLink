import LinkTableClient from './LinkTableClient'
import NoLinks from './NoLinks'
import { getLinks } from '../actions'

// interface LinkData {
//     id: number
//     shortUrl: string
//     redirectUrl: string
//     totalClicked: number
//     lastClicked: string | null
//     createdAt: string
// }

// interface ApiResponse {
//     data: LinkData[]
//     total: number
//     limit: number
//     offset: number
//     total_pages: number
//     current_page: number
//     has_next: boolean
//     has_prev: boolean
// }

// async function getLinks(page: number): Promise<ApiResponse> {
//     const limit = 10
//     const offset = (page - 1) * limit

//     const linksData = await database.getUrlsPaginated(limit, offset)
//     const urlCount = await database.getUrlCount()

//     return {
//         data: linksData,
//         total: urlCount,
//         limit,
//         offset,
//         total_pages: Math.ceil(urlCount / limit),
//         current_page: offset / limit + 1,
//         has_next: offset + limit < urlCount,
//         has_prev: offset > 0
//     }
// }

interface LinkTableWrapperProps {
    page: number
}

export default async function LinkTableWrapper({ page }: LinkTableWrapperProps) {
    const linksData = await getLinks(page)

    if (linksData.data.length === 0) {
        return <NoLinks />
    }

    return <LinkTableClient linksData={linksData} />
}
