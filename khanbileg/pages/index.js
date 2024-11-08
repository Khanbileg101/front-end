import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center items-center w-16 h-16">
       <Image src="/" width={500} height={500} />
    </div>
  );
}
