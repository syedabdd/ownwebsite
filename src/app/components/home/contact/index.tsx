"use client";
import { getDataPath, getImgPath } from "@/utils/image";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Contact = () => {
  const [contactData, setContactData] = useState<any>(null);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(getDataPath("/data/page-data.json"));
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setContactData(data?.contactLinks);
      } catch (error) {
        console.error("Error fetching contact data:", error);
      }
    };

    fetchData();
  }, []);

  // ✅ FIXED RESET FUNCTION
  const reset = () => {
    setFormData({
      name: "",
      number: "",
      email: "",
      message: "",
    });
  };

  // ✅ WHATSAPP SUBMIT
  const handleSubmit = (e: any) => {
    e.preventDefault();

    const { name, number, email, message } = formData;

    const whatsappMessage = `Hello 👋

I got a new enquiry:

👤 Name: ${name}
📞 Phone: ${number}
📧 Email: ${email}
💬 Message: ${message}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);

    // ✅ Your WhatsApp Number (with country code)
    const whatsappURL = `https://wa.me/919570026142?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappURL, "_blank");

    setSubmitted(true);
    reset();

    // Optional: hide success after few seconds
    setTimeout(() => setSubmitted(false), 4000);
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <section className="no-print">
      <div className="container">
        <div className="pt-16 md:pt-32 pb-20">
          <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
            <h2>Contact Me</h2>
            <p className="text-xl text-orange-500">( 05 )</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* FORM */}
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-7 sm:gap-12">

                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="name" className="label">Name *</label>
                    <input
                      required
                      className="input"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="number" className="label">Phone *</label>
                    <input
                      required
                      className="input"
                      id="number"
                      type="tel"
                      name="number"
                      value={formData.number}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="label">Email *</label>
                  <input
                    required
                    className="input"
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="label">Message *</label>
                  <textarea
                    required
                    className="input"
                    name="message"
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                  />
                </div>

                {/* SUCCESS MESSAGE */}
                {submitted && (
                  <div className="flex items-center gap-2">
                    <Image
                      src={getImgPath("/images/icon/success-icon.svg")}
                      alt="success-icon"
                      width={30}
                      height={30}
                    />
                    <p className="text-green-600">
                      Redirecting to WhatsApp...
                    </p>
                  </div>
                )}

                {/* BUTTON */}
                <button
                  type="submit"
                  className="relative overflow-hidden cursor-pointer w-fit py-2 sm:py-3 md:py-5 px-4 sm:px-5 md:px-7 border border-primary rounded-full group hover:bg-primary transition-all"
                >
                  <span className="relative z-10 text-xl font-medium text-primary group-hover:text-white transition-colors duration-300">
                    Send via WhatsApp
                  </span>
                </button>

              </div>
            </form>

            {/* RIGHT SIDE */}
            <div className="flex flex-col sm:flex-row md:flex-col justify-between gap-5 md:gap-20 items-center md:items-end">

              {/* SOCIAL */}
              <div className="flex flex-wrap flex-row md:flex-col items-start md:items-end gap-4 md:gap-6">
                {contactData?.socialLinks?.map((value: any, index: any) => (
                  <div key={index}>
                    <Link
                      href={value?.link || "#!"}
                      target="_blank"
                      className="text-base sm:text-lg font-normal text-secondary hover:text-primary"
                    >
                      {value?.title}
                    </Link>
                  </div>
                ))}
              </div>

              {/* CONTACT INFO */}
              <div className="flex flex-wrap justify-center gap-5 lg:gap-11 items-end">
                {contactData?.contactInfo?.map((value: any, index: any) => (
                  <div key={index}>
                    <Link
                      href={value?.link || "#!"}
                      className="text-base lg:text-lg text-black font-normal border-b border-black pb-3 hover:text-primary hover:border-primary"
                    >
                      {value?.label}
                    </Link>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;