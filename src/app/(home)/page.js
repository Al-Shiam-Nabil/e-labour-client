import Banner from "@/Components/Home/Banner/Banner";
import ExploreBanner from "@/Components/Home/ExploreBanner/ExploreBanner";
import QandA from "@/Components/Home/QandA/QandA";
import Testimonials from "@/Components/Home/Testimonials/Testimonials";
import TopCategories from "@/Components/Home/TopCategories/TopCategories";
import TopLabours from "@/Components/Home/TopLabours/TopLabours";
import Container from "@/Components/Shared/Container";

export const metadata = {
  title: "E-Labour | Home",
  description: "Explore your experience.",
};


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

      {/* top labours */}
      <Container className="bg-base-200 ">
        <TopLabours></TopLabours>
      </Container>

      {/* explore banner */}
      <section className="bg-primary">
        <Container>
          <ExploreBanner></ExploreBanner>
        </Container>
      </section>

      {/*testimonials */}
      <section className="bg-base-200 py-20">
        <Container>
          <Testimonials></Testimonials>
        </Container>

        {/* Q and A Setion */}

        <Container>
          <QandA></QandA>
        </Container>
      </section>
    </div>
  );
}
