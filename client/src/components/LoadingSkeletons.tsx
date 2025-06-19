import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";

// Hero section skeleton
export const HeroSkeleton = (): JSX.Element => {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      <div className="relative z-10 container mx-auto px-6 lg:px-12 h-screen flex items-center">
        <div className="max-w-4xl space-y-8">
          {/* Premium badge skeleton */}
          <Skeleton className="h-10 w-64 rounded-full bg-gray-700" />
          
          {/* Main heading skeleton */}
          <div className="space-y-4">
            <Skeleton className="h-16 w-full max-w-3xl bg-gray-700" />
            <Skeleton className="h-20 w-full max-w-4xl bg-gray-700" />
            <Skeleton className="h-20 w-3/4 bg-gray-700" />
          </div>

          {/* Description skeleton */}
          <div className="space-y-3">
            <Skeleton className="h-6 w-full max-w-3xl bg-gray-700" />
            <Skeleton className="h-6 w-5/6 bg-gray-700" />
          </div>

          {/* Action buttons skeleton */}
          <div className="flex flex-col sm:flex-row gap-6">
            <Skeleton className="h-14 w-64 rounded-full bg-gray-700" />
            <Skeleton className="h-14 w-48 rounded-full bg-gray-700" />
          </div>

          {/* Stats skeleton */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="text-center space-y-2">
                <Skeleton className="h-10 w-16 mx-auto bg-gray-700" />
                <Skeleton className="h-4 w-20 mx-auto bg-gray-700" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Category card skeleton
export const CategoryCardSkeleton = (): JSX.Element => {
  return (
    <Card className="w-[320px] h-[420px] border-0 rounded-2xl overflow-hidden">
      <CardContent className="p-0 h-full relative">
        <Skeleton className="w-full h-full bg-gray-700" />
        
        {/* Category number skeleton */}
        <div className="absolute top-4 right-4">
          <Skeleton className="w-8 h-8 rounded-full bg-gray-600" />
        </div>

        {/* Content overlay skeleton */}
        <div className="absolute bottom-0 left-0 right-0 p-6 space-y-3">
          <Skeleton className="h-4 w-24 bg-gray-600" />
          <Skeleton className="h-6 w-48 bg-gray-600" />
          <Skeleton className="h-4 w-full bg-gray-600" />
          <Skeleton className="h-4 w-3/4 bg-gray-600" />
          <Skeleton className="h-10 w-32 rounded-full bg-gray-600 mt-4" />
        </div>
      </CardContent>
    </Card>
  );
};

// Shop by category section skeleton
export const ShopByCategorySkeleton = (): JSX.Element => {
  return (
    <section className="relative w-full py-20 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6">
        {/* Section heading skeleton */}
        <div className="text-center mb-16 space-y-6">
          <Skeleton className="h-10 w-64 rounded-full mx-auto bg-gray-700" />
          <Skeleton className="h-12 w-96 mx-auto bg-gray-700" />
          <div className="space-y-2">
            <Skeleton className="h-6 w-full max-w-2xl mx-auto bg-gray-700" />
            <Skeleton className="h-6 w-3/4 mx-auto bg-gray-700" />
          </div>
        </div>

        {/* Category cards skeleton */}
        <div className="flex gap-6 pb-4 overflow-hidden">
          {[...Array(5)].map((_, index) => (
            <CategoryCardSkeleton key={index} />
          ))}
        </div>

        {/* Navigation dots skeleton */}
        <div className="flex justify-center mt-12 gap-3">
          {[...Array(5)].map((_, index) => (
            <Skeleton key={index} className="w-4 h-4 rounded-full bg-gray-700" />
          ))}
        </div>

        {/* Call to action skeleton */}
        <div className="text-center mt-16">
          <Skeleton className="h-14 w-64 rounded-full mx-auto bg-gray-700" />
        </div>
      </div>
    </section>
  );
};

// Before/After section skeleton
export const BeforeAfterSkeleton = (): JSX.Element => {
  return (
    <section className="relative w-full py-20 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6">
        {/* Section heading skeleton */}
        <div className="text-center mb-16 space-y-6">
          <Skeleton className="h-10 w-64 rounded-full mx-auto bg-gray-700" />
          <Skeleton className="h-12 w-80 mx-auto bg-gray-700" />
          <div className="space-y-2">
            <Skeleton className="h-6 w-full max-w-2xl mx-auto bg-gray-700" />
            <Skeleton className="h-6 w-3/4 mx-auto bg-gray-700" />
          </div>
        </div>

        {/* Main content skeleton */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Before/after slider skeleton */}
          <div className="space-y-4">
            <Skeleton className="w-full h-[500px] rounded-2xl bg-gray-700" />
            <Skeleton className="h-4 w-64 mx-auto bg-gray-700" />
          </div>

          {/* Project details skeleton */}
          <div className="space-y-6">
            <div className="space-y-4">
              <Skeleton className="h-8 w-3/4 bg-gray-700" />
              <div className="flex items-center gap-4">
                <Skeleton className="h-5 w-32 bg-gray-700" />
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Skeleton key={i} className="w-4 h-4 bg-gray-700" />
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Skeleton className="h-5 w-full bg-gray-700" />
              <Skeleton className="h-5 w-5/6 bg-gray-700" />
            </div>

            <Skeleton className="h-24 w-full rounded-xl bg-gray-700" />

            <div className="flex gap-6">
              <div className="text-center space-y-2">
                <Skeleton className="h-8 w-16 mx-auto bg-gray-700" />
                <Skeleton className="h-4 w-20 mx-auto bg-gray-700" />
              </div>
              <div className="text-center space-y-2">
                <Skeleton className="h-8 w-16 mx-auto bg-gray-700" />
                <Skeleton className="h-4 w-20 mx-auto bg-gray-700" />
              </div>
            </div>

            <Skeleton className="h-14 w-48 rounded-full bg-gray-700" />
          </div>
        </div>

        {/* Project navigation skeleton */}
        <div className="flex justify-center gap-4">
          {[...Array(3)].map((_, index) => (
            <Skeleton key={index} className="h-20 w-64 rounded-lg bg-gray-700" />
          ))}
        </div>
      </div>
    </section>
  );
};

// Product list skeleton
export const ProductListSkeleton = (): JSX.Element => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 space-y-4">
          <Skeleton className="h-10 w-64 rounded-full mx-auto" />
          <Skeleton className="h-8 w-80 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[...Array(8)].map((_, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-0">
                <Skeleton className="w-full h-48" />
                <div className="p-4 space-y-3">
                  <Skeleton className="h-5 w-3/4" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-2/3" />
                  <div className="flex justify-between items-center">
                    <Skeleton className="h-6 w-20" />
                    <Skeleton className="h-8 w-24 rounded" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

// Testimonials skeleton
export const TestimonialsSkeleton = (): JSX.Element => {
  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 space-y-4">
          <Skeleton className="h-10 w-64 rounded-full mx-auto" />
          <Skeleton className="h-8 w-96 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(3)].map((_, index) => (
            <Card key={index} className="p-6">
              <CardContent className="space-y-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Skeleton key={i} className="w-4 h-4" />
                  ))}
                </div>
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
                <div className="flex items-center gap-3">
                  <Skeleton className="w-12 h-12 rounded-full" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-32" />
                    <Skeleton className="h-3 w-24" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

// Navigation sidebar skeleton
export const NavigationSidebarSkeleton = (): JSX.Element => {
  return (
    <div className="w-80 bg-black text-white border-r-white/20 p-0">
      <div className="flex flex-col h-full">
        <div className="p-6 border-b border-white/20 space-y-4">
          <div className="flex items-center justify-between">
            <Skeleton className="h-12 w-32 bg-gray-700" />
            <Skeleton className="w-8 h-8 bg-gray-700" />
          </div>
          <div className="space-y-2">
            <Skeleton className="h-4 w-48 bg-gray-700" />
            <Skeleton className="h-4 w-40 bg-gray-700" />
          </div>
        </div>

        <div className="flex-1 p-6 space-y-2">
          {[...Array(6)].map((_, index) => (
            <Skeleton key={index} className="h-12 w-full bg-gray-700" />
          ))}
        </div>

        <div className="p-6 border-t border-white/20 space-y-4">
          <div className="flex justify-center gap-4">
            {[...Array(3)].map((_, index) => (
              <Skeleton key={index} className="w-10 h-10 bg-gray-700" />
            ))}
          </div>
          <Skeleton className="h-12 w-full bg-gray-700" />
        </div>
      </div>
    </div>
  );
};