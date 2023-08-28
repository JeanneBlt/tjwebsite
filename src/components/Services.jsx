import Service from "./Service";
import services from "../data/services.json";
import Shape from "./Shape";

const Services = () => {

    const otherServices = services.filter(service => service.title !== "Education");
    return (
        <section className="service-area relative pb-[100px] lg:pb-[200px]" id="services">
            <div className="container">
                {/* Bloc d'éducation */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mb-5">
                    <div className="col-span-1 md:col-span-3 service group relative flex px-3 py-5 rounded-md duration-300 hover:bg-gray-50 before:absolute before:left-10 before:top-9 before:h-[calc(100%-60px)] before:w-[1px] before:bg-gray-300 after:absolute after:left-9 after:bottom-4 after:h-[10px] after:w-[10px] after:rounded-full after:bg-gray-300">
                        <div className="mr-4 bg-white group-hover:bg-gray-50 relative flex-shrink-0 self-start w-[50px] md:w-auto">
                        <img src="images/education-logo.png"/>
                        </div>
                        <div>
    <h2 className="font-semibold text-base mb-1">Education</h2>
    <div className="flex flex-col md:flex-row">
        <p className="mr-2 mb-1 md:mb-0 font-semibold"><span className="date-placeholder">Since September 2021</span></p>
        <p className="md:mb-0"><span className="font-semibold">ESIEE Paris Noisy-Le-Grand</span><br/>First year of engineering cycle Computer engineering school</p>
        <p></p>
    </div>
    <div className="flex flex-col md:flex-row">
        <p className="mr-2 mb-1 md:mb-0 font-semibold"><span className="date-placeholder">From September 2019 to July 2021</span></p>
        <p className="md:mb-0"><span className="font-semibold">Mistral High School Villeneuve les Avignon</span><br />A two year post-A secondary level course Preparation for the competitive entrance exams for M.Sc courses at engineering universities</p>
        <p></p>
    </div>
    <div className="flex flex-col md:flex-row">
        <p className="mr-2 mb-1 md:mb-0 font-semibold"><span className="date-placeholder">From September 2018 to July 2019</span></p>
        <p className="md:mb-0"><span className="font-semibold">Jean Vilar High School Villeneuve les Avignon</span><br />National Secondary level diploma Specialization in math and physics</p>
    </div>
</div>

                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-7">
                {Array.isArray(otherServices) && otherServices.map(service => (
    <Service
        key={service.id}
        desc={<div className="bio-text" dangerouslySetInnerHTML={{__html: service.desc}}/>}
        title={service.title}
        thumb={`/images/${service.icon}`}
    />
))}

                </div>
            </div>
            <Shape fillColor="#F9FAFB"/>
        </section>
    );
};

export default Services;
