import Link from "next/link";
import {FaArrowLeft} from "react-icons/fa";

export default function OurTechnology() {
  return (
    <article className="blog-post">
      <Link href="/blog">
        <p className="flex items-center mb-2">
          <FaArrowLeft className="mr-3" /> Back to Blog Posts
        </p>
      </Link>
      <div className="post-title">
        <h1 className="text-3xl font-bold">Inside Our App's Technology: AI & UI Component Library</h1>
        <p className="">October 29th, 2024</p>
      </div>
      <h2 className="text-2xl font-bold mt-4">AI-Powered Job Matching</h2>
      <p>
        Our app uses AI to go beyond basic keyword matching, focusing instead on aligning each user’s unique skills,
        certifications, and work experience with relevant job listings. This personalized approach allows us to tailor
        job opportunities to match each individual’s qualifications. This provides users a better chance at finding
        roles where they can find long term success.
      </p>
      <h2 className="text-2xl font-bold mt-4">How it Works</h2>
      <ul className="list-disc list-inside ml-5 mb-5">
        <li>
          <span className="font-bold">LLM (Large Language Models):</span> By using LLMs, we can conduct deeper analyses
          of text-based data to create context-aware matches. This capability enables the app to pick up details in job
          descriptions and user qualifications to allow for matches that feel personalized and relevant to each
          individual.
        </li>
        <li>
          <span className="font-bold">Trusted Job Database:</span> We are building a collection of trusted employers
          that are willing to give a second chance to these individuals in need. Using our LLM's to match resumes to
          employment opportunities from our trusted employers, we can ensure that there will be no surprises during the
          interview process and our candidates will be ready to step into the role prepared and ready to work.
        </li>
      </ul>
      <h2 className="text-2xl font-bold mt-4">UI Library: Building with ShadCN for a Seamless User Experience</h2>
      <p>
        To create a UI that’s both modern and accessible, we’ve chosen ShadCN as our component library. ShadCN provides
        a robust set of components that fit our app’s needs, allowing us to design an interface that’s intuitive and
        visually appealing. This is especially important given our diverse user base, which includes people who may be
        unfamiliar with digital tools.
      </p>
      <h3 className="text-xl font-bold mt-4">Why ShadCN?</h3>
      <ul className="list-disc list-inside ml-5 mb-5">
        <li>
          <span className="font-bold">Consistency Across the App:</span> ShadCN provides pre-built components that
          ensure a uniform look and feel, helping users navigate the app with ease.
        </li>
        <li>
          <span className="font-bold">Customization:</span> ShadCN is flexible, allowing us to adapt components to match
          our brand’s aesthetic and values.
        </li>
        <li>
          <span className="font-bold">Responsive Design:</span> ShadCN’s components are optimized for various screen
          sizes, so users will be able to access the app from a desktop, tablet, or mobile device.
        </li>
      </ul>
    </article>
  );
}
