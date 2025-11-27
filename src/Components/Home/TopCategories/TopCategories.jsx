"use client";
import Marquee from "react-fast-marquee";

const topCategories = [
  {
    id: 1,
    name: "Farmer",
    description: "Skilled in agriculture and farming work.",
  },
  {
    id: 2,
    name: "Carpenter",
    description: "Expert in woodwork and furniture making.",
  },
  {
    id: 3,
    name: "Electrician",
    description: "Handles electrical wiring and repairs.",
  },
  {
    id: 4,
    name: "Plumber",
    description: "Skilled in pipe installation and plumbing repairs.",
  },
  {
    id: 5,
    name: "Painter",
    description: "Professional wall and decorative painting.",
  },
  {
    id: 6,
    name: "Mason",
    description: "Expert in brickwork and building construction.",
  },
  {
    id: 7,
    name: "Welder",
    description: "Specializes in welding and metal works.",
  },
  {
    id: 8,
    name: "Mechanic",
    description: "Handles vehicle maintenance and repair.",
  },
  {
    id: 9,
    name: "Driver",
    description: "Professional driver for cars, trucks, and machinery.",
  },
  {
    id: 10,
    name: "Labourer",
    description: "General labour work for construction or other tasks.",
  },
];

const TopCategories = () => {
  return (
    <div className="my-20">
      <div>
        <Marquee>
          {topCategories.map((category) => (
            <div
              key={category.id}
              className="shadow-sm p-5 bg-gray-800 rounded-xl space-y-1 mx-4 hover:bg-gray-900"
            >
              <h3 className="text-secondary font-bold text-lg">
                {category?.name}
              </h3>
              <p className="text-accent">{category?.description}</p>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default TopCategories;

// <h2 className="text-xl font-bold flex items-center gap-2">
//     <span className="h-5 w-2 bg-primary  inline-block"></span>Top Categories
//   </h2>
