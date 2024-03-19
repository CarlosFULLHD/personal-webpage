import Image from "next/image";
import Link from "next/link";
import ModalComponentContanctame from "./ModalComponentContanctame";

export const FooterSection = () => {
  return (
    <section className="w-full">
      <div className=" max-w-screen-xl mx-auto p-4 md:p-1">
        <div className="sm:flex sm:items-center sm:justify-between flex flex-col gap-2 md:flex-row">
          <picture>
            {/* Aqui usar URLs porque es srcSet, asi que usar con cloudflare url */}
            <source
              srcSet="https://d1kdkr2pswehq6.cloudfront.net/logocarlitosnina.webp"
              type="image/webp"
            />
            <source
              srcSet="https://d1kdkr2pswehq6.cloudfront.net/logocarlitosnina.jpg"
              type="image/jpeg"
            />
            <Image
              src="logocarlitosnina.jpg" // Use your Cloudflare URL pointing, FALLBACK
              alt="Logo de Carlitos Nina Marca Personal"
              width={200} // Specify width
              height={50} // Specify height
              className=""
            />
          </picture>
          <div className="">
            <span className="font-bold mx-2 md:mb-4">
              Una historia de sabiduría en tu email cada Lunes:
            </span>

            <iframe
              src="https://embeds.beehiiv.com/4bac08d8-cef4-44c7-ac9d-4cb41094e2c3?slim=true"
              data-test-id="beehiiv-embed"
              height="52"
              scrolling="no"
              loading="lazy"
              title="Newsletter Carlitos Nina"
              className="bg-transparent rounded-lg overflow-hidden lg:w-96"
            />
          </div>

          <ul className="flex flex-wrap md:flex-row items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <Link
                href="https://www.buymeacoffee.com/carlosnina3"
                passHref={true}
                className="text-white font-bold"
              >
                ☕Apóyame con un café virtual
              </Link>
            </li>

            <li>
              <ModalComponentContanctame />
            </li>
          </ul>
        </div>
        <hr className="my-2 md:my-4 lg:my-6 border-gray-200 sm:mx-auto dark:border-gray-700 " />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024 Carlitos Nina. Todo mi trabajo tiene licencia abierta a través
          de{" "}
          <Link
            href="https://creativecommons.org/licenses/by-nd/4.0/"
            className="hover:underline"
          >
            CC BY-ND
          </Link>
        </span>
      </div>
    </section>
  );
};
