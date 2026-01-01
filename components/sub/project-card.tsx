import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  link: string;
};

export const ProjectCard = ({
  src,
  title,
  description,
  link,
}: ProjectCardProps) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      className="relative flex flex-col overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] hover:scale-105 transition-all duration-300 h-full"
    >
      <div className="w-full h-[200px] relative">
        <Image
          src={src}
          alt={title}
          fill
          className="object-cover rounded-t-lg"
        />
      </div>
      <div className="flex flex-col p-4 flex-1">
        <h1 className="text-xl font-semibold text-white">
          {title}
        </h1>

        <p className="mt-2 text-gray-300 text-sm line-clamp-4">
          {description}
        </p>

        <span className="mt-auto text-purple-400 text-sm pt-3">
          View Project →
        </span>
      </div>
    </Link>
  );
};
