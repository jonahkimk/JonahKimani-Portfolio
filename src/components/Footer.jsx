import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <section className="py-12 px-4 relative mt-12 pt-8 ">
      {" "}
      <p className="text-sm text-center">
        {" "}
        &copy; {new Date().getFullYear()} Jonah Kimani.co. All rights reserved.
      </p>
      <a
        href="#hero"
        className="absolute bottom-8 right-10 p-2 rounded-full 
               bg-primary/10 hover:bg-primary/20 text-primary 
               transition-colors"
      >
        <ArrowUp size={30} />
      </a>
    </section>
  );
};