import Image from "next/image";

export default function Section2() {
  return (
    <section
      
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/bg2.png')" }} // Replace with your image
    >
      <div className="container mx-auto px-4 md:px-6 ">
              {/* Section Title */}
            
              
              {/* Row 1: Text on Left, Illustration on Right */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16 relative -mt-20 md:-mt-25">
                {/* Left Column: Text */}
                <div className="space-y-6 text-left">
                  <h3 className="text-5xl font-bold text-[#ffcd13]">
                  Why Travelers Love Us
                  </h3>
                  <div className="space-y-4">
                    <p className="text-2xl font-medium text-black">
                    Hassle-free trips | Exclusive experiences | Meet your favorite influencers</p>
                  </div>
                </div>
                {/* Right Column: Illustration */}
                <div className="flex justify-center md:justify-end">
                  <div className="relative">
                    <Image
                      src="/section2_illustration1.svg"
                      alt="Traveler with luggage"
                      width={400}
                      height={400}
                      className="object-contain mt-40 max-h-96"
                    />
                  </div>
                </div>
              </div>
              
              {/* Row 2: Illustration on Left, Text on Right */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                {/* Left Column: Illustration */}
                <div className="flex justify-center md:justify-start order-2 md:order-1">
                  <div className="relative">
                    <Image
                      src="/section2_illustration2.svg"
                      alt="Excited traveler with luggage"
                      width={400}
                      height={400}
                      className="object-contain max-h-96"
                    />
                  </div>
                </div>
                {/* Right Column: Text */}
                <div className="space-y-6 text-left order-1 md:order-2">
                  <h3 className="text-5xl font-bold text-[#ffcd13]">
                    Travel Beyond Screens!
                  </h3>
                  <div className="space-y-4">
                    <p className="text-lg font-medium text-black">
                      A travel platform that bridges the gap between influencers and their audience through exclusive experiential trips.
                    </p>
                    <p className="text-lg font-medium text-black">
                      Once in a lifetime opportunity to bond with your favorite influencers, beyond the screen.
                    </p>
                    <p className="text-lg font-medium text-black">
                      Premium and well-organized travel experiences with safety and comfort ensured.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Row 3: Text on Left, Illustration on Right */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-1 items-center">
                {/* Left Column: Text */}
                <div className="space-y-6 text-left">
                  <h3 className="text-5xl font-bold text-[#ffcd13]">
                  What’s in it for Customers?
                  </h3>
                  <div className="space-y-4">
                    <p className="text-lg font-medium text-black">
                      Curated itineraries designed with your favorite influencers to create authentic and memorable experiences.
                    </p>
                    <p className="text-lg font-medium text-black">
                      Exclusive access to unique locations and activities that aren't available to regular tourists.
                    </p>
                    <p className="text-lg font-medium text-black">
                      Professional photography and content creation opportunities throughout your journey.
                    </p>
                  </div>
                </div>
                {/* Right Column: Illustration */}
                <div className="flex justify-center md:justify-end">
                  <div className="relative">
                    <Image
                      src="/section2_illustration3.svg"
                      alt="Traveler with backpack and suitcase"
                      width={400}
                      height={400}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
    </section>
  );
}