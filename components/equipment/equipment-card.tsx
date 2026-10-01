import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { Equipment } from "@/lib/data/equipment";

interface EquipmentCardProps {
  equipment: Equipment;
  priority?: boolean;
}

export function EquipmentCard({ equipment, priority = false }: EquipmentCardProps) {
  return (
    <Link
      href={`/equipment/${equipment.slug}`}
      className="group relative block overflow-hidden border border-border bg-paper transition-colors duration-200 hover:border-primary/40"
    >
      {/* Type badge */}
      <div className="absolute left-0 top-0 z-10 m-3 bg-paper/90 px-2.5 py-1 text-xs font-medium text-primary">
        Electric
      </div>

      <div className="relative aspect-[4/3] border-b border-border bg-white">
        {equipment.image ? (
          <Image
            src={equipment.image}
            alt={equipment.name}
            fill
            className="object-contain p-4 transition-transform duration-500 ease-out group-hover:scale-[1.02]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
            priority={priority}
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjRTBGNEY0Ii8+PC9zdmc+"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <span className="text-sm text-muted-foreground">No image</span>
          </div>
        )}
      </div>

      <div className="p-6">
        <p className="text-xs font-medium text-primary">{equipment.type}</p>
        <h3 className="mt-1.5 font-heading text-2xl font-semibold text-foreground transition-colors duration-200 group-hover:text-primary">
          {equipment.name}
        </h3>

        <p className="mt-4 line-clamp-2 text-muted-foreground">
          {equipment.tagline}
        </p>

        <div className="mt-6 flex items-end justify-between border-t border-border pt-5">
          <div>
            <span className="font-heading text-3xl font-semibold text-primary">
              ${equipment.dailyRate}
            </span>
            <span className="text-muted-foreground">/day</span>
          </div>
          <div className="flex h-10 w-10 items-center justify-center text-primary transition-transform duration-200 group-hover:translate-x-1">
            <ArrowRight className="h-5 w-5" />
          </div>
        </div>
      </div>
    </Link>
  );
}
