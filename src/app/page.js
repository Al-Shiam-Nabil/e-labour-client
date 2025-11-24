import Banner from "@/Components/Home/Banner/Banner";
import ExploreBanner from "@/Components/Home/ExploreBanner/ExploreBanner";
import TopCategories from "@/Components/Home/TopCategories/TopCategories";
import Container from "@/Components/Shared/Container";

export default function Home() {
  return (
    <div>
      <Banner></Banner>

      <Container>
        <TopCategories></TopCategories>
        {/* homepage heading */}
        <div className="space-y-3 my-20">
          <h1 className="text-3xl  font-extrabold text-center">
            All Types of <span className="text-secondary text-5xl">Labour</span>
            , Available Under One Roof
          </h1>
          <p className="text-center max-w-[800px] mx-auto text-gray-600">
            Our labour service platform brings skilled workers and employers
            together under one trusted system, making it easy to find reliable
            labour in just a few clicks.
          </p>
        </div>
      </Container>

      <section className="bg-primary">
        <Container>
          <ExploreBanner></ExploreBanner>
        </Container>
      </section>



    </div>
  );
}
