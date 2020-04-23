import React from 'react';

const SubNav = () => {

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
        <div className = "subNav">
            
            <div className = "subNavLinks">
                <button className = "prev" onClick = {subNavScroll}>{"<"}</button>
                <a>ONE</a>
                <a>TWO</a>
                <a>THREE</a>
                
                
                
                <button className = "next" onClick = {subNavScroll}>{">"}</button>
            </div>
            
        </div>
    );
};

export default SubNav;