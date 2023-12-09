function About() {
  return (
    <div className="flex flex-col p-4">
      <p className="p-4 text-lg font-light">
        We offer an authentic Caribbean dining experience with flavours you
        can't forget. Located at the Gigiri Courtyard, visit us to enjoy
        scrumptious selections of grilled chicken, pork, fish with over 15 side
        dishes to choose from and excellent customer service. Looking for conk
        drinks and chill vibes? Join us at our popular Cocktail & Wine bar
        stocked with premium rums and cigars. Join us every Friday at 6pm for
        Live Music and discounted cigars on Thursdays. Deliveries available in
        Nairobi to ensure you enjoy the best food in town from the comfort of
        your home.
      </p>
      <div className="my-6 flex flex-col items-center justify-center gap-4 p-4">
        <h1 className="border-b-2 border-teal-500 pb-3 text-center text-2xl font-semibold text-teal-600">
          Our History
        </h1>
        <div className="block w-full gap-8 md:flex">
          <div className="block items-center justify-between md:flex md:w-[50%]">
            <div className="flex w-40 flex-col items-center">
              <h1 className="mb-1 p-3 font-semibold md:mb-4 md:p-1">
                Josephine's Story
              </h1>
              <div className="h-24 w-24 rounded-full">
                <img
                  src="/img/josephine.png"
                  style={{ width: "100%" }}
                  alt="Josephine"
                />
              </div>
            </div>
            <p className="mt-4 flex w-full items-center rounded-br-3xl rounded-tl-3xl bg-gray-200 p-5 text-center text-sm md:w-96">
              Josephine was a wonderful, eccentric and vibrant woman, a native
              from British Guiana now Guyana and grandmother to Brian Loe-A-Foe,
              founder and CEO of Josephine Caribbean Restaurant. As an ode to
              her & her hospitality, Brian opened Josephine Caribbean BBQ to
              keep her spirit alive with a culture that is reflective of her
              past life:Lovely food, Great drinks and Good Vibes. Come over and
              enjoy the taste of true Caribbean feels.
            </p>
          </div>
          <div className="block justify-between  md:flex md:w-[50%]">
            <div className="flex w-40 flex-col items-center justify-center">
              <h1 className="mb-1 p-3 font-semibold md:mb-4 md:p-1">
                Brian's Story
              </h1>
              <div className="h-24 w-24 rounded-full">
                <img
                  className="rounded-full"
                  src="/img/brian.png"
                  style={{ width: "100%" }}
                  alt="Brian"
                />
              </div>
            </div>
            <p className="mt-4 flex w-full items-center rounded-br-3xl rounded-tl-3xl bg-gray-200 p-5 text-center text-sm md:w-96">
              Brian is the grandson to the late Josephine. Brian has a great
              passion for food and has been in the restaurant industry for 20
              years. He gets his influence from suriname food which has blends
              from the indian,chinese & creole communities.
            </p>
          </div>
        </div>
      </div>

      {/* <div className="my-6 p-2 md:p-6">
        <h1 className=" pb-2 text-center text-3xl font-semibold text-teal-600">
          Construction of the Restaurant
        </h1>
        <div className="flex flex-col gap-6 md:flex-row">
          <p className="mt-4 flex w-full items-center rounded-br-3xl rounded-tl-3xl bg-gray-200 p-5 text-center text-sm md:w-96">
            The restaurant was conceptualized & built from the ground up. The
            restaurant was built to mimic caribbean food stalls and to allow
            kenyans to have a real feel of how it is sitting by the beach at a
            food stall.
          </p>
          <div className="h-[200px] w-full md:h-auto md:w-[70%]">
            <img
              className="h-full rounded-br-3xl rounded-tl-3xl"
              src="/img/stall.png"
              style={{ width: "100%" }}
              alt="Restaurant Construction"
            />
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default About;
