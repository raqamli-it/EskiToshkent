import logotarixmanba from "../assets/img/logotarixmanba.png";

function AboutTitle() {
  return (
    <div className="backgroundTitle py-24">
      <div className="flex justify-between gap-8 w-[90%] mx-auto xl:w-[96%] md:flex-col">
        <div className="bg-black w-1/2 bg-opacity-50 p-10 rounded-[20px] lg:p-6 md:w-full">
          <div className="py-5 relative text-white lg:py-2">
            <img
              className="w-[170px]"
              src={logotarixmanba}
              alt="logotarixmanba"
            />
            <h1 className="w-full mt-7 font-semibold text-[28px] border-b-[3px] border-white xl:text-[24px] lg:text-[18px]">
              O'zbekiston Fanlar akademiyasi Tarix instituti
            </h1>
            <div className="pt-5 flex flex-col gap-y-4 text-[18px] lg:text-[16px]">
              <h2>
                100060, Toshkent shahar Mirobod tumani Shahrisabz tor ko‘chasi,
                5-uy
              </h2>
              <p>Telefon: (+998 71) 233-54-70</p>
              <p>Gmail: info@fati.uz</p>
              <p>
                Rasmiy sayt:{" "}
                <a className="text-blue-700 tracking-[1px]" href="#">
                  fati.uz
                </a>
              </p>
            </div>
          </div>
        </div>

        <iframe
          className="w-1/2 rounded-[20px] md:w-full md:h-[400px]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2820.2908355074437!2d69.28333991214794!3d41.30503254017699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8bcb0309aec1%3A0x3b72bce1a456e606!2zVGFyaXggaW5zdGl0dXRpIHwg0JjQvdGB0YLQuNGC0YPRgiDQuNGB0YLQvtGA0LjQuA!5e1!3m2!1sen!2s!4v1736586558527!5m2!1sen!2s"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default AboutTitle;
