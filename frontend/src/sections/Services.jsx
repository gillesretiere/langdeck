import { services } from "../assets/constants";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  return (
    <section id="about-us" className="max-container flex justify-center flex-wrap gap-9">
      {services.map((service) => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </section>
  );
};

export default Services;