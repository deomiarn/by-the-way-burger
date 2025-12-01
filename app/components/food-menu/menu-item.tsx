'use client';

interface MenuItemProps {
  name: string;
  description: string;
  price: string;
}

export function MenuItem({ name, description, price }: MenuItemProps) {
  return (
    <div className="flex items-start justify-between gap-2 p-5 rounded-md bg-background/50 hover:bg-background transition-colors border border-border/50">
      <div className="flex-1 min-w-0">
        <h4 className="text-md font-medium text-foreground leading-tight">{name}</h4>
        <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{description}</p>
      </div>
      <span className="text-sm font-medium text-primary whitespace-nowrap">{price}</span>
    </div>
  );
}
