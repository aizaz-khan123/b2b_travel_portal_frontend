"use client";

import { Button, Input } from "@/components/daisyui";

const SearchButton = () => {

    return (
        <>
            <Input
                className="hidden h-9 w-48 items-center justify-start gap-3 border-base-content/20 hover:border-transparent hover:bg-base-content/20 sm:flex"
                size={"sm"}
                placeholder="PNR or Ticket Number">
            </Input>
            <Button color="primary" size="sm">Search</Button>
        </>
    );
};

export { SearchButton };
