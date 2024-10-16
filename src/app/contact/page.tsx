import Link from "next/link";

export default function ContactPage() {
  return (
    <main>
      <div className="contact-form mt-5">
        <h1 className="text-3xl font-bold">Contact Reach Out</h1>
        <p className="mt-3">
          Reach Out is a group of BCIT students that are working to help people who have been released from prison find
          meaningful employment.
          <br></br>
          <br></br>
          We are looking to assist with organizations that are already helping people who have been incarcerated to find
          jobs, by making this time consuming process much easier. Our app uses AI to match candidates with the best
          fitting employment opportunity available at one of our industry partnered companies.
        </p>
        <h3 className="text-xl py-3">E-mail Inquiries:</h3>
        <ul>
          <li>
            <p className="mt-3">
              <Link href="mailto:keeles1@my.bcit.ca" className="text-blue-600">
                For Businesses looking to get involved
              </Link>
            </p>
          </li>
          <li>
            <p className="mt-3">
              <Link href="mailto:keeles1@my.bcit.ca" className="text-blue-600">
                For Organizations looking learn more about our product
              </Link>
            </p>
          </li>
          <li>
            <p className="mt-3">
              <Link href="mailto:keeles1@my.bcit.ca" className="text-blue-600">
                General Information
              </Link>
            </p>
          </li>
        </ul>
      </div>
    </main>
  );
}