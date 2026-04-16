import { ExternalLink, Github, ArrowRight } from "lucide-react";


const projects = [
    {
        // images - folder in public example (public/project1.png)\
        id: 1,
        title: "EliBooks Library Management System",
        description: "A Library Management System built with Java and MySQL. It allows librarians to manage the book inventory and track borrowing and returning history.",
        image:'/elibookspic.png', 
        tags: ["Java", "MySQL"],
        demoURL: "#",
        //githubUrl: "#"

    },
    {
        id: 2,
        title: "Property Rental Management System",
        description: "A property rental management system which allows property owners to manage their rental listings, landlords to manage manager properties and tenants to view their invoices, make payments and allow for conversations with the landlord.",  
        image:'/rentalmspic.png', 
        tags: ["React", "Tailwind CSS", "PostgreSQL","Node.js"],
        /* demoURL: "https://rms-frontend-uo3t.onrender.com/", */
        demoURL: "#",
        //githubUrl: "#"
    },
    {
        id: 3,
        title: "Airline Reservation System",
        description: "An airline reservation system which allows passengers to search for flights, book seats, and manage their reservations.",  
        /* image:'public/airlinemspic.png',  */
        tags: ["HTML/CSS", "PHP", "MySQL"],
        demoURL: "#",
        //githubUrl: "#"
    }
]

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-9 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-45 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <a href={project.demoURL} target="_blank" rel="noopener noreferrer">
                  <h3 className="text-xl font-semibold mb-1 hover:text-primary transition-colors duration-300 cursor-pointer"> {project.title}</h3>
                </a>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                {/* <div className="flex justify-between items-center">
                  <div className="flex space-x-2">
                    <a
                      href={project.demoURL}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a> 
                  </div>
                </div> */}
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
}