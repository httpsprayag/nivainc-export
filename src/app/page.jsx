import { Fragment } from "react";
import { Heading, Counting, ImageCarousel } from "@/components";
import { countingData, landingImages, products } from "@/constants";
import { ImCircleRight } from "react-icons/im";
import { MdProductionQuantityLimits } from "react-icons/md";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <ImageCarousel />
      {/* landing  page */}
      <section className="mt-8 md:px-8 px-4 text-justify py-6">
        <div className=" grid md:flex gap-3 md:justify-center lg:container lg:p-0 mx-auto text-lg md:text-xl">
          <div className="grid  md:place-items-center">
            <div className="flex flex-col gap-3 md:max-w-md sm:pr-4">
              <div className="flex items-center gap-2">
                <ImCircleRight className="text-[#034d94] text-3xl" />
                <Heading>Leading the way</Heading>
              </div>
              <p className="text-lg md:text-xl font-bold text-gray-400">
                Let’s build a better world together
              </p>
              <p className="font-medium text-gray-600">
                Welcome to NIVA Inc, a global powerhouse in ceramic and
                porcelain tile manufacturing and exporting. Based in the vibrant
                city of Morbi, Gujarat, India, our legacy is steeped in a rich
                tradition of craftsmanship that has evolved to meet the demands
                of modern design. NIVA Inc takes immense pride in delivering
                tiles of unparalleled quality and aesthetic appeal to more than
                45 countries worldwide.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:pl-4 sm:grid-cols-2 gap-2">
            {landingImages?.map((url) => {
              return (
                <img
                  src={url}
                  className="w-full h-48 object-cover rounded-lg"
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* product portfolio */}

      <section className="mt-8 md:px-8  px-4 text-justify py-6">
        <div className="mt- md:container md:justify-center md:mx-auto flex items-center gap-3">
          <MdProductionQuantityLimits className="text-[#034d94] text-3xl" />
          <Heading isCenter>Product Portfolio</Heading>
        </div>
        <div className="mt-8 grid gap-4 md:max-w-5xl md:mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Fragment key={product.id}>
              <Link
                href={`products/${product.href}`}
                className="relative group h-[260px] md:h-[300px]"
              >
                <img
                  src={product.image}
                  className="min-h-[220px] rounded-md object-cover h-full w-[100%]"
                  alt={product.name}
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 bg-black bg-opacity-50 group-hover:opacity-100 transition duration-300 ease-in-out">
                  <p className="text-white text-lg font-bold capitalize">{product.name}</p>
                </div>
              </Link>
            </Fragment>
          ))}
        </div>
      </section>
      <section className="mt-8">
        <div className="pt-0 pb-6 md:py-12 flex items-center gap-4 md:gap-12 justify-center">
          {countingData?.map((item, id) => (
            <Counting
              key={id}
              count={item?.count}
              text={item?.title}
              icon={item?.icon}
            />
          ))}
        </div>
      </section>
    </>
  );
}
