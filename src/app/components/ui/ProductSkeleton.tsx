// components/ui/ProductSkeleton.tsx
export default function ProductSkeleton() {
  return (
    <div className="animate-pulse space-y-4">
      <div className="bg-gray-200 aspect-[4/5] rounded-2xl w-full" />
      <div className="h-4 bg-gray-200 rounded w-2/3" />
      <div className="h-4 bg-gray-200 rounded w-1/4" />
    </div>
  );
}