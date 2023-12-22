import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className=" mt-5">
        <footer className="bg-slate-900">
          <div className="container p-10 mx-auto">
            <div className="lg:flex">
              <div className="w-full -mx-6 lg:w-2/5">
                <div className="px-6 ">
                  {/* <a href="#">
                    <img className="w-auto h-16" src={logo} alt="" />
                  </a> */}

                  <p className="max-w-sm mt-2 text-gray-500 dark:text-yellow-50">
                    Join 31,000+ other and never miss out on new tips,
                    tutorials, and more.
                  </p>

                  <div className="flex mt-6 -mx-2 ">
                    <a
                      href="https://www.linkedin.com/in/shamim--reza/" target="blank"
                      className="mx-2  transition-colors duration-300 dark:text-yellow-50 hover:text-blue-500 dark:hover:text-blue-400"
                      aria-label="Reddit"
                    >
                      <FaLinkedin></FaLinkedin>
                    </a>

                    <a
                      href="https://www.facebook.com/rezshamim67/" target="blank"
                      className="mx-2  transition-colors duration-300 dark:text-yellow-50 hover:text-blue-500 dark:hover:text-blue-400"
                      aria-label="Facebook"
                    >
                      <FaFacebook></FaFacebook>
                    </a>

                    <a
                      href="https://github.com/Shamimreza82" target="blank"
                      className="mx-2  transition-colors duration-300 dark:text-yellow-50 hover:text-blue-500 dark:hover:text-blue-400"
                      aria-label="Github"
                    >
                      <FaGithub></FaGithub>
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-6 lg:mt-0 lg:flex-1">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  <div>
                    <h3 className="text-gray-700 uppercase dark:text-yellow-50">
                      About
                    </h3>
                    <a
                      href="#"
                      className="block mt-2 text-sm text-yellow-50 hover:underline"
                    >
                      Company
                    </a>
                    <a
                      href="#"
                      className="block mt-2 text-sm text-yellow-50 hover:underline"
                    >
                      community
                    </a>
                    <a
                      href="#"
                      className="block mt-2 text-sm text-yellow-50 hover:underline"
                    >
                      Careers
                    </a>
                  </div>

                  <div>
                    <h3 className="text-gray-700 uppercase dark:text-yellow-50">
                      Blog
                    </h3>
                    <a
                      href="#"
                      className="block mt-2 text-sm text-yellow-50 hover:underline"
                    >
                      Tec
                    </a>
                    <a
                      href="#"
                      className="block mt-2 text-sm text-yellow-50 hover:underline"
                    >
                      Music
                    </a>
                    <a
                      href="#"
                      className="block mt-2 text-sm text-yellow-50 hover:underline"
                    >
                      Videos
                    </a>
                  </div>

                  <div>
                    <h3 className="text-gray-700 uppercase dark:text-yellow-50">
                      Products
                    </h3>
                    <a
                      href="#"
                      className="block mt-2 text-sm text-yellow-50 hover:underline"
                    >
                      Mega cloud
                    </a>
                    <a
                      href="#"
                      className="block mt-2 text-sm text-yellow-50 hover:underline"
                    >
                      Aperion UI
                    </a>
                    <a
                      href="#"
                      className="block mt-2 text-sm text-yellow-50 hover:underline"
                    >
                      Meraki UI
                    </a>
                  </div>

                  <div>
                    <h3 className="text-gray-700 uppercase dark:text-yellow-50">
                      Contact
                    </h3>
                    <span className="block mt-2 text-sm text-yellow-50 hover:underline">
                      +1 526 654 8965
                    </span>
                    <span className="block mt-2 text-sm text-yellow-50 hover:underline">
                      example@email.com
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <hr className="h-px my-6 bg-gray-200 border-none dark:bg-gray-700" />

            <div>
              <p className="text-center text-gray-500 dark:text-gray-400">
                © SCC Technovision Inc. 2023 - All rights reserved
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
