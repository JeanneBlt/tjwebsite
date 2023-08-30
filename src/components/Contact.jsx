import SocialMedia from "./SocialMedia";
import ContactForm from "./ContactForm";
import SectionTitle from "./SectionTitle";

const Contact = () => {
    return (
        <section className="py-[100px]" id="contact">
            <div className="container">
                <SectionTitle
                    title="Get In Touch"
                />
{/* test */}
                <div className="grid grid-cols-1 md:grid-cols-12">
                    <div className="col-span-5">
                        <div className="font-medium space-y-2">
                            <p>jeanne.boulet@edu.esiee.fr</p>
                            <p>+(33)619190699</p>
                        </div>

                        <SocialMedia className="mt-6 md:mt-10"/>
                    </div>

                    <div className="col-span-7 mt-10 md:mt-0">
                        <ContactForm/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
