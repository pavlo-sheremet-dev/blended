export const Grid = ({ children }) => {
  return (
    <ul className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center">
      {children}
    </ul>
  );
};
