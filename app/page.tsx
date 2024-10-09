import { ShoppingBasket, ArrowDownLeft, Check } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex h-screen flex-col font-sans text-black">
      <nav className="flex items-center justify-between p-4">
        <h1 className="font-light text-xl sm:text-3xl">Neutrall</h1>

        <div className="flex items-center gap-4">
          <div className="sm:*:size-10">
            <ShoppingBasket strokeWidth={1.5} />
          </div>
        </div>
      </nav>

      <div className="relative aspect-[3/4] w-full sm:aspect-[4/5]">
        <Image
          src={"/images/front-image-2 2.jpg"}
          // src={"/images/test-image-1.jpg"}
          alt="Front image"
          fill
          priority
          className="h-full w-full object-cover p-4 pt-0"
        />

        <div className="absolute bottom-0 left-0 w-2/3 bg-white p-4">
          <h2 className="text-l font-bold uppercase sm:text-2xl">Designed for adaptability</h2>
          <p className="text-3xl sm:text-5xl">High quality, high style, high fit.</p>

          <button className="mt-4 font-bold underline underline-offset-4 sm:text-2xl">
            <a href="#">Discover more</a>
          </button>
        </div>
      </div>

      <div className="flex flex-row items-center gap-1 p-4 py-12 md:hidden">
        <div>
          <ul className="flex rotate-180 flex-row gap-1 [writing-mode:vertical-lr] *:border-[1px] *:border-black *:p-4 *:text-xl *:underline *:decoration-1 *:underline-offset-4 sm:*:text-3xl sm:*:decoration-2">
            <li>
              <a href="#">New drops</a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
        </div>

        <div className="flex h-full w-full flex-col justify-between gap-1">
          <div className="grid h-full w-full grid-cols-2 grid-rows-3 gap-1 *:relative *:h-full *:w-full *:border-[1px] *:border-black *:p-2 *:text-right *:text-xl sm:*:text-3xl">
            <a href="#">
              Shirts
              <div className="absolute bottom-0 left-0 m-1 sm:*:size-10">
                <ArrowDownLeft strokeWidth={1} />
              </div>
            </a>
            <a href="#">
              Apparel
              <div className="absolute bottom-0 left-0 m-1 sm:*:size-10">
                <ArrowDownLeft strokeWidth={1} />
              </div>
            </a>
            <a href="#">
              Boots
              <div className="absolute bottom-0 left-0 m-1 sm:*:size-10">
                <ArrowDownLeft strokeWidth={1} />
              </div>
            </a>
            <a href="#">
              Drinkware
              <div className="absolute bottom-0 left-0 m-1 sm:*:size-10">
                <ArrowDownLeft strokeWidth={1} />
              </div>
            </a>
            <a href="#">
              Bags
              <div className="absolute bottom-0 left-0 m-1 sm:*:size-10">
                <ArrowDownLeft strokeWidth={1} />
              </div>
            </a>
            <a href="#">
              Collectibles
              <div className="absolute bottom-0 left-0 m-1 sm:*:size-10">
                <ArrowDownLeft strokeWidth={1} />
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="relative my-12 aspect-[4/3] w-full">
        <Image src={"/images/front-image-1.jpg"} alt="Front image" fill priority className="h-full w-full object-cover p-4" />

        <div className="absolute right-0 top-0 w-1/2 bg-white p-4">
          <h2 className="text-3xl sm:text-5xl">Quality essentials, built to last</h2>

          <button className="mt-4 font-bold underline underline-offset-4 sm:text-2xl">
            <a href="#">Shop now</a>
          </button>
        </div>
      </div>

      {/* <div className="bg-white p-4 py-12">
        <h2 className="font-bold text-xl uppercase sm:text-3xl">Our collection</h2>

        <div className="mt-4 flex flex-col gap-0 md:flex-row">
          <div className="relative aspect-[3/1] w-full flex-none md:aspect-square md:w-1/3">
            <div className="h-full w-full">
              <Image src={"/images/shirts.jpg"} alt="Shirts image 1" fill />
            </div>

            <div className="absolute bottom-0 right-0 w-1/3 bg-white p-4 pb-0 pr-0 md:w-2/3">
              <h2 className="text-3xl sm:text-5xl">Shirt 1</h2>

              <div className="mt-4 font-bold underline underline-offset-4 sm:text-2xl">
                <a href="#">Find more</a>
              </div>
            </div>
          </div>

          <div className="relative aspect-[3/1] w-full flex-none md:w-1/3">
            <div className="h-full w-full">
              <Image src={"/images/shirts.jpg"} alt="Shirts image 2" fill />
            </div>

            <div className="absolute bottom-0 left-0 w-1/3 bg-white p-4 pb-0 pl-0 md:left-auto md:right-0 md:w-2/3">
              <h2 className="text-3xl sm:text-5xl">Shirt 2</h2>

              <div className="mt-4 font-bold underline underline-offset-4 sm:text-2xl">
                <a href="#">Find more</a>
              </div>
            </div>
          </div>

          <div className="relative aspect-[3/1] w-full flex-none md:w-1/3">
            <div className="h-full w-full">
              <Image src={"/images/shirts.jpg"} alt="Jeans image 1" fill />
            </div>

            <div className="absolute bottom-0 right-0 w-1/3 bg-white p-4 pb-0 pr-0 md:w-2/3">
              <h2 className="text-3xl sm:text-5xl">Jeans 1</h2>

              <div className="mt-4 font-bold underline underline-offset-4 sm:text-2xl">
                <a href="#">Find more</a>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="flex w-full pb-12">
        <div className="flex w-full flex-col justify-center md:flex-row">
          <div className="flex flex-row items-center justify-center gap-1">
            <div>
              <h2 className="rotate-180 text-4xl uppercase [writing-mode:vertical-lr] sm:text-5xl">Neutrall</h2>
            </div>
            <div className="flex flex-col gap-1 pr-12 md:pr-0">
              <div className="w-fit border-[1px] border-black p-4 sm:border-2 sm:*:text-3xl">
                <p>Long-lasting design</p>
              </div>
              <div className="w-fit border-[1px] border-black p-4 sm:border-2 sm:*:text-3xl">
                <p>Local products</p>
              </div>
              <div className="w-fit border-[1px] border-black p-4 sm:border-2 sm:*:text-3xl">
                <p>High-quality materials</p>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center gap-1">
            <div className="flex flex-col items-end gap-1 pl-12">
              <div className="w-fit border-[1px] border-black p-4 sm:border-2 sm:*:text-3xl">
                <p>Sustainable resources</p>
              </div>
              <div className="w-fit border-[1px] border-black p-4 sm:border-2 sm:*:text-3xl">
                <p>Organic & recycled fibers</p>
              </div>
              <div className="w-fit border-[1px] border-black p-4 sm:border-2 sm:*:text-3xl">
                <p>Fair trade clothing</p>
              </div>
            </div>
            <div>
              <h2 className="text-4xl uppercase [writing-mode:vertical-lr] sm:text-5xl">Clothing</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-gray-200 p-4 py-12 sm:px-24">
        <p className="font-bold text-xl uppercase sm:text-3xl">Sign up for our newsletter and get 20% off your first order!</p>

        <form>
          <input
            className="my-4 block w-full border-[1px] border-black bg-white p-2 sm:p-3 sm:placeholder:text-xl"
            type="email"
            placeholder="Enter your email"
          />

          <div className="flex gap-2">
            <div className="flex h-full w-full items-start gap-2">
              <div className="">
                <div className="grid">
                  <input
                    type="checkbox"
                    name="newsletter"
                    id="newsletter"
                    style={{ gridColumn: "1", gridRow: "1" }}
                    className="peer z-10 size-4 appearance-none bg-transparent sm:size-6"
                  />
                  <Check
                    className="size-4 select-none border-[1px] border-black bg-white text-transparent peer-checked:text-black sm:size-6"
                    style={{ gridColumn: "1", gridRow: "1" }}
                  />
                </div>
              </div>
              <label htmlFor="newsletter" className="sm:text-md mb-auto inline text-xl">
                I have read & agree on the{" "}
                <a href="#" className="underline decoration-1 underline-offset-4">
                  Terms and Conditions
                </a>
                .
              </label>
            </div>

            <button type="submit" className="border-[1px] border-black bg-white p-2 text-xl sm:text-2xl">
              Subscribe
            </button>
          </div>
        </form>
      </div>

      <div className="w-full bg-white p-4 py-12 text-gray-500">
        <div className="grid grid-cols-2 gap-1 *:decoration-1 *:underline-offset-4 sm:text-xl">
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
    </div>
  );
}
