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
      className="group relative block overflow-hidden rounded-2xl border-2 border-border bg-white transition-all duration-300 hover:border-primary hover:shadow-2xl hover:shadow-primary/10"
    >
      {/* Type badge */}
      <div className="absolute left-4 top-4 z-10 rounded-lg bg-primary px-3 py-1.5 text-xs font-bold text-white">
        Electric
      </div>

      <div className="relative aspect-[4/3] bg-gradient-to-br from-teal-light to-white">
        {equipment.image ? (
          <Image
            src={equipment.image}
            alt={equipment.name}
            fill
            className="object-contain p-8 transition-transform duration-500 ease-out group-hover:scale-105"
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
        <h3 className="font-heading text-2xl font-bold text-foreground transition-colors duration-200 group-hover:text-primary">
          {equipment.name}
        </h3>
        <p className="mt-1 text-sm font-medium text-muted-foreground">{equipment.type}</p>

        <p className="mt-4 line-clamp-2 text-muted-foreground">
          {equipment.tagline}
        </p>

        <div className="mt-6 flex items-end justify-between">
          <div>
            <span className="text-3xl font-bold text-primary">
              ${equipment.dailyRate}
            </span>
            <span className="text-muted-foreground">/day</span>
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-lime text-primary transition-transform duration-200 group-hover:scale-110">
            <ArrowRight className="h-5 w-5" />
          </div>
        </div>
      </div>
    </Link>
  );
}
