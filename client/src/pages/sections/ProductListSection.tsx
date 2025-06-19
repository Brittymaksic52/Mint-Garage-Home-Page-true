import { HeartIcon } from "lucide-react";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Product data for mapping
const products = [
  {
    id: 1,
    title: "NEWAGE | PRO SERIES 28 IN. 7-DRAWER TOOL CABINET",
    price: "$1099.99",
    image: "/figmaAssets/image-2.png",
    rating: 5,
    reviews: 1,
    inStock: true,
    onSale: true,
  },
  {
    id: 2,
    title: "SMART LIFTING SYSTEMS | 8,000LB 4 POST LIFT - EXTRA TALL & LONG",
    price: "$5690.00",
    image: "/figmaAssets/image-6.png",
    rating: 5,
    reviews: 1,
    inStock: true,
    onSale: false,
  },
  {
    id: 3,
    title: "NEWAGE | PRO SERIES 72 IN. WALL MOUNTED RACK - BLACK",
    price: "$999.99",
    image: "/figmaAssets/image-7.png",
    rating: 5,
    reviews: 1,
    inStock: true,
    onSale: true,
  },
  {
    id: 4,
    title: "NEWAGE | PRO SERIES MOBILE UTILITY CART",
    price: "$479.99",
    image: "/figmaAssets/image-8.png",
    rating: 5,
    reviews: 1,
    inStock: true,
    onSale: false,
  },
];

export const ProductListSection = (): JSX.Element => {
  return (
    <section className="w-full py-16 relative">
      <div className="relative mb-8">
        <h2 className="opacity-50 font-bold text-[#f4f4f4] text-[140px] tracking-[0] leading-[normal] [font-family:'Montserrat',Helvetica]">
          PRODUCTS
        </h2>
        <h3 className="absolute top-[61px] left-[87px] font-bold text-black text-[40px] tracking-[0] leading-[normal] [font-family:'Montserrat',Helvetica]">
          FEATURED PRODUCTS
        </h3>
      </div>

      <div className="flex flex-wrap gap-5 justify-center">
        {products.map((product) => (
          <Card
            key={product.id}
            className="w-[300px] h-[425px] relative border-0 p-0 overflow-hidden"
          >
            <CardContent className="p-0 h-full">
              <div className="relative w-full h-[266px]">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute top-2 right-2 w-[31px] h-[31px] rounded-full bg-white shadow-[0px_0px_4px_#0000002e] p-0"
                >
                  <HeartIcon className="h-[17px] w-[17px]" />
                </Button>
                {product.onSale && (
                  <Badge className="absolute top-2 left-2 bg-[#629b44] text-white font-bold text-[10px] h-[17px] rounded-[3px]">
                    SALE
                  </Badge>
                )}
              </div>

              <div className="p-4">
                <h4 className="font-semibold text-black text-base mb-2 [-webkit-text-stroke:1px_#e9ecef] [font-family:'Montserrat',Helvetica]">
                  {product.title}
                </h4>

                <div className="flex items-center mb-2">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <img
                        key={i}
                        className="w-3.5 h-[13px] mr-1"
                        alt="Star rating"
                        src="/figmaAssets/vector-3.svg"
                      />
                    ))}
                  <span className="ml-2 font-semibold text-black text-xs [-webkit-text-stroke:1px_#e9ecef] [font-family:'Montserrat',Helvetica]">
                    {product.reviews} review{product.reviews !== 1 ? "s" : ""}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="font-bold text-black text-xl [-webkit-text-stroke:1px_#e9ecef] [font-family:'Montserrat',Helvetica]">
                    {product.price}
                  </span>
                  <Button
                    variant="secondary"
                    size="sm"
                    className="w-[34px] h-[34px] bg-[#f1f3f5] rounded-[10px] p-0"
                  >
                    <img
                      className="w-[19px] h-[17px]"
                      alt="Add to cart"
                      src="/figmaAssets/vector-16.svg"
                    />
                  </Button>
                </div>

                <div className="flex items-center mt-2">
                  <img
                    className="w-[17px] h-[17px]"
                    alt="In stock indicator"
                    src={`/figmaAssets/mask-group-${9 + product.id}.png`}
                  />
                  <span className="ml-2 font-medium text-[#629b44] text-base [-webkit-text-stroke:1px_#8dc049] [font-family:'Montserrat',Helvetica]">
                    {product.inStock ? "In stock" : "Out of stock"}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <div className="flex gap-[21px]">
          {[0, 1, 2, 3, 4].map((index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-md ${
                index === 0 ? "bg-black" : "bg-[#d9d9d9]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
