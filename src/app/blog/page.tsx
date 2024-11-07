import Link from "next/link";

export default function Blog() {
  return (
    <article className="blog-post-list">
      <h1 className="text-3xl font-bold mb-4">Blog Posts</h1>
      <ul className="list-inside ml-5 mb-5">
        <Link href="/blog/posts/job-matching">
          <li className="dark:border border-2 dark:border-white border-slate-700 rounded-md p-2 m-2 max-h-32 overflow-hidden hover:max-h-[300px] transition-all duration-300 ease-in-out transform hover:scale-105">
            <span className="text-lg font-bold">
              How Our App Matches Candidates with the Right Jobs: A Step-by-Step Guide
            </span>
            <p className="">November 5th, 2024</p>
            <p className="mt-2">
              {" "}
              At the heart of our app is an AI-driven job-matching system designed to connect ex-offenders with
              meaningful employment opportunities. Our goal is to make the job search process as seamless and supportive
              as possible, empowering users to find roles that align with their skills, certifications, and career
              goals. Here’s a behind-the-scenes look at how our app’s matching process works—from profile creation to
              landing an interview.
            </p>
          </li>
        </Link>
        <Link href="/blog/posts/our-technology">
          <li className="dark:border border-2 dark:border-white border-slate-700 rounded-md p-2 m-2 max-h-32 overflow-hidden hover:max-h-[300px] transition-all duration-300 ease-in-out transform hover:scale-105">
            <span className="text-lg font-bold">Inside Our App&apos;s Technology: AI & UI Component Library</span>
            <p className="">October 29th, 2024</p>
            <p className="mt-2">
              Our app uses AI to go beyond basic keyword matching, focusing instead on aligning each user’s unique
              skills, certifications, and work experience with relevant job listings. This personalized approach allows
              us to tailor job opportunities to match each individual’s qualifications. This provides users a better
              chance at finding roles where they can find long term success.
            </p>
          </li>
        </Link>
        <Link href="/blog/posts/trust-through-design">
          <li className="dark:border border-2 dark:border-white border-slate-700 rounded-md p-2 m-2 max-h-32 overflow-hidden hover:max-h-[300px] transition-all duration-300 ease-in-out transform hover:scale-105">
            <span className="text-lg font-bold">Building Trust Through Our Design: Logo & Style Guide</span>
            <p>October 21st, 2024</p>
            <p className="mt-2">
              For the design of our web app, we wanted every element to resonate with our core values: trust,
              connection, and support. By carefully choosing colors and imagery that evoke warmth and security, we aimed
              to create an environment where our diverse user base of nonprofit workers, ex-offenders, and employers
              feels safe and empowered. Every design decision was made with these values in mind, ensuring that the app
              not only meets functional needs but also creates a sense of community and understanding.
            </p>
          </li>
        </Link>
        <Link href="/blog/posts/transforming-the-workplace">
          <li className="dark:border border-2 dark:border-white border-slate-700 rounded-md p-2 m-2 max-h-32 overflow-hidden hover:max-h-[300px] transition-all duration-300 ease-in-out transform hover:scale-105">
            <span className="text-lg font-bold">
              Transforming the Workforce: Introducing a Platform for Second-Chance Employment
            </span>
            <p className="">October 14th, 2024</p>
            <p className="mt-2">
              ReachOut is a platform designed to bridge the gap between organizations helping ex-offenders and employers
              who are open to second-chance hiring. Based on our research, we know many ex-offenders face barriers
              re-entering society, even though they often possess the skills, motivation, and dedication to succeed. At
              the same time, many employers are currently facing labor shortages despite the valuable talent pool that
              is available. Our platform seeks to provide a solution to both those problems.
            </p>
          </li>
        </Link>
      </ul>
    </article>
  );
}
