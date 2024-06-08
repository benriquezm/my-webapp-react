import React from "react";
import { render, screen } from "@testing-library/react";

import HomePage from "../../pages/home-page";

beforeEach(() => {
    /** Render Page or Component */
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(<HomePage />);
});

describe("Home page mount", () => {
    it("Should be display the home page title", ()=> {
        /** Find element in the render */
        const title = screen.getByText(/my quotes/i);
        /** Expect text in the DOM */
        expect(title).toBeInTheDocument();
    });

    it("Should be display three quotes", async ()=> {
        /** Find element in the render */
        const listItem = await screen.findAllByRole("listitem");
        /** Expect text in the DOM */
        expect(listItem).toHaveLength(3);
    });
});
