export const Heading = ({ children, isCenter }) => {
  return (
    <p className={`text-[#034d94] text-xl ${isCenter && "md:text-center"}`}>
      {children}
    </p>
  );
};
