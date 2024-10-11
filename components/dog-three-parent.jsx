import Image from "next/image";
import IcoMaschio from "@/public/images/ico_maschio.svg";
import IcoFemmina from "@/public/images/ico_femmina.svg";
import Link from "next/link";

const DogThreeParent = ({ data }) => {
  const link = data?.slug.length > 0 ? `/dobermann/${data?.slug}` : "#";
  return (
    <div className="parents-dog__item">
      <Link href={link}>
        <Image
          loading="lazy"
          src={
            data?.featuredImage?.node.sourceUrl ||
            "https://backend.dicasapucci.com/wp-content/uploads/2023/07/placeholder_dobermann_dicasapucci.png"
          }
          className="parents-dog__image"
          alt={data?.title}
          width={100}
          height={100}
        />
        <p
          className="parents-dog__name"
          dangerouslySetInnerHTML={{
            __html: data?.schedaDobermann?.dobNome || "n/a",
          }}
        />
        <p
          className="parents-dog__allevatore"
          dangerouslySetInnerHTML={{
            __html: data?.schedaDobermann?.dobAllevatore || "n/a",
          }}
        />

        <Image
          loading="lazy"
          src={
            data?.schedaDobermann?.dobSex?.name === "Maschio"
              ? IcoMaschio
              : IcoFemmina
          }
          alt="Icona"
          width={50}
          height={50}
          className="parents-dog__icon-sex"
        />
      </Link>
    </div>
  );
};

export default DogThreeParent;
