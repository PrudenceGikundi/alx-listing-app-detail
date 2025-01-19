// components/common/PropertyCard.tsx
import { PropertyProps } from "@/interfaces";

const PropertyCard: React.FC<PropertyProps> = ({ name, image, price, rating }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="font-semibold text-lg">{name}</h2>
        <p className="text-gray-600">Price: ${price} / night</p>
        <p className="text-yellow-500">Rating: {rating}⭐</p>
      </div>
    </div>
  );
};

export default PropertyCard;
