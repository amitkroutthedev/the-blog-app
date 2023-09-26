import Image from "next/image";
import ThinkingAvatar from "../assets/documents.png"


export default function LoadingScreen() {
  return (
    <div className="relative flex justify-center items-center h-screen">
      <div className="absolute animate-spin rounded-full h-40 w-40 border-t-4 border-b-4 border-purple-500"></div>
      <Image
        src={ThinkingAvatar}
        width={500}
        height={500}
        alt="Picture of the author"
        className="rounded-full h-28 w-28"
      />
    </div>
  );
}
