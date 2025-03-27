import BannerDiscount from "@/components/ui/banner-discount";
import CarouselTextBanner from "@/components/ui/carousel-text-banner";
import ChooseCategory from "@/components/ui/choose.category";
import FeaturedProducts from "@/components/ui/featured-product";

export default function Home() {
  return (
    <main>
      <CarouselTextBanner />
      <FeaturedProducts/>
      <BannerDiscount/>
      <ChooseCategory/>
    </main>
  );
}
