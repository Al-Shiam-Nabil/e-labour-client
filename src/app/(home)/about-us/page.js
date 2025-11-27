import Container from "@/Components/Shared/Container";
import React from "react";

export const metadata = {
  title: "E-Labour | About Us",
  description: "Explore your experience.",
};


export default function AboutUs() {
  return (
    <Container className="bg-gray-50 py-20">
      <section className="bg-white px-4 py-8 sm:p-10 rounded-2xl">
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-primary mb-10">
          About E-Labour
        </h2>

        <div>
          <p>
            E-Labour is a modern and reliable online platform designed to
            connect skilled labourers with people who need trusted services.
            Whether it’s construction, household work, technical support, or
            daily labour, E-Labour makes hiring simple, fast, and transparent.
            Our mission is to empower workers by giving them a digital space to
            showcase their skills while helping users find verified, dependable
            labourers within minutes. With user-friendly features, real-time
            availability, and clear pricing, E-Labour ensures a safe, smooth,
            and hassle-free hiring experience for everyone.
          </p>

          <br></br>

          <p>
            At E-Labour, we believe that every worker deserves recognition and
            opportunities. Many talented labourers struggle to find jobs because
            they lack proper exposure or a digital identity. Our platform
            bridges that gap by allowing workers to create profiles, highlight
            their experience, and connect directly with employers. This not only
            helps them grow professionally but also ensures fair wages and job
            transparency.
          </p>

          <br></br>

          <p>
            For users, E-Labour offers a seamless experience with verified
            profiles, detailed descriptions, and trusted reviews—ensuring you
            hire the right person with confidence. We are committed to building
            a safe and efficient labour marketplace where reliability, trust,
            and quality service come first. Whether you need a carpenter,
            electrician, plumber, or general worker, E-Labour is your go-to
            solution for hiring skilled labour anytime, anywhere.
          </p>
        </div>
      </section>
    </Container>
  );
}
