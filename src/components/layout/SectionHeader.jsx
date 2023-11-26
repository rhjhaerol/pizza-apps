
const SectionHeader = ({subHeader, mainHeader}) => {
  return (
    <>
      <h3 className="text-gray-500 uppercase font-semibold leading-4">
        {subHeader}
      </h3>
      <h2 className="text-4xl text-primary italic font-bold">{mainHeader}</h2>
    </>
  );
};

export default SectionHeader;
