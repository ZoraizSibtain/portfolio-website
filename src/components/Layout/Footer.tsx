const Footer = () => {

  return(
    <div
      className="flex border-t-[0.5px] text-gray-500 border-gray-300 justify-center items-center h-8 md:h-20 space-x-3 gap-2 text-sm"
    >
      <span className="text-primary">Made by</span>Zoraiz Sibtain | {new Date().getFullYear()}
    </div>
  )
};

export default Footer;
