import Banner from "@/Components/Home/Banner/Banner";
import TopCategories from "@/Components/Home/TopCategories/TopCategories";
import Container from "@/Components/Shared/Container";


export default function Home() {
  return (
  <div>
  <Banner></Banner>
  
 <Container>
  <TopCategories></TopCategories>
   <h1 className="text-3xl font-bold text-center">All Types of Labour, Available Under One Roof</h1>
 </Container>

  </div>
  );
}
