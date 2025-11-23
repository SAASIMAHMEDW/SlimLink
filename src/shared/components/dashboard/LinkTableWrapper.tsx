import LinkTableClient from "./LinkTableClient";
import NoLinks from "./NoLinks";

interface LinkData {
  id: number;
  shortUrl: string;
  redirectUrl: string;
  totalClicked: number;
  lastClicked: string | null;
  createdAt: string;
}

interface ApiResponse {
  data: LinkData[];
  total: number;
  limit: number;
  offset: number;
  total_pages: number;
  current_page: number;
  has_next: boolean;
  has_prev: boolean;
}

async function getLinks(page: number): Promise<ApiResponse> {
  const limit = 10;
  const offset = (page - 1) * limit;

  const res = await fetch(
    `http://localhost:3000/api/links?limit=${limit}&offset=${offset}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch links");
  }

  return res.json();
}

interface LinkTableWrapperProps {
  page: number;
}

export default async function LinkTableWrapper({
  page,
}: LinkTableWrapperProps) {
  const linksData = await getLinks(page);

  if (linksData.data.length === 0) {
    return <NoLinks />;
  }

  return <LinkTableClient linksData={linksData} />;
}
