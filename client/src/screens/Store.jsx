import React from "react";
import Heading from "../partials/Heading";
import useDocumentTitle from "../hooks/useDocumentTitle";
import ShopIframe from "../components/ShopIframe";

const Store = () => {
    useDocumentTitle("Merchandise Store - HSJN FinWisdom Pvt Ltd");

    return (
        <>
            <Heading heading="Merchandise Store" image="/illustrations/1.png" />
            <ShopIframe />
        </>
    );
};

export default Store;
