import Shape from "./Shape";

const heroBg = "/images/hero-bg.jpg";

const HeroArea = () => {
    return (
        <section
            id="hero"
            // style={{backgroundImage: `url(${heroBg})`}}
            style={{ backgroundColor: '#202020' }}
            className="relative bg-cover bg-no-repeat bg-center-top h-[300px] sm:h-[450px] md:h-[500px] lg:h-[600px] xl:h-[800px] flex items-center"
        >
            <div className="container">
                <div className="mt-8 font-light">
                    <h1 className="text-white font-light text-3xl sm:text-[45px] md:text-[55px] leading-none">I'M JEANNE BOULET</h1>
                    <h2 className="text-white font-light text-md sm:text-lg tracking-4 mt-2 sm:mt-4">Engineering student in 5th year at ESIEE PARIS in Computer Science</h2>
                </div>
            </div>

            <Shape className="hidden md:block"/>
        </section>
    );
};

export default HeroArea;
