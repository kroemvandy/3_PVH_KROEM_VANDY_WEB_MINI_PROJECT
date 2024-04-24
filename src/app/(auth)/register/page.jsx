import { registerAction } from "@/action/authAction";
import Image from "next/image";

const RegisterPage = () => {
  return (
    <main>
      <div className="min-h-screen w-[80%] bg-gray-100 text-gray-900 flex mx-auto justify-center p-5">
        <div className="grid grid-cols-1 md:grid-cols-12">
          <div className="md:col-span-7 bg-white mx-auto ml-10">
            <div className="mt-20">
              <Image
                src={"assets/icons/logo.svg"}
                width={160}
                height={160}
                alt={"logo"}
              ></Image>
            </div>

            <form className="mt-12" action={registerAction}>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="block tracking-wide text-gray-700 text-base font-thin mb-2"
                    htmlFor="grid-first-name"
                  >
                    First Name:
                  </label>
                  <input
                    className="appearance-none bg-[#eee] block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
                    id="grid-first-name"
                    name="firstname"
                    type="text"
                    placeholder="Enter your name."
                  />
                </div>

                <div className="w-full md:w-1/2 px-3">
                  <label
                    className="block tracking-wide text-gray-700 text-base font-thin mb-2"
                    htmlFor="grid-last-name"
                  >
                    Last Name:
                  </label>
                  <input
                    className="appearance-none block w-full bg-[#eee] text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:border-gray-500"
                    id="grid-last-name"
                    name="lastname"
                    type="text"
                    placeholder="Enter your name."
                  />
                </div>

                <div className="w-full md:w-1/2 px-3">
                  <label
                    className="block tracking-wide text-gray-700 text-base font-thin mb-2"
                    htmlFor="grid-last-name"
                  >
                    Email:
                  </label>
                  <input
                    className="appearance-none block w-full bg-[#eee] text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:border-gray-500"
                    id="grid-last-name"
                    name="email"
                    type="email"
                    placeholder="Info@zyz.com"
                  />
                </div>

                <div className="w-full md:w-1/2 px-3">
                  <label
                    className="block tracking-wide text-gray-700 text-base font-thin mb-2"
                    htmlFor="grid-last-name"
                  >
                    Gender:
                  </label>
                  <select
                    className="bg-[#eee] rounded py-3 px-4 w-full block"
                    name="gender"
                    id="gender"
                  >
                    <option value="">Choose your gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="w-full md:w-1/2 px-3 mt-3">
                  <label
                    className="block tracking-wide text-gray-700 text-base font-thin mb-2"
                    htmlFor="grid-last-name"
                  >
                    Password:
                  </label>
                  <input
                    className="appearance-none block w-full bg-[#eee] text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:border-gray-500"
                    id="grid-last-name"
                    name="password"
                    type="password"
                    placeholder="xxxxxxxxxxxxxxx"
                  />
                </div>

                <div className="w-full md:w-1/2 px-3 mt-3">
                  <label
                    className="block tracking-wide text-gray-700 text-base font-thin mb-2"
                    htmlFor="grid-last-name"
                  >
                    Confirm Password:
                  </label>
                  <input
                    className="appearance-none block w-full bg-[#eee] text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:border-gray-500"
                    id="grid-last-name"
                    name="password"
                    type="password"
                    placeholder="xxxxxxxxxxxxxxx"
                  />
                </div>

                <button
                  class="shadow mt-5 ml-3 bg-blue-500 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-thin py-2 px-6 rounded-lg"
                  type="submit"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>

          <div className="md:col-span-5 mx-auto mr-10">
            <div className="mt-40">
              <Image
                src={"assets/icons/sign-up.svg"}
                width={350}
                height={350}
                alt={"sign up"}
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default RegisterPage;
