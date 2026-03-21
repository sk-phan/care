
import { BASE_URL } from '@/common/api/api-base';

import { ItemType } from '@/common/types/item/item.type';
import HomeView from '@/features/home/home-view';

const PAGE = 1;
const LIMIT = 6;

export default async function Home() {
  const response = await fetch(BASE_URL + `/items?page=${PAGE}&limit=${LIMIT}`, {
    cache: 'force-cache'
  });
  const data = await response.json();

  const items: ItemType[] = data.entities || [];

  return <HomeView items={items} />
}