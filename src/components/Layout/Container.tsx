const Container = ({children, wide = false}: {children: React.ReactNode; wide?: boolean}) => {

  return (
    <div
      className={`${wide ? 'max-w-4xl' : 'max-w-xl'} mx-auto grow p-6 sm:p-9 md:px-12 md:py-20`}
    >
      {children}
    </div>
  );
};

export default Container;
