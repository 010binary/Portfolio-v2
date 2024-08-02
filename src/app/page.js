import Hero from "@/components/custom/Hero";

export default function Home() {
  return (
    <>
      <main className="space-y-2 p-6 pt-5 md:px-14 md:pt-10 overflow-scroll">
        <section>
          <Hero />
        </section>

        <div className="text-black font-extrabold w-full h-96 bg-white">
          hello world
        </div>
        <div className="text-black font-extrabold w-full h-96 bg-white">
          hello world
        </div>
        <div className="text-black font-extrabold w-full h-96 bg-white">
          hello world
        </div>
      </main>
    </>
  );
}
