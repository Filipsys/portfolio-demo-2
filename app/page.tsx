import { Menu, ShoppingBasket, ArrowDownLeft } from "lucide-react";
import Image from "next/image";

const SvgFrame = () => {
  return (
    <svg className="h-full" viewBox="0 0 100 100" fill="none">
      <path
        d="M0 0 H100 V100 H0 Z M0 0 L100 100 M100 0 L0 100"
        stroke="#ACACAC"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default function Home() {
  return (
    <div className="flex h-screen flex-col text-black">
      <nav className="flex items-center justify-between p-4 backdrop-blur-md">
        <h1 className="text-xl font-light">Neutrall</h1>

        {/* <ul>
          <li>
            <a href="#">New drops</a>
          </li>
          <li>
            <a href="#">Shop</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul> */}

        <div className="flex items-center gap-4">
          <div>
            <ShoppingBasket strokeWidth={1.5} />
          </div>
          {/* <div>
            <Menu strokeWidth={1.5} />
          </div> */}
        </div>
      </nav>

      <div className="relative aspect-[3/4] w-full">
        <Image
          src={"/images/front-image-2 2.jpg"}
          alt="Front image"
          fill
          priority
          className="h-full w-full object-cover p-4 pt-0"
        />

        <div className="absolute bottom-0 left-0 w-2/3 bg-white p-4">
          <h2 className="text-l font-bold uppercase">
            Designed for adaptability
          </h2>
          <p className="text-3xl">High quality, high style, high fit.</p>

          <button className="mt-4 font-bold underline underline-offset-4">
            <a href="#">Discover more</a>
          </button>
        </div>
      </div>

      <div className="flex flex-row items-center gap-1 p-4 py-12">
        <div>
          <ul className="flex rotate-180 flex-row gap-1 [writing-mode:vertical-lr]">
            <li className="border-[1px] border-black p-4 text-xl underline decoration-1 underline-offset-4">
              <a href="#">New drops</a>
            </li>
            <li className="border-[1px] border-black p-4 text-xl underline decoration-1 underline-offset-4">
              <a href="#">Shop</a>
            </li>
            <li className="border-[1px] border-black p-4 text-xl underline decoration-1 underline-offset-4">
              <a href="#">About</a>
            </li>
          </ul>
        </div>

        <div className="flex h-full w-full flex-col justify-between gap-1">
          <div className="grid h-full w-full grid-cols-2 grid-rows-3 gap-1 underline decoration-1 underline-offset-4 *:text-xl">
            <div className="relative h-full w-full border-[1px] border-black p-2 text-right">
              Shirts
              <div className="absolute bottom-0 left-0 m-1">
                <ArrowDownLeft strokeWidth={1} />
              </div>
            </div>
            <div className="relative h-full w-full border-[1px] border-black p-2 text-right">
              Apparel
              <div className="absolute bottom-0 left-0 m-1">
                <ArrowDownLeft strokeWidth={1} />
              </div>
            </div>
            <div className="relative h-full w-full border-[1px] border-black p-2 text-right">
              Boots
              <div className="absolute bottom-0 left-0 m-1">
                <ArrowDownLeft strokeWidth={1} />
              </div>
            </div>
            <div className="relative h-full w-full border-[1px] border-black p-2 text-right">
              Drinkware
              <div className="absolute bottom-0 left-0 m-1">
                <ArrowDownLeft strokeWidth={1} />
              </div>
            </div>
            <div className="relative h-full w-full border-[1px] border-black p-2 text-right">
              Bags
              <div className="absolute bottom-0 left-0 m-1">
                <ArrowDownLeft strokeWidth={1} />
              </div>
            </div>
            <div className="relative h-full w-full border-[1px] border-black p-2 text-right">
              Collectibles
              <div className="absolute bottom-0 left-0 m-1">
                <ArrowDownLeft strokeWidth={1} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <div className="relative aspect-[4/3] w-full">
          <Image
            src={"/images/front-image-1.jpg"}
            alt="Front image"
            fill
            priority
            className="h-full w-full object-cover p-4 pt-0"
          />

          <div className="absolute right-0 top-0 w-1/2 bg-white p-4">
            <h2 className="text-3xl">Quality essentials, built to last</h2>

            <button className="mt-4 font-bold underline underline-offset-4">
              <a href="#">Shop now</a>
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white p-4 py-12">
        <h2 className="text-xl font-bold uppercase">Our collection</h2>

        <div className="mt-4 flex flex-col gap-4">
          <div className="relative aspect-[3/1] w-full flex-none bg-gray-200 object-fill">
            <div className="absolute left-0 top-0 h-full w-full object-fill">
              <Image src={"/images/shirts.jpg"} alt="Shirts image" fill />
            </div>

            <div className="absolute bottom-0 left-0 w-fit bg-white p-4 pb-0 pl-0">
              <h2 className="text-l font-bold uppercase">Shirt 1</h2>
            </div>
          </div>

          <div className="relative aspect-[3/1] w-full flex-none bg-gray-200 object-fill">
            <div className="absolute left-0 top-0 h-full w-full object-fill">
              <Image src={"/images/shirts.jpg"} alt="Shirts image" fill />
            </div>

            <div className="absolute bottom-0 left-0 w-fit bg-white p-4 pb-0 pl-0">
              <h2 className="text-l font-bold uppercase">Shirt 2</h2>
            </div>
          </div>

          <div className="relative aspect-[3/1] w-full flex-none bg-gray-200 object-fill">
            <div className="absolute left-0 top-0 h-full w-full object-fill">
              <Image src={"/images/shirts.jpg"} alt="Shirts image" fill />
            </div>

            <div className="absolute bottom-0 left-0 w-fit bg-white p-4 pb-0 pl-0">
              <h2 className="text-l font-bold uppercase">Jeans 1</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-gray-200 p-4 py-12">
        <h2 className="text-xl font-bold uppercase">
          20% off to first time customers
        </h2>
        <p className="text-3xl">
          Sign up for our newsletter and get a coupon in your inbox.
        </p>

        <form>
          <input
            className="my-4 block w-full border-[1px] border-black p-2"
            type="email"
            placeholder="Enter your email"
          />

          <div>
            <input type="checkbox" name="newsletter" id="newsletter" />
            <p className="inline px-2">
              I have read & agree o the Terms and Conditions. We respect your
              Privacy.
            </p>
          </div>

          <button
            type="submit"
            className="my-6 border-[1px] border-black p-2 text-xl"
          >
            Subscribe
          </button>
        </form>
      </div>

      <div className="w-full bg-white p-4 py-12 text-gray-500">
        <div className="grid grid-cols-2 gap-1 *:decoration-1 *:underline-offset-4">
          <p className="hover:underline">Contact us</p>
          <p className="hover:underline">Deliveries</p>
          <p className="hover:underline">FAQs</p>
          <p className="hover:underline">Become a retailer</p>
          <p className="hover:underline">Environmental policy</p>
          <p className="hover:underline">Cookie policy</p>

          <p className="hover:underline">Returns / Exchange</p>
          <p className="hover:underline">Terms & Conditions</p>
          <p className="hover:underline">Newsletter</p>
          <p className="hover:underline">Flagship store</p>
          <p className="hover:underline">Privacy policy</p>
          <p className="hover:underline">Complaints book</p>
        </div>

        <div className="flex flex-col gap-2 pt-12">
          <p> © Neutrall</p>
          <p>2024 • All rights reserved</p>
        </div>
      </div>

      {/* <div className="flex flex-row items-center gap-2">
            <CircleCheckBig className="size-4" />
            <p>High-quality materials</p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <CircleCheckBig className="size-4" />
            <p>Long-lasting design</p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <CircleCheckBig className="size-4" />
            <p>Local products</p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <CircleCheckBig className="size-4" />
            <p>Sustainable resources</p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <CircleCheckBig className="size-4" />
            <p>Organic & recycled fibers</p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <CircleCheckBig className="size-4" />
            <p>Fair trade clothing</p>
          </div> */}
    </div>
  );
}
