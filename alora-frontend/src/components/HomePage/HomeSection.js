import React from "react";
import "../../styles/index.css";
import "../../styles/App.css";

export default function HomeSection({textLeft, sectionText, imgSrc}) {
  const textDiv = (
  <div class={`flex justify-center items-center lg:py-16 lg:row-start-1 ${textLeft ? "lg:col-start-1" : "lg:col-start-2"}`}>
    <article className={`space-y-4 text-gray-600`}>
      <h2 className="text-3xl text-register-green font-bold sm:text-4xl text-center align-middle">
        {sectionText}
      </h2>
    </article>
  </div>
  );

  const imgSection = (
    <div
    className={
      `
      flex justify-center
      ${textLeft ? "lg:col-start-2" : "lg:col-start-1"}
      `}>
      <img
          alt=""
          src={imgSrc}
          className="object-cover"
      />
    </div>
    
  )

return(
  <section>
      <div class="mx-auto max-w-screen-xl px-4 lg:py-4 sm:px-6 sm:py-12 lg:px-8">
        <div class="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            {imgSection}
            {textDiv}
        </div>
      </div>
    </section>
  
)
}