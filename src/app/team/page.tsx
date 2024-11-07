import Image from "next/image";
import logo from "../../assets/logo-new.svg";

const teamMembers = [
  {
    name: "Ademi",
    image: logo, // Replace with actual image paths
    description: "Front-end Web Developer.",
  },
  {
    name: "Ahmed",
    image: logo, // Replace with actual image paths
    description: "AI Specialist, Back-end Web Developer",
  },
  {
    name: "Arabella",
    image: logo, // Replace with actual image paths
    description: "UI Designer",
  },
  {
    name: "Christine",
    image: logo, // Replace with actual image paths
    description: "AI Specialist, Full-Stack Web Developer",
  },
  {
    name: "Daniel",
    image: logo, // Replace with actual image paths
    description: "Research, Designer",
  },
  {
    name: "Kelly",
    image: logo, // Replace with actual image paths
    description: "Research, Designer",
  },
  {
    name: "Kyle",
    image: logo, // Replace with actual image paths
    description: "Project Manager, Full-Stack Web Developer",
  },
  {
    name: "Melissa",
    image: logo, // Replace with actual image paths
    description: "UI/UX Designer",
  },
];

export default function Team() {
  return (
    <div className="max-w-3xl mx-auto px-5">
      <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {teamMembers.map((member, index) => (
          <div key={index} className="border rounded-lg p-4 flex flex-col items-center">
            <Image
              src={member.image}
              alt={member.name}
              width={60}
              height={60}
              className="w-32 h-32 rounded-full mb-2"
            />
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-center">{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
