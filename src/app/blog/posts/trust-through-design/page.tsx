import Image from "next/image";
import LogoSVG from "../../../../assets/logo-new.svg";
import officeWorkers from "../../../../assets/reach-out-main-page-cover-photo.jpeg";
import labourWorkers from "../../../../assets/happy_people_workers 1.jpg";
import colorPalette from "../../../../assets/reach-out-blog-color-palette.svg";
import fontFam from "../../../../assets/reach-out-blog-font-family.jpg";
import styleTile from "../../../../assets/Style_Tile2.0.jpg";
import {FaArrowLeft} from "react-icons/fa";
import Link from "next/link";

export default function TrustThroughDesign() {
  return (
    <article className="blog-post">
      <Link href="/blog">
        <p className="flex items-center mb-2">
          <FaArrowLeft className="mr-3" /> Back to Blog Posts
        </p>
      </Link>
      <div className="post-title">
        <h1 className="text-3xl font-bold">Building Trust Through Our Design: Logo & Style Guide</h1>
        <p>October 21st, 2024</p>
      </div>
      <div className="flex flex-col place-items-center">
        <Image src={LogoSVG} width={500} height={500} alt="" className="m-2" />
      </div>
      <p className="mt-3">
        For the design of our web app, we wanted every element to resonate with our core values: trust, connection, and
        support. By carefully choosing colors and imagery that evoke warmth and security, we aimed to create an
        environment where our diverse user base of nonprofit workers, ex-offenders, and employers feels safe and
        empowered. Every design decision was made with these values in mind, ensuring that the app not only meets
        functional needs but also creates a sense of community and understanding.
      </p>
      <h2 className="text-2xl font-bold mt-4">Logo Concept</h2>
      <p className="mt-3">
        Our logo is the visual cornerstone of our brand. It evokes care by using two mirrored hands to form a protective
        arch. This design subtly conveys a message of <span className="font-bold">support</span> and mutual{" "}
        <span className="font-bold">trust</span>—the foundation of any second-chance hiring initiative. The hands also
        reflect <span className="font-bold">connections</span> between our key user groups. By forming a circle, it
        represents support, suggesting unity and a shared purpose. This symbol speaks directly to the core of our
        mission, reinforcing the idea that finding employment for ex-offenders is a collective effort that involves
        compassion, responsibility, and dedication from everyone involved. The hands themselves form the bird’s wings,
        open and ready to lift someone toward a better future. Meanwhile, the space created inside the hands shapes the
        outline of a bird in flight, representing the idea of liberation and the possibility of starting anew.
      </p>
      <h2 className="text-2xl font-bold mt-4">Imagery</h2>
      <div className="flex flex-wrap items-center justify-evenly my-2">
        <Image src={labourWorkers} width={250} height={250} alt="" className="m-2" />
        <Image src={officeWorkers} width={250} height={250} alt="" className="m-2" />
      </div>
      <p className="mt-3">
        We selected photos that capture real-world settings with diverse teams working together and people in hands-on,
        skilled work environments. These images remind users that this app isn’t just about technology—it’s about real
        people, real stories, and real opportunities. Whether you're an employer looking to diversify your team, a
        nonprofit worker championing someone’s second chance, or an individual ready to start anew, these images
        resonate with the heart of our values.
      </p>
      <h2 className="text-2xl font-bold mt-4">
        <div className="flex flex-col place-items-center">
          <Image src={colorPalette} width={800} height={250} alt="" className="m-2" />
        </div>
      </h2>
      <p className="mt-3">
        Drawing inspiration from the imagery above, our color choices bring warmth and openness to the app’s visual
        identity. The palette includes:
      </p>
      <ul className="list-disc list-inside ml-5 mb-5">
        <li>
          <span className="font-bold">Orchid Pink (#EB96C4)</span>: This light, welcoming pink represents empathy and
          the approachability of our app.
        </li>
        <li>
          <span className="font-bold">Caribbean Current (#296653)</span>: A deep green that symbolizes growth and
          renewal, aligning with the personal and professional growth our users are aiming for.
        </li>
        <li>
          <span className="font-bold">YInMn Blue (#374769)</span>: This rich blue conveys calm and reliability,
          grounding the design with a sense of trust and resilience.
        </li>
        <li>
          <span className="font-bold">Space Cadet (#222A41)</span>: A deep, nearly black shade that adds strength and
          professionalism, creating a secure and dependable feel.
        </li>
      </ul>
      <p className="mt-3">
        This combination of colors provides a calming yet optimistic feel, balancing hope and security. We’ve also
        incorporated neutral tones of black and white to keep the design clean and accessible.
      </p>
      <h2 className="text-2xl font-bold mt-4">Typography</h2>
      <div className="flex flex-col place-items-center">
        <Image src={fontFam} width={800} height={250} alt="" className="m-2" />
      </div>
      <p className="mt-3">
        Our chosen fonts, Roboto and Montserrat, are modern, approachable, and highly readable, aligning with our app’s
        goal of being both trustworthy and welcoming. These fonts provide several advantages that enhance the user
        experience:
      </p>
      <ul className="list-disc list-inside ml-5 mb-5">
        <li>
          <span className="font-bold">Accessibility</span>: Both fonts are highly legible on screens, even at smaller
          sizes—crucial for users with varying levels of digital literacy. Roboto's clean, straightforward lines make it
          easy to read, while Montserrat’s slightly rounded edges add a friendly touch without sacrificing clarity.
        </li>
        <li>
          <span className="font-bold">Font Family Variety</span>: With a wide range of weights and styles (bold,
          regular, light, italic, etc.), Roboto and Montserrat allow us to create an organized visual hierarchy, making
          it easy to highlight important content and guide the user’s attention.
        </li>
        <li>
          <span className="font-bold">Cross-Platform Consistency</span>: As widely available Google Fonts, Roboto and
          Montserrat are compatible across different devices and browsers. This ensures a seamless and consistent
          experience for all users, no matter their platform.
        </li>
      </ul>
      <h2 className="text-2xl font-bold mt-4">Summary</h2>
      <div className="flex flex-col place-items-center">
        <Image src={styleTile} width={800} height={250} alt="" className="m-2" />
      </div>
      <p className="mt-3">
        Through our logo, imagery, color palette, and typography we’ve created a cohesive design language that
        communicates connection, trust, and support. Our style tile ensures consistency across the app, making it easier
        for our users to navigate, interact, and, ultimately, find the opportunities they’re seeking. We want this web
        app to be more than a job portal but also a support hub for those ready to rebuild. Every visual choice
        reinforces our commitment to helping people forge new paths, create connections, and build futures rooted in
        trust and support.
      </p>
    </article>
  );
}
