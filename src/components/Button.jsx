export default function Button({
  className = "",
  icon,
  text = "",
  effect = false,
  onClick = () => null,
  title = "",
  ariaLable = "",
}) {
  if (!icon && !text) return null;
  return (
    <>
      <button
        title={title}
        aria-label={ariaLable}
        onClick={onClick}
        className={` group font-semibold flex  cursor-pointer  items-center  transition  duration-300 ${className} ${effect ? "" : "hover:scale-105"}`}
      >
        {icon && (
          <span
          className={`${text ? `mr-2` : ``} ${effect ? "group-hover:translate-x-3" : "group-hover:scale-none"} transition-transform  duration-300 inline-block`}
          >
            {icon}
          </span>
        )}
        {text}
      </button>
    </>
  );
}
