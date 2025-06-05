const Card = ({ style, text, image }) => {
  return image && !text ?(
    <img className="absolute w-15 cursor-grab"
      src={image} style={style} />
) : (
    <div div
      className="absolute px-1 py-4 text-xl text-center 
      rounded-full ring ring-[#4F3900] font-extralight bg-[#7E5A00] 
      w-[12rem] cursor-grab" 
      style={style}>
        {text}
        </div>
  );
};

export default Card