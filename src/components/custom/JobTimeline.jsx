import React from "react";

const JobTimeline = () => {
  return (
    <section className="max-w-6xl mx-auto p-4">
      <div className="relative timeline">
        {/* First Container */}
        <div className="container left w-full md:w-1/2 md:pr-8 relative mb-10">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">2017</h2>
            <p>
              Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
              admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis
              iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto
              primis ea eam.
            </p>
          </div>
        </div>

        {/* Second Container */}
        <div className="container right w-full md:w-1/2 md:pl-8 relative mb-10">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">2016</h2>
            <p>
              Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
              admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis
              iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto
              primis ea eam.
            </p>
          </div>
        </div>

        {/* Repeat for other timeline items */}
        <div className="container left w-full md:w-1/2 md:pr-8 relative mb-10">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">2015</h2>
            <p>
              Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
              admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis
              iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto
              primis ea eam.
            </p>
          </div>
        </div>

        <div className="container right w-full md:w-1/2 md:pl-8 relative mb-10">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">2012</h2>
            <p>
              Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
              admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis
              iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto
              primis ea eam.
            </p>
          </div>
        </div>

        <div className="container left w-full md:w-1/2 md:pr-8 relative mb-10">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">2011</h2>
            <p>
              Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
              admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis
              iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto
              primis ea eam.
            </p>
          </div>
        </div>

        <div className="container right w-full md:w-1/2 md:pl-8 relative mb-10">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">2007</h2>
            <p>
              Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
              admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis
              iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto
              primis ea eam.
            </p>
          </div>
        </div>

        {/* Vertical timeline line */}
        <div className="absolute w-1 bg-white left-1/2 transform -translate-x-1/2 h-full top-0"></div>
      </div>
    </section>
  );
};

export default JobTimeline;
