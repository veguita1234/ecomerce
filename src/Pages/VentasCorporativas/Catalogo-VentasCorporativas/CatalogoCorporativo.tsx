import React, { useEffect, useRef } from 'react';
import './CatalogoCorporativo.css';
import HeaderBottom from "../../Principal/HeaderBottom";

// Definimos las interfaces para los elementos del DOM
interface FlipBookElements {
    book: HTMLElement;
    leaves: NodeListOf<HTMLElement>;
    buttons: {
        next: HTMLButtonElement;
        prev: HTMLButtonElement;
    };
}

class FlipBook {
    elems: FlipBookElements;
    currentPagePosition: number;

    constructor(bookElem: HTMLElement) {
        this.elems = {
            book: bookElem,
            leaves: bookElem.querySelectorAll(".leaf"),
            buttons: {
                next: document.getElementById("nextPage") as HTMLButtonElement,
                prev: document.getElementById("prevPage") as HTMLButtonElement,
            },
        };
        this.currentPagePosition = 0;
        this.setupEvents();
        this.turnPage(0);
    }

    setPagePosition(page: HTMLElement, position: number, index: number) {
        let transform = `translate3d(0,0,${(position < 0 ? 1 : -1) * Math.abs(index)}px)`;

        if (position < 0) {
            transform += " rotate3d(0,1,0,-180deg)";
            page.classList.add("turned");
        } else {
            page.classList.remove("turned");
        }

        if (page.style.transform !== transform) {
            page.style.transform = transform;
        }
    }

    turnPage(delta: number) {
        this.currentPagePosition += delta;
        if (this.currentPagePosition < 0) {
            this.currentPagePosition = 0;
            return;
        }
        if (this.currentPagePosition > this.elems.leaves.length) {
            this.currentPagePosition = this.elems.leaves.length;
            return;
        }

        this.elems.leaves.forEach((page, index) => {
            const pageNumber = index;
            this.setPagePosition(page, pageNumber - this.currentPagePosition, index);
        });

        if (this.currentPagePosition === 0) {
            this.elems.buttons.prev.setAttribute("disabled", "disabled");
        } else if (this.currentPagePosition === this.elems.leaves.length) {
            this.elems.buttons.next.setAttribute("disabled", "disabled");
        } else {
            this.elems.buttons.next.removeAttribute("disabled");
            this.elems.buttons.prev.removeAttribute("disabled");
        }
    }

    setupEvents() {
        this.elems.buttons.next.addEventListener("click", () => {
            this.turnPage(1);
        });
        this.elems.buttons.prev.addEventListener("click", () => {
            this.turnPage(-1);
        });
    }
}

const CatalogoCorporativo: React.FC = () => {
    const flipbookRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (flipbookRef.current) {
            new FlipBook(flipbookRef.current);
        }
    }, []);

    return (
        <div>
            <HeaderBottom /><br/><br/>
            <div style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",textAlign:"center"}}>
                <button  id="prevPage"> Anterior</button>
                
            <div className="flipbook centered" id="flipbook" ref={flipbookRef} style={{margin:"0"}}>
            
                <div className="leaf">
                    <div className="page front title external" style={{ backgroundColor: '#009BFF' }}>
                        <span>CATÁLOGO</span>
                    </div>
                    <div className="page back" style={{ backgroundColor: '#FFAA00' }}>
                        <span>1</span>
                    </div>
                </div>
                
                <div className="leaf">
                    <div className="page front" style={{ backgroundColor: '#FFAA00' }}>
                        <span>2</span>
                    </div>
                    <div className="page back" style={{ backgroundColor: '#5A6D0D' }}>
                        
                        <span>3</span>
                    </div>
                </div>
                
                <div className="leaf">
                    <div className="page front" style={{ backgroundColor: '#5A6D0D' }}>
                        <span>4</span>
                    </div>
                    <div className="page back" style={{ backgroundColor: '#F4A261' }}>
                        <span>5</span>
                    </div>
                </div>
                <div className="leaf">
                    <div className="page front" style={{ backgroundColor: '#F4A261' }}>
                        <span>6</span>
                    </div>
                    <div className="page back external" style={{ backgroundColor: '#009BFF' }}>
                        <span>FIN</span>
                    </div>
                </div>
                
            </div>
            <button  id="nextPage">Siguiente </button>
            </div>
            

        </div>
    );
};

export default CatalogoCorporativo;







