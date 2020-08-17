import React, { SelectHTMLAttributes } from 'react';
import './styles.css';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    name: string;
    options: Array<{
        id: number;
        name: string;
    }>;
}

const Select: React.FC<SelectProps> = ({name, options, ...rest}) => {
    return (
        <div className="select-block">
            <select value="" id={name} {...rest} data-testid="input-select">
                <option value="" disabled hidden>Selecione uma opção</option>
                {
                    options.map(option => {
                        return (
                            <option
                                key={option.id}
                                value={option.id}
                            >
                                {option.name}
                            </option>
                        )
                    })
                }
            </select>
        </div>
    )
}

export default Select;