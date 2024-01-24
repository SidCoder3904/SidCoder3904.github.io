const Loading = () => {
  return (
    <div className="flex bg-palette4 bg-gradient-to-t from-palette4 via-transparent to-palette4 h-full w-full absolute justify-center items-center flex-col">
      <div className="animate-pulse flex flex-col h-1/5 items-center">
        <div className="text-palette2 font-Raleway font-semibold text-lg">
          SIDDHARTH VERMA
        </div>
        <img src="assets/favicon.ico" alt="Loading" className="h-full" />
      </div>
    </div>
  );
};

export default Loading;
