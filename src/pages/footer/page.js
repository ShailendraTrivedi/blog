import Link from "next/link";
import {
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiYoutube,
} from "react-icons/fi";

export default function Footer() {
  return (
    <div>
      <footer class=" p-5">
        <hr class="my-6 sm:mx-auto lg:my-8" />
        <div class="flex justify-between">
          <div />
          <div class="grid grid-cols-2 w-[18rem]">
            <div className="space-y-2">
              <h2 class="font-bold uppercase">Clinet-side</h2>
              <ul class="text-sm space-y-2">
                <li class="">NextJS</li>
                <li>Tailwind CSS</li>
                <li>Redux ToolKit</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h2 class=" font-bold uppercase">server-side</h2>
              <ul class="text-sm space-y-2">
                <li class="">NodeJS</li>
                <li>ExpressJS</li>
                <li>MongoDB</li>
              </ul>
            </div>
          </div>
        </div>
        <hr class="my-6 sm:mx-auto lg:my-8" />
        <div class="flex justify-between items-center">
          <span class="text-sm  sm:text-center">
            <Link href="/" class="hover:underline">
              © 2023 Blog
            </Link>
          </span>
          <ul className="list-none flex gap-2 sm:text-2xl text-lg">
            <li className="bg-blue-600 text-white rounded-full p-2">
              <FiFacebook />
            </li>
            <li className="bg-gradient-to-r from-pink-500 via-violet-500 to-indigo-500 text-white rounded-full p-2">
              <FiInstagram />
            </li>
            <li className="bg-blue-400 text-white rounded-full p-2">
              <FiTwitter />
            </li>
            <li className="bg-red-500 text-white rounded-full p-2">
              <FiYoutube />
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
