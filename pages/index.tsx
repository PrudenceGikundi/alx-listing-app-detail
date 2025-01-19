// pages/index.tsx
import React, { useState } from "react";
import Image from "next/image";
import { PROPERTYLISTINGSAMPLE } from "@/constants/index";
import { PropertyProps } from "@/interfaces/index";

const filters = [
  "Top Villa",
  "Self Checkin",
  "Pet Friendly",
  "Luxury Villa",
  "Mountain View",
  "Beachfront",
];

const Home: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const filteredProperties = activeFilter
    ? PROPERTYLISTINGSAMPLE.filter((property) =>
        property.category.includes(activeFilter)
      )
    : PROPERTYLISTINGSAMPLE;

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter === activeFilter ? null : filter);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-cover bg-center text-white" style={{ backgroundImage: "url('/path/to/your/background.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center p-6">
          <h1 className="text-4xl md:text-6xl font-bold">Find your favorite place here!</h1>
          <p className="mt-4 text-lg md:text-xl">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-6 px-4 bg-gray-100">
        <h2 className="text-2xl font-semibold mb-4">Filter by Category</h2>
        <div className="flex flex-wrap gap-2">
          {filters.map((filter, index) => (
            <button
              key={index}
              onClick={() => handleFilterClick(filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                activeFilter === filter
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      {/* Listing Section */}
      <section className="py-8 px-4">
        <h2 className="text-2xl font-semibold mb-4">Property Listings</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProperties.map((property, index) => (
            <div
              key={index}
              className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <Image
                src={property.image}
                alt={property.name}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold">{property.name}</h3>
                <p className="text-sm text-gray-600">{property.address.city}, {property.address.country}</p>
                <div className="flex justify-between items-center mt-4">
                  <p className="text-lg font-semibold text-blue-600">${property.price} / night</p>
                  <p className="text-sm text-gray-500">⭐ {property.rating}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
