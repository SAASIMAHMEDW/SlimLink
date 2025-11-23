import { Suspense } from 'react'

import { DashboardClient, ShowLinks, LinkTableSkeleton } from '@/shared/components/dashboard/ui'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Dashboard',
    description: 'Manage your short links'
}

interface PageProps {
    searchParams: { page?: string }
}

export default async function DashboardPage({ searchParams }: PageProps) {
    const { page } = await searchParams
    const currentPage = parseInt(page || '1')

    return (
        <div className="sm:mx-10 md:mx-15 lg:mx-15">
            <DashboardClient>
                <Suspense fallback={<LinkTableSkeleton />}>
                    <ShowLinks page={currentPage} />
                </Suspense>
            </DashboardClient>
        </div>
    )
}
