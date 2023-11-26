import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeader from "@/components/layout/SectionHeader";

const Page = () => {
  return (
    <>
      <Header />
      <Hero />
      <HomeMenu />

      <section className="text-center my-16">
        <SectionHeader subHeader={"Our story"} mainHeader={"About us"} />
        <div className="max-w-md mx-auto mt-4 text-gray-500 flex flex-col gap-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            earum provident officia numquam, harum nam ut autem amet nostrum ab
            voluptate quo aliquam quis doloremque repellendus saepe dolorum
            natus reprehenderit!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae esse
            voluptatem eligendi qui nulla illum molestiae aliquid minus
            quisquam, sed repudiandae dolorem porro consequatur. Hic quaerat
            quas vitae saepe reprehenderit.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro
            fugit minima
          </p>
        </div>
      </section>

      <section className="text-center my-8">
        <SectionHeader subHeader={"Don't hesitate"} mainHeader={"Contact us"} />
        <div className="mt-4">
          <a
            className="text-2xl font-semibold underline text-gray-500"
            href="tel:+6281261423320"
          >
            +62 812 6142 3320
          </a>
        </div>
      </section>

      <footer className="border-t p-8 text-center text-gray-500 mt-16">
        &copy; 2023 All right reserved
      </footer>
    </>
  );
};

export default Page;
