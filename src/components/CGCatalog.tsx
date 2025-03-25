import Link from "next/link";
import Card from "./Card";
import { cgJson } from "../../interface";
import { cgItem } from "../../interface";

export default function CGCatalog({ cgJson }: { cgJson: cgJson }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        width: "100%",
        padding: "10px",
        border: "20px",
      }}
    >
      <div
        style={{
          fontSize: "1.2rem",
          fontWeight: "normal",
          marginBottom: "50px",
        }}
      >
        Explore {cgJson.count} Campgrounds in our catalog
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          width: "100%",
        }}
      >
        {cgJson.data.map((cgItem: cgItem) => (
          <Link
            href={`/campground/${cgItem.id}`}
            style={{
              width: "300px",
              textDecoration: "none",
            }}
            key={cgItem.id}
          >
            <Card cgName={cgItem.name} imgSrc={cgItem.picture} />
          </Link>
        ))}
      </div>
    </div>
  );
}
