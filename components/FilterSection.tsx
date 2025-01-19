// components/FilterSection.tsx
import Pill from "@/components/common/Pill";

const filters = ["Top Villa", "Self Checkin", "Luxury", "Pet Friendly"];

const FilterSection: React.FC = () => {
  return (
    <section className="p-4 flex gap-2">
      {filters.map((filter) => (
        <Pill key={filter} label={filter} />
      ))}
    </section>
  );
};

export default FilterSection;
