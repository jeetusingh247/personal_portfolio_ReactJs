/*
* @copyright 2024 Jeetu Singh
* @license Apache-2.0
*/

// --> Node Modules

import PropTypes from 'prop-types'

// --> Primary Button

import React, { useRef } from 'react';

const useMagnetic = () => {
    const ref = useRef(null);
    React.useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const handleMouseMove = e => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            el.style.transform = `translate(${x * 0.12}px, ${y * 0.12}px)`;
        };
        const handleMouseLeave = () => {
            el.style.transform = '';
        };
        el.addEventListener('mousemove', handleMouseMove);
        el.addEventListener('mouseleave', handleMouseLeave);
        return () => {
            el.removeEventListener('mousemove', handleMouseMove);
            el.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);
    return ref;
};

const ButtonPrimary = ({
        href,
        target = '_self',
        label,
        icon,
        classes
}) => {
        const magneticRef = useMagnetic();
        if (href) {
                return (
                        <a href={href} target={target} className={"btn btn-primary " + classes} ref={magneticRef}>
                                {label}
                                {icon ?
                                <span className='material-symbols-rounded' aria-hidden='true' >
                                        {icon}
                                </span>
                                : undefined 
                        }
                        </a>
                )
        } else {
                return (
                        <button className={"btn btn-primary " + classes} ref={magneticRef}>
                                {label}

                                {icon ?
                                <span className='material-symbols-rounded' aria-hidden='true' >
                                        {icon}
                                </span>
                                : undefined 
                        }
                        </button>
                )
        }
}

ButtonPrimary.propTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    target: PropTypes.string,
    icon: PropTypes.string,
    classes: PropTypes.string
}


// --> Outline Button

const ButtonOutline = ({
    href,
    target = '_self',
    label,
    icon,
    classes
}) => {
    if (href) {
        return (
            <a href={href} target={target} className={"btn btn-outline " + classes}>
                {label}
                {icon ?
                <span className='material-symbols-rounded' aria-hidden='true' >
                    {icon}
                </span>
                : undefined 
            }
            </a>
        )
    } else {
        return (
            <button className={"btn btn-outline " + classes}>
                {label}

                {icon ?
                <span className='material-symbols-rounded' aria-hidden='true' >
                    {icon}
                </span>
                : undefined 
            }
            </button>
        )
    }
}

ButtonOutline.propTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    target: PropTypes.string,
    icon: PropTypes.string,
    classes: PropTypes.string
}

export {
    ButtonPrimary,
    ButtonOutline
}
