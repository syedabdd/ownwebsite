import Logo from "../logo";

const Footer = () => {
  return (
    <footer className="py-6 sm:py-14 flex items-center justify-center">
      <div className="container">
        <div className="flex flex-col gap-3 items-center text-center">

          {/* Logo with line */}
          <div className="relative flex items-center w-full">
            <div className="flex-grow h-px bg-black" />
            <div className="mx-4">
              <Logo />
            </div>
            <div className="flex-grow h-px bg-black" />
          </div>

          {/* Your Info */}
          <p className="text-secondary text-sm sm:text-base">
            © {new Date().getFullYear()} <span className="text-primary font-medium">Syed Abdullah</span>. All Rights Reserved.
          </p>

          {/* Role */}
          <p className="text-secondary text-sm">
            Full Stack Developer • MERN Stack • Next.js Specialist
          </p>

          {/* Contact Links */}
          <div className="flex gap-4 mt-2 flex-wrap justify-center">
            <a
              href="https://github.com/syedabdd"
              target="_blank"
              className="text-primary hover:underline"
            >
              GitHub
            </a>

            <a
              href="mailto:abdullahsyed574@gmail.com"
              className="text-primary hover:underline"
            >
              Email
            </a>

            <a
              href="https://wa.me/919570026142"
              target="_blank"
              className="text-primary hover:underline"
            >
              WhatsApp
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;