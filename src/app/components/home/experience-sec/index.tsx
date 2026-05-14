import React from 'react';

const ExperienceSec = () => {
    const experiences = [
        {
            year: "Jul 2025 - Present",
            title: "Software Developer (Full Stack - MERN)",
            company: "Efficients Tech",
            type: "Fulltime",
            description: "Developing and maintaining scalable web applications using the MERN stack with TypeScript. Building responsive user interfaces with React.js, Next.js, and Tailwind CSS, integrating APIs, and optimizing performance to deliver high-quality, user-friendly digital products."
        },
        {
            year: "Jan 2025 - Jul 2025",
            title: "Inside Sales Executive",
            company: "UpGrad",
            type: "Fulltime",
            description: "Managed student inquiries, explained course offerings, and drove admissions. Maintained CRM records using LeadSquared and collaborated with teams to ensure a smooth enrollment process while consistently achieving sales targets."
        },
        {
            year: "May 2024 - Sep 2024",
            title: "React Developer Intern",
            company: "OneandO",
            type: "Internship",
            description: "Built and maintained responsive web applications using React.js. Developed reusable components, integrated backend APIs, and improved application performance through code optimization and efficient state management."
        }
    ];

    return (
        <section>
            <div className="py-16 md:py-32">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
                        <h2>Experience</h2>
                        <p className="text-xl text-primary">( 02 )</p>
                    </div>

                    <div className="space-y-7 md:space-y-12">
                        {experiences.map((exp, index) => (
                            <div key={index} className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 md:gap-4 xl:gap-8 items-start relative">
                                <div className="">
                                    <h3 className="font-bold mb-2 text-black">{exp.year}</h3>
                                    <h4 className="text-lg font-normal">{exp.title}</h4>
                                </div>

                                <div className=" relative">
                                    {index < experiences.length && (
                                        <div className={`absolute left-0 top-3 w-px ${index < experiences.length - 1 ? 'h-40' : 'h-30'} bg-softGray`}></div>
                                    )}

                                    <div className="no-print absolute left-0 top-0 transform -translate-x-1/2">
                                        <div className={`no-print w-3.5 h-3.5 rounded-full border-1 bg-white flex items-center justify-center ${index === 0 ? 'border-primary' : 'border-black'
                                            }`}>
                                            {index === 0 && (
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="pl-4 lg:pl-7">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-xl text-black font-normal">{exp.company}</span>
                                        </div>
                                        <p className="text-base font-normal">{exp.type}</p>
                                    </div>
                                </div>

                                <div className="pl-8 sm:pl-0">
                                    <p className="leading-relaxed text-base">{exp.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSec;