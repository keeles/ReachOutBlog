import Image from "next/image";
import arabellaBlog from "../../assets/ArabellaBlog.jpeg";
import ahmedBlog from "../../assets/AhmedBlog.jpg";
import melissaBlog from "../../assets/MelissaBlog.jpg";
import kellyBlog from "../../assets/KellyBlog.jpg";
import ademiBlog from "../../assets/Ademi-Blog.jpg";
import kyleBlog from "../../assets/Kyle-Blog-2.jpg";
import christineBlog from "../../assets/christine_blog.jpg";
import danielBlog from "../../assets/daniel_blog.png";

const teamMembers = [
  {
    name: "Ademi",
    image: ademiBlog,
    description: "Full-Stack Web Developer | AI Specialist",
  },
  {
    name: "Ahmed",
    image: ahmedBlog,
    description: "Full-Stack Web Developer",
  },
  {
    name: "Arabella",
    image: arabellaBlog,
    description: "UI Designer",
  },
  {
    name: "Christine",
    image: christineBlog,
    description: "Full-Stack Web Developer",
  },
  {
    name: "Daniel",
    image: danielBlog,
    description: "Research, Designer",
  },
  {
    name: "Kelly",
    image: kellyBlog,
    description: "Research, Designer",
  },
  {
    name: "Kyle",
    image: kyleBlog,
    description: "Project Manager, Full-Stack Web Developer",
  },
  {
    name: "Melissa",
    image: melissaBlog,
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
            <div className="w-32 h-32 rounded-full overflow-hidden mb-2">
              <Image src={member.image} alt={member.name} width={200} height={200} className="object-cover" />
            </div>
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-center">{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
