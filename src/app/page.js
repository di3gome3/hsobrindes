import AboutSection from "@/components/AboutSection";
import Banner from "@/components/Banner";
import CategoryCarousel from "@/components/CategoriesCarousel";
import CreateSection from "@/components/Create Section";
import Header from "@/components/Header";
import ProductsSection from "@/components/ProductsSection";
import ReviewsSection from "@/components/Reviews";


export default function Home() {
  return (
    <>
    <Header />
    {/* <AboutSection /> */}
    {/* <CreateSection /> */}
    <ProductsSection />
    <CategoryCarousel/>
    <ReviewsSection/>
    <Banner/>
    </>
  );
}
