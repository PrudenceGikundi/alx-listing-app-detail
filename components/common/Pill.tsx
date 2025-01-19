// components/common/Pill.tsx
interface PillProps {
  label: string;
  onClick?: () => void;
}

const Pill: React.FC<PillProps> = ({ label, onClick }) => {
  return (
    <button
      className="bg-gray-200 text-gray-700 px-4 py-1 rounded-full hover:bg-gray-300"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Pill;
