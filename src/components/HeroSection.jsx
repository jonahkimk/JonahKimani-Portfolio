import { ArrowDown,ArrowRight } from "lucide-react";


export const HeroSection = () => {
    return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">

        <div className="container max-w-4xl mx-auto text-center z-10">
            <div className="space-y-6">
                <h1 className="text-4xl md:text-3xl font-bold tracking-tight">
                    <span className="opacity-0 animate-fade-in"> Hi I'm </span>
                    <span className="text-primary opacity-0 animate-fade-in-delay-1">{" "} Jonah</span>
                    <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">{""} Kimani</span>
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                    I'm a passionate software developer with the desire to craft software solutions to complex problems using modern technologies.
                     Specialized in both front-end and back-end technologies.
                       Whether it's building responsive web applications or optimizing performances,
                        I am dedicated to delivering high-quality results that exceed expectations
                        and always a willing learner.  
                </p>

                <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                    <a href = "#projects" className="cosmic-button"> View My Work</a>
                </div>

                 <div className="opacity-0 animate-fade-in-delay-4 pt-8">
                    <a
                        className="cosmic-button w-fit flex items-center mx-auto gap-2"
                        target="_blank"
                        href="https://github.com/jonahkimk"
                    >
                        Check My Github <ArrowRight size={16} />
                    </a>
                </div>  
                 

            </div>

        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce ">
        <span className="text-sm text-muted-foreground mb-2 animate-fade-in-delay-4">
            Scroll
        </span>
        <ArrowDown className="w-5 h-6 text-primary animate-fade-in-delay-4" />
        
        </div>
        </section>

    );

};