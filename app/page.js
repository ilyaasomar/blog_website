import Hero from "@/components/Hero";
import AllPosts from "@components/AllPosts";
import Footer from "@components/Footer";
import TopPosts from "@components/TopPosts";

export default function Home() {
  return (
    <>
      <Hero />
      <TopPosts />
      <AllPosts />
      <Footer />
    </>
  );
}
