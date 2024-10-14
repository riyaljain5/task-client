

const Button = ({ text, onClick, type = 'button', className = '' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${className} hover:text-[#000000] py-2 px-6 rounded-xl font-semibold transition duration-300 `}
    >
      {text}
    </button>
  );
};

export default Button;
