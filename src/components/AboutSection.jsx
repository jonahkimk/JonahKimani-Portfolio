import { Code,User,Briefcase } from "lucide-react";

export const AboutSection =() => {
    return (<section id="about" className="relative py-8 px-4">
        {" "}
        <div className="container max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About
                <span className="text-primary md:text-4xl font-bold mb-6"> Me</span>
            </h2>
            

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6"> 
                    <h3 className="text-lg md:text-l text-muted-foreground max-w-2xl mx-auto font-semibold">
                        I'm a passionate software developer
                    </h3>
                    <p className="text-lg md:text-l text-muted-foreground max-w-2xl mx-auto">
                        Specialized in both front-end and back-end technologies.
                        Whether it's building responsive web applications or optimizing performances,
                        I am dedicated to delivering high-quality results that exceed expectations
                        and always a willing learner.  
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button"> Get In Touch</a>
                        <a href="/Jonah Kimani Resume.pdf" download="Jonah_Kimani_Resume.pdf" className="px-6 py-2 rounded-full border-primary text-primary hover:bg-primary/20 transition-colors duration-300 "> Download Resume</a>
                    </div>

                </div> 
                <div className="grid grid-cols-1 gap-4">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <Code className="w-6 h-6 text-primary" /> 
                            </div>
                            <div className="text-left text-md">
                                <h4>Web Development</h4>
                                <p>
                                    Creating real-time responsive web applications using modern frameworks.
                                </p>

                            </div>

                        </div>

                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <User className="w-6 h-6 text-primary" /> 
                            </div>
                            <div className="text-left text-md">
                                <h4>UI/UX Design</h4>
                                <p>
                                    Designing intuitive and visually appealing user interfaces with a focus on usability for seamless user experiences.
                                </p>

                            </div>

                        </div>

                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <Briefcase className="w-6 h-6 text-primary" /> 
                            </div>
                            <div className="text-left text-md">
                                <h4>Project Management</h4>
                                <p>
                                    Working with cross-functional teams and managing projects from conception to delivery, ensuring timely and successful outcomes.
                                </p>

                            </div>

                        </div>
                    </div>

                </div>


            </div>
        </div>

        

    </section>
    );
}