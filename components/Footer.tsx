import { footerLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100  mt-5 border-t border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10 ">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image
            src="/images/logo.png"
            alt="logo"
            width={118}
            height={18}
            className="object-contain"
          />
          <p className="text-2xl text-gray-700 font-semibold">
            <span className="text-transparent font-semibold bg-clip-text bg-gradient-to-r to-[#008DDA] from-sky-400">
              Blue Ocean Sejahtera 2024{" "}
            </span>
            <br />
            &copy; Oil Spill Specialist
          </p>
        </div>
        <div className="footer__links">
          {footerLinks.map((item) => (
            <div key={item.title} className="footer__link">
              <h3 className="font-bold">{item.title}</h3>
              <div className="flex flex-col gap-5">
                {item.links.map((link) => (
                  <Link
                    key={link.title}
                    href={link.url}
                    className="text-gray-500"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10 bg-[#6592fd] rounded-t-lg">
        <p className="text-base font-semibold text-white">
          @2024 Blue Ocean Sejahtera
        </p>

        <div className="footer__copyrights-link">
          <Link href="/" className="text-white">
            Privacy & Policy
          </Link>
          <Link href="/" className="text-white">
            Terms & Condition
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
