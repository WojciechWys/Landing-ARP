import React from "react";

const Contact = () => {
  return (
    <div>
      <section className="bg-grey">
        <div className="py-8 lg:py-16 px-4 font-roboto  text-white mx-auto max-w-screen-md">
          <h2 className="mb-4 text-[1.25rem] md:text-[1.5rem] lg:text-[2rem] tracking-tight text-center">
            Skontaktuj się z nami
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-[1rem] md:text-[1.25rem] lg:text-[1.5rem] sm:text-xl">
            Jesteś zainteresowany naszymi usługami lub masz inne pytanie? Daj
            nam znać!
          </p>
          <form action="#" className="space-y-8">
            <div>
              <label htmlFor="nameSurname" className="block mb-2 text-sm">
                Imię i nazwisko
              </label>
              <input
                type="text"
                pattern="^([a-zA-Z -]{2,}\s[a-zA-z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)"
                id="nameSurname"
                className="shadow-sm bg-white border border-gray-300 text-black placeholder-grey text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                placeholder="Jan Kowalski"
                required
              ></input>
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-white border border-gray-300 text-black placeholder-grey text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                placeholder="jankowalski@poczta.pl"
                required
              ></input>
            </div>
            <div>
              <label htmlFor="phone" className="block mb-2 text-sm">
                Numer telefonu
              </label>
              <input
                type="number"
                id="phone"
                className="shadow-sm bg-white border border-gray-300 text-black placeholder-grey text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                placeholder="123456789"
                required
              ></input>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block mb-2 text-sm">
                Twoja wiadomość
              </label>
              <textarea
                id="message"
                rows="6"
                className="shadow-sm bg-white border border-gray-300 text-black placeholder-grey text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                placeholder="Świetna sprawa! Jestem zainteresowany..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="py-2 px-4 bg-orange text-black font-bold text-lg rounded-lg border-4 border-transparent group transition-all duration-300 ease-in-out hover:border-black hover:text-white"
            >
              Wyślij wiadomość
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
