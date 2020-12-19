import React from "react";
import image from "../images.jpg";

function Home() {
  return (
    <main>
      <img
        src={image}
        height="100px"
        alt="laptop"
        className="absolute object-cover w-full h-full"
      />
      <div className="three">
        <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
          <h1 className="text-6xl text-green-300 font-bold cursive leading-none lg:leading-snug home-name">
            Iam Muhemin-Ali
          </h1>
        </section>
      </div>
    </main>
  );
}

export default Home;
