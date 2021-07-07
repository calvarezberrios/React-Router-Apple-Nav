import React from 'react';
import styled from "styled-components";
import { useRouteMatch, Link } from "react-router-dom";



const SubNavDiv = styled.div`
    width: 100%;
    height: 105px;
    overflow-x: scroll;
    -ms-overflow-style: none;
    scroll-behavior: smooth;
    background: #ff000066;

    &::-webkit-scrollbar {
        display: none;
    }
    
    
`;

const SubNavLinks = styled.div`
    width: auto;
    height: 100%;
    margin: 0 auto;
    white-space: nowrap;

    button {
        position:absolute;
        height: 105px;
        display: block;
        padding: 40px 10px;
        background: #ff9999;
        border: none;
        color: black;

        &.prev {
            border-right: 1px solid #ccc;
            left: 0;
            margin-right: 20px;
        }

        &.next {
            border-left: 1px solid #ccc;
            margin-top: -105px;
            right: 0;
            margin-left: 20px;
        }
    }

    a {
        display: inline-block;
        width: 120px;
        height: 100%;
        padding: 40px 0px;

        &:first-child {
            padding-left: 100px;
        }
    }
`;



const SubNav = () => {
    const routeMatch = useRouteMatch();

    console.log(routeMatch);

    window.addEventListener("resize", (e) => {
        if(document.querySelector(".subNav").scrollWidth > document.querySelector(".subNav").clientWidth) {
            document.querySelector(".prev").setAttribute("style", "display: block");
            document.querySelector(".next").setAttribute("style", "display: block");
        } else {
            document.querySelector(".prev").setAttribute("style", "display: none");
            document.querySelector(".next").setAttribute("style", "display: none");
        }
    });

    function subNavScroll(e) {
        if(e.target.className === "prev") {
            document.querySelector(".subNav").scrollLeft -= 450;
        } else {
            document.querySelector(".subNav").scrollLeft += 450;
        }
    }
    

    return (
        <SubNavDiv className = "subNav">
            
            <SubNavLinks className = "subNavLinks">
                <button className = "prev" onClick = {subNavScroll}>{"<"}</button>
                <Link to = {`/linktwo/subNav1`}>ONE</Link>
                <Link to = {`/linktwo/subNav2`}>TWO</Link>
                <Link to = {`/linktwo/subNav3`}>THREE</Link>
                
                
                
                <button className = "next" onClick = {subNavScroll}>{">"}</button>
            </SubNavLinks>
            
        </SubNavDiv>
    );
};

export default SubNav;