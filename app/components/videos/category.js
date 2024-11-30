

const Category = ({ name, id, activeCategory, setActiveCategory }) => {

  return (
    <div
    onClick={() => setActiveCategory(id)}
    className={`rounded-[8px] px-[16px] py-[8px] cursor-pointer  ${
      activeCategory === id
        ? "bg-[#F9F9F9E5] text-[#405189] !border border-[#405189]" 
        : "text-[#1B1B1B99] border border-[#1B1B1B1A]" 
    }`}
    >
      <p className="text-[14px] text-center">{name}</p>
    </div>
  );
};

export default Category;
