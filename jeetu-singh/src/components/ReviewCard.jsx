import PropTypes from "prop-types";

// Step 2: Define the ratings array
const ratings = new Array(5).fill({
  icon: 'star',
  style: { fontVariationSettings: '"FILL" 1' }
});

// Step 3: Create the ReviewCard component
const ReviewCard = ({
  content,
  name,
  imgSrc,
  company
}) => {
  return (
    <div className="bg-zinc-800 p-5 rounded-xl min-w-[320px] flex flex-col lg:min-w-[420px]">
      <div className="flex items-center gap-1 mb-3">
        {/* Step 4: Map over the ratings array to render each star */}
        {ratings.map(({icon, style}, key) => (
          <span key={key} className="material-symbols-rounded text-yellow-600 text-[18px]" style={style}>
            {icon}
          </span>
        ))}
      </div>

      <p className="text-zinc-400 mb-8">
        {content}
      </p>

      <div className="">
        <figure className="">
          <img src={imgSrc} alt={name} width={44} height={44} loading="lazy" className="img-cover" />
        </figure>

        <div>
          <p>{name}</p>
          <p className="">{company}</p>
        </div>
      </div>
    </div>
  )
}

// Define prop types for the component
ReviewCard.propTypes = {
  content: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired
}

export default ReviewCard;