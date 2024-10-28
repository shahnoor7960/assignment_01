import Link from "next/link";
export default function CostomLink() {
    return (
     <>
     <div>
         <ol>
     <li> <Link href="/country/pakistan">Pakistan</Link></li>
      <li><Link href="/country/india">India</Link></li>
     <li> <Link href="/country/korea">Korea</Link></li>
      <li><Link href="/country/turkey">Turkey</Link></li>
    <li><Link href="/country/japan">Japan</Link></li>
  </ol><hr />
  </div>
    </>
    );
  }
  