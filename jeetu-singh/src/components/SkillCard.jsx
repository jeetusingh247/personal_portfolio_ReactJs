/*
* @copyright 2024 Jeetu Singh
* @license Apache-2.0
*/

// --> Node Modules

import PropTypes from "prop-types";

const SkillCard = ({
    imgSrc,
    label,
    desc,
    classes
}) => {
  return (
    <div className="">
        <figure className="">
            <img src={imgSrc} width={32} height={32} alt={label}/>
        </figure>
        <div className="">
            <h3 className="">{label}</h3>
            <p className="">{desc}</p>
        </div>    
    </div>
  )
}

SkillCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  classes: PropTypes.string
}

export default SkillCard
