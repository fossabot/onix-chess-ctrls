import * as React from 'react';
import { FormControl, FormControlProps } from 'react-bootstrap';

const boardsData = require('onix-board-assets/dist/js/boards.json');

export interface SquareSelectorProps extends FormControlProps {
    defaultValue?: string;
    onChangeSquare?: (square: string) => void;
}

export class SquareSelector extends React.Component<SquareSelectorProps, {}> {
    public static defaultProps: SquareSelectorProps = {
        defaultValue: 'color-blue',
        size: 'sm'
    }

    /**
     * constructor
     */
    constructor(props: SquareSelectorProps) {
        super(props);
    }

    private onChange = (e) => {
        const { onChangeSquare } = this.props;
        const square = e.target.value; 

        if (onChangeSquare) {
            onChangeSquare(square);
        }
    };

    private getSquares = () => {
        let result = [];
        boardsData.boardFiles.forEach(element => {
            result.push(<option key={element.code} value={element.code}>{element.name}</option>);
        });

        return result;
    };

    render() {
        const { defaultValue, onChangeSquare, size, ...otherProps } = this.props;
        return (
            <FormControl as="select" size={size} onChange={this.onChange} defaultValue={defaultValue}>
                {this.getSquares()}
            </FormControl>
        );
    }
}