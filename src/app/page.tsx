import Image from "next/image";
import coverPhoto from "./assets/reach-out-main-page-cover-photo.jpeg";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Welcome to ReachOut</h1>
      <Image className="mx-auto my-5" src={coverPhoto} alt="" width={700} height={700}></Image>
      <p className="mb-4">
        At ReachOut, we are dedicated to helping individuals who have been incarcerated find meaningful employment. Our
        mission is to ensure a smoother transition back into society and to reduce the chances of re-offending.
      </p>
      <p className="mb-4">
        We understand the challenges that individuals face when reintegrating into the workforce. Our innovative app
        leverages artificial intelligence to connect users with job opportunities tailored to their skills and
        experiences.
      </p>
      <p className="mb-4">
        By partnering with various employers who are committed to second-chance hiring, we aim to provide our users with
        the support and resources they need to rebuild their lives and contribute positively to their communities.
      </p>
      <p>Join us in making a difference and helping individuals take their first steps toward a brighter future!</p>
    </div>
  );
}
