import Image from "next/image";
import { cn } from "@/lib/cn";

type EditorialImageProps = {
  src: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
  aspectClassName?: string;
  fill?: boolean;
};

export function EditorialImage({
  src,
  alt,
  sizes = "100vw",
  priority = false,
  className,
  aspectClassName = "aspect-[4/3]",
  fill = true,
}: EditorialImageProps) {
  return (
    <div className={cn("image-editorial relative", aspectClassName, className)}>
      <Image
        src={src}
        alt={alt}
        fill={fill}
        priority={priority}
        sizes={sizes}
        className="image-editorial-target object-cover"
      />
    </div>
  );
}
