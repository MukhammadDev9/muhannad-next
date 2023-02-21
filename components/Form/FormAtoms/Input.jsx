import React from 'react';

const Input = (props) => {
    return (
        <div className="form__input--area">
            <label className="form__item_label" htmlFor={props.name}>
                {props.label}
            </label>
            {props.textarea ? (
                <textarea
                    className="form__item_input form__item_input-textarea"
                    placeholder={props.placeholder}
                />
            ) : (
                <input
                    className="form__item_input"
                    type={props.type}
                    id={props.name}
                    name={props.name}
                    placeholder={props.placeholder}
                />
            )}
        </div>
    );
};

export default Input;
