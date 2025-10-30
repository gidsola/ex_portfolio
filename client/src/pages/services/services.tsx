
import { useEffect, useState } from 'react';
import './services.css';

type Service = {
  title: string;
  description: string;
  technologies: string[],
  icon: string;
};
interface ServicesPageData {
  intro: string;
  offered: Service[]
};

export default function Services() {

  const [servicesData, setServicesData] = useState<ServicesPageData>({
  intro: '',
  offered: []
});

  useEffect(() => {
    async function fetchServices() {
      const res = await fetch('/api/services');
      if (res.ok) {
        const data = await res.json();
        // console.log("Datas: ", data);
        setServicesData(data);
      } else {
        console.log("Failed to fetch services");
      }
    }
    fetchServices();
  }, []);


  return (
    <div className="page">
      <div className="page-container">
        <h1 className="section-title">My Services</h1>
        <p className="section-intro">{servicesData.intro}</p>
        <div className="grid">

          {servicesData.offered.map((service, index) => (
            <div key={index} className="card cardhover">
              <div className="card-icon">{service.icon}
                <h3 className="card-title">{service.title}</h3>
              </div>
              <p className="card-description">{service.description}</p>
              <div className="card-technologies">
                <h4>Technologies</h4>
                <div className="card-tags">
                  {service.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="card-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="cta">
          <h2>Ready to start your project?</h2>
          <p>From initial concept to final deployment, I can help bring your ideas to life.</p>
          <a href="/contact" className="btn btn-primary">Get in Touch</a>
        </div>
      </div>
    </div>
  );
};
