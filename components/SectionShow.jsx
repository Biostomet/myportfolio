import Link from "next/link";
import React from "react";
import CardRealisation from "./cards/CardRealisation";

export default function SectionShow({ projets }) {
  // console.log(projets);
  return (
    <div id="projects" className="mt-36">
      <h1 className="uppercase font-bold text-3xl text-center mt-24">
        Screen de mes projets
      </h1>
      <div className="grid grid-cols-2 space-x-5">
        {projets.map((projet) => (
          <Link href={`projets/${projet.fields.slug}`} key={projet.sys.id}>
            <a>
              <CardRealisation projet={projet} />
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}
