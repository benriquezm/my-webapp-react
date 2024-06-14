import React from "react";
import { render, screen } from "@testing-library/react";

import Button from "../../../components/Button/button";

describe("Button mount", () => {
    const propsList = [
        { btnStyle: "primary", btnName: "Primary", isOutline: false },
        { btnStyle: "secondary", btnName: "Secondary", isOutline: false },
        { btnStyle: "success", btnName: "Success", isOutline: false },
        { btnStyle: "danger", btnName: "Danger", isOutline: false },
        { btnStyle: "warning", btnName: "Warning", isOutline: false },
        { btnStyle: "info", btnName: "Info", isOutline: false },
        { btnStyle: "light", btnName: "Light", isOutline: false },
        { btnStyle: "dark", btnName: "Dark", isOutline: false },
        { btnStyle: "link", btnName: "Link", isOutline: false }
    ];

    propsList.forEach( props => {
        const { btnStyle, btnName } = props;
        it(`Should render a button with the class ${btnStyle}.`, () => {
            //  ARRANGE
            const { rerender } = render(<Button {...props} />);
    
            //  ACT
            const tagButton = screen.getByRole('button', { name: new RegExp(`${btnName}`, "i")  });
    
            //  ASSERT
            expect(tagButton).toHaveClass(`btn-${btnStyle}`);

            //  Clean Only for this Test
            rerender(null);
        });
    });

    const propsListOutline = [
        { btnStyle: "primary", btnName: "Primary", isOutline: true },
        { btnStyle: "secondary", btnName: "Secondary", isOutline: true },
        { btnStyle: "success", btnName: "Success", isOutline: true },
        { btnStyle: "danger", btnName: "Danger", isOutline: true },
        { btnStyle: "warning", btnName: "Warning", isOutline: true },
        { btnStyle: "info", btnName: "Info", isOutline: true },
        { btnStyle: "light", btnName: "Light", isOutline: true },
        { btnStyle: "dark", btnName: "Dark", isOutline: true }
    ];

    propsListOutline.forEach( props => {
        const { btnStyle, btnName } = props;
        it(`Should render a button with the class outline ${btnStyle}.`, () => {
            //  ARRANGE
            const { rerender } = render(<Button {...props} />);
    
            //  ACT
            const tagButton = screen.getByRole('button', { name: new RegExp(`${btnName}`, "i")  });
    
            //  ASSERT
            expect(tagButton).toHaveClass(`btn-outline-${btnStyle}`);

            //  Clean Only for this Test
            rerender(null);
        });
    });

    it(`Should render a large button.`, () => {
        const props = { btnName: "Large Button", btnSize: "large", btnStyle: "primary", isOutline: false };
        const { btnName } = props;
        //  ARRANGE
        render(<Button {...props} />);

        //  ACT
        const tagButton = screen.getByRole('button', { name: new RegExp(`${btnName}`, "i")  });

        //  ASSERT
        expect(tagButton).toHaveClass('btn-lg');
    });

    it(`Should render a small button.`, () => {
        const props = { btnName: "Small Button", btnSize: "small", btnStyle: "primary", isOutline: false };
        const { btnName } = props;
        //  ARRANGE
        render(<Button {...props} />);

        //  ACT
        const tagButton = screen.getByRole('button', { name: new RegExp(`${btnName}`, "i")  });

        //  ASSERT
        expect(tagButton).toHaveClass('btn-sm');
    });

    const propsListInputTag = [
        { btnName: "Large Button", btnSize: "large", btnStyle: "primary", btnTag: "input", btnValue: "Input", dataTestId: "field-button", isOutline: false },
        { btnName: "Large Button", btnSize: "large", btnStyle: "primary", btnTag: "input", btnValue: "Submit", dataTestId: "field-submit", isOutline: false },
        { btnName: "Large Button", btnSize: "large", btnStyle: "primary", btnTag: "input", btnValue: "Reset", dataTestId: "field-reset", isOutline: false }
    ];

    propsListInputTag.forEach(props => {
        const { btnValue, dataTestId } = props;
        it(`Should render a input type ${btnValue}.`, async () => {
            //  ARRANGE
            const { rerender } = render(<Button {...props} />);
    
            //  ACT
            const tagButton = await screen.findByTestId(dataTestId);
    
            //  ASSERT
            expect(tagButton).toHaveDisplayValue(btnValue);

            //  Clean Only for this Test
            rerender(null);
        });

        it(`Should render a large input.`, async () => {
            //  ARRANGE
            const { rerender } = render(<Button {...props} />);
    
            //  ACT
            const tagButton = await screen.findByTestId(dataTestId);
    
            //  ASSERT
            expect(tagButton).toHaveClass('btn-lg');

            //  Clean Only for this Test
            rerender(null);
        });
    });

    const propsListInputTagOutline = [
        { btnName: "Small Button", btnSize: "small", btnStyle: "primary", btnTag: "input", btnValue: "Input", dataTestId: "field-button", isOutline: true },
        { btnName: "Small Button", btnSize: "small", btnStyle: "primary", btnTag: "input", btnValue: "Submit", dataTestId: "field-submit", isOutline: true },
        { btnName: "Small Button", btnSize: "small", btnStyle: "primary", btnTag: "input", btnValue: "Reset", dataTestId: "field-reset", isOutline: true }
    ];

    propsListInputTagOutline.forEach(props => {
        const { btnStyle, btnValue, dataTestId } = props;
        it(`Should render a input with the class outline ${btnStyle}.`, async () => {
            //  ARRANGE
            const { rerender } = render(<Button {...props} />);
    
            //  ACT
            const tagButton = await screen.findByTestId(dataTestId);
    
            //  ASSERT
            expect(tagButton).toHaveDisplayValue(btnValue);
            expect(tagButton).toHaveClass(`btn-outline-${btnStyle}`);

            //  Clean Only for this Test
            rerender(null);
        });

        it(`Should render a small input.`, async () => {
            //  ARRANGE
            const { rerender } = render(<Button {...props} />);
    
            //  ACT
            const tagButton = await screen.findByTestId(dataTestId);
    
            //  ASSERT
            expect(tagButton).toHaveClass('btn-sm');

            //  Clean Only for this Test
            rerender(null);
        });
    });
});
