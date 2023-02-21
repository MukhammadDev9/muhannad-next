import React from 'react';

const Input = (props) => {
    return (
        <div className="form__input--area">
            <label className="form__item_label" htmlFor={props.name}>
                {props.label}
            </label>
            {props.textarea ? (
                <textarea
                    onChange={(e) => props.handleChange(e, props.name)}
                    className="form__item_input form__item_input-textarea"
                    placeholder={props.placeholder}
                    required={false}
                />
            ) : (
                <input
                    className="form__item_input"
                    type={props.type}
                    id={props.name}
                    name={props.name}
                    placeholder={props.placeholder}
                    onChange={(e) => props.handleChange(e, props.name)}
                    required={false}
                />
            )}
            <span className="error-message active">{props.message}</span>
        </div>
    );
};

export default Input;
