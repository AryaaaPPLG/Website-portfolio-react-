import ProfileCard from "./ProfileCard";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Front-End Developer & UI/UX Designer
            </h3>

            <p className="text-muted-foreground ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet
              nobis aliquid ut. Labore praesentium at esse nobis enim nam culpa!
              Laboriosam mollitia cupiditate soluta similique.
            </p>

            <p className="text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Architecto sequi accusantium cumque magnam. Quia explicabo hic,
              enim iure modi natus!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button cursor-target">
                Hubungi Saya
              </a>
              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 cursor-target"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover ">
              <ProfileCard
                name="Arya Prana Jaya"
                title="Software Engineer"
                handle="Arya"
                status="Write A Code"
                contactText="Contact Me"
                avatarUrl="/path/to/avatar.jpg"
                grainUrl="https://i.pinimg.com/474x/ef/b1/57/efb157823fb1249f8381a2a0b608e95b.jpg"
                showUserInfo={true}
                enableTilt={true}
                enableMobileTilt={false}
                onContactClick={() => console.log("Contact clicked")}
                className="cursor-target"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
