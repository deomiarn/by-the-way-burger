'use client';

import { TabsContent } from '@/components/ui/tabs';
import { MenuItem } from './menu-item';

interface CategoryItem {
  id: string;
  name: string;
  description: string;
  price: string;
}

interface MenuCategoryProps {
  categoryId: string;
  items: CategoryItem[];
}

export function MenuCategory({ categoryId, items }: MenuCategoryProps) {
  return (
    <TabsContent value={categoryId} className="mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item) => (
          <MenuItem
            key={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
          />
        ))}
      </div>
    </TabsContent>
  );
}
