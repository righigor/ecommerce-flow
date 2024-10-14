import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <main className="max-w-7xl mx-auto space-y-10 px-5 py-10">
      <div className="flex flex-col gap-10 md:flex-row lg:gap-20">
        <div className="basis-2/5">
          <Skeleton className="aspect-square w-full"/>
        </div>
        <div className="basis-3/5 space-y-5">
          <Skeleton className="w-1/2 h-8"/>
          <Skeleton className="w-1/4 h-6"/>
          <Skeleton className="w-1/2 h-6"/>
          <Skeleton className="w-3/4 h-6"/>
        </div>
      </div>
    </main>
  )
}