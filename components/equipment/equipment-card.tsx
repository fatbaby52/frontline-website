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
      className="group relative block overflow-hidden border-[3px] border-ink bg-paper transition-all duration-300 hover:-translate-y-1.5 hover:[box-shadow:10px_10px_0_var(--primary)]"
    >
      {/* Type badge */}
      <div className="absolute left-0 top-0 z-10 border-b-[3px] border-r-[3px] border-ink bg-ink px-3 py-1.5 font-mono text-[0.64rem] font-bold uppercase tracking-[0.14em] text-lime">
        Electric
      </div>

      <div className="relative aspect-[4/3] border-b-[3px] border-ink bg-gradient-to-br from-teal-light to-paper">
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
        <p className="font-mono text-[0.64rem] font-bold uppercase tracking-[0.14em] text-primary">{equipment.type}</p>
        <h3 className="mt-1.5 font-heading text-2xl font-semibold uppercase tracking-wide text-foreground transition-colors duration-200 group-hover:text-primary">
          {equipment.name}
        </h3>

        <p className="mt-4 line-clamp-2 text-muted-foreground">
          {equipment.tagline}
        </p>

        <div className="mt-6 flex items-end justify-between border-t-2 border-border pt-5">
          <div>
            <span className="font-heading text-3xl font-semibold text-primary">
              ${equipment.dailyRate}
            </span>
            <span className="text-muted-foreground">/day</span>
          </div>
          <div className="flex h-12 w-12 items-center justify-center border-2 border-ink bg-lime text-ink transition-transform duration-200 group-hover:translate-x-1">
            <ArrowRight className="h-5 w-5" />
          </div>
        </div>
      </div>
    </Link>
  );
}
