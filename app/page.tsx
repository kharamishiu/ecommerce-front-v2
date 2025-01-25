import { Carrousel } from "@/components/Carrousel";
import CollageImages from "@/components/CollageImages";
import OurCategories from "@/components/OurCategories";
import ProductsPage from "@/components/ProductsPage";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto font-[family-name:var(--font-geist-sans)]">
      <main className="">

        <Carrousel />

        <div className="mx-auto mt-4">
          <OurCategories />
          <CollageImages />
          <ProductsPage />
        </div>
      </main>

    </div>
  );
}
