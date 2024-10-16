import Image from "next/image";
import Link from "next/link";
import blogImage from "../assets/life-beyond-second-chance-hiring-blog-post-1.jpg";

export default function Blog() {
  return (
    <article className="blog-post">
      <div className="post-title">
        <h1 className="text-3xl font-bold">
          Transforming the Workforce: Introducing a Platform for Second-Chance Employment
        </h1>
        <p className="">October 14th, 2024</p>
      </div>
      <p className="mt-3">
        ReachOut is a platform designed to bridge the gap between organizations helping ex-offenders and employers who
        are open to second-chance hiring. Based on our research, we know many ex-offenders face barriers re-entering
        society, even though they often possess the skills, motivation, and dedication to succeed. At the same time,
        many employers are currently facing labor shortages despite the valuable talent pool that is available. Our
        platform seeks to provide a solution to both those problems.
      </p>
      <Image
        src={blogImage}
        alt="The benefits of second chance hiring"
        width={800}
        height={400}
        className="w-full my-4 rounded-lg shadow"
      />
      <h2 className="text-2xl font-bold mt-4">Our Vision</h2>
      <p>
        Our mission is simple: to reduce recidivism and encourage individuals to rebuild their lives by offering an
        intuitive, data-driven platform that automatically connects qualified candidates with employers. Through our
        program, employers can easily connect with nonprofits dedicated to reintegrating ex-offenders with a complete
        resource database to help them make informed hiring decisions.
      </p>
      <h2 className="text-2xl font-bold mt-4">Key Features</h2>
      <ul className="list-disc list-inside ml-5 mb-5">
        <li>
          <span className="font-bold">Employer Database:</span> A comprehensive database of companies open to
          second-chance hiring practices; searchable by industry, location, and job type.
        </li>
        <li>
          <span className="font-bold">Candidate Profiles:</span> Secure profiles for candidates, managed by
          organizations to showcase their skills, experience, and readiness for work.
        </li>
        <li>
          <span className="font-bold">AI-Driven Job-Matching:</span> AI to connect candidates with the best job
          opportunities based on their skills, experience, and preferences.
        </li>
        <li>
          <span className="font-bold">Integrated Communication:</span> In-app messaging that enables organizations and
          employers to communicate efficiently, track hiring progress, and share necessary documents.
        </li>
        <li>
          <span className="font-bold">Legal Guidance:</span> Up-to-date information on tax incentives, legal guidelines,
          and HR best practices related to second-chance hiring.
        </li>
      </ul>
      <h2 className="text-2xl font-bold mt-4">Why This Matters</h2>
      <p>
        We are passionate about creating a positive social and economic impact with this platform. Each successful hire
        represents a step towards reduced recidivism, stronger community bonds, and a more diverse workforce. By
        investing in second-chance hiring, you’re not just giving someone a job–you’re helping build a better, more
        equitable society.
      </p>
      <h2 className="text-2xl font-bold mt-4">What’s Next?</h2>
      <p>
        As development continues, we look forward to building a network of partners who share our vision of bettering
        lives through employment opportunities. We welcome your feedback and partnership to ensure our platform is as
        effective as possible. Let’s work together to make second chances a reality for thousands of deserving
        individuals!
      </p>
      <h2 className="text-2xl font-bold mt-4">Get in Touch!</h2>
      <p>
        If you’d like to learn more or get involved, please reach out to us{" "}
        <Link href="/contact" className="underline">
          here
        </Link>
        .
      </p>
    </article>
  );
}
