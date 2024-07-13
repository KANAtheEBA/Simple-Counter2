(() => {
    const $counter = document.getElementById("js-counter");

    const clickHandler = () => {
        $counter.textContent = 0;
    };

    document.getElementById("js-reset-button").addEventListener("click", clickHandler);

    let intDistance = 15;
    let bEscaping = false;
    let strDirection = null;
    let strDirectionArray = new Array("Up", "Down", "Left", "Right");

    const errorEnvironment = () => {
        alert("ご利用の環境では、このスクリプトは作動しません。");
    }

    const byId = (id) => {
        return document.getElementById(id);
    }

    const addEvent = (evt, func, cap) => {
        if(this.addEventListener){
            this.addEventListener(evt, func, cap);
        } else if(this.attachEvent){
            this.attachEvent("on" + evt, func);
        } else {
            errorEnvironment();
        }
    }
    Object.prototype.addEvent = addEvent;
    Document.prototype.addEvent = addEvent;
    Element.prototype.addEvent = addEvent;
    
    const removeEvent = (evt, func, cap) => {
        if(this.removeEventListener){
            this.removeEventListener(evt, func, cap);
        } else if(this.detachEvent){
            this.detachEvent("on" + evt, func);
        } else {
            errorEnvironment();
        }
    }
    Object.prototype.removeEvent = removeEvent;
    Document.prototype.removeEvent = removeEvent;
    Element.prototype.removeEvent = removeEvent;

    const addTop = (elm, intOffsetY) => {
        if(!elm.hasEscapeTop) {
            elm.hasEscapeTop = true; elm.escapeTop = 0;
            elm.escapeTop += intOffsetY;
            elm.style.top = String(elm.escapeTop) + "px";
        }

    const addLeft = (elm, intOffsetX) => {
        if(!elm.hasEscapeLeft) {
            elm.hasEscapeLeft = true; elm.escapeLeft = 0;
            elm.escapeLeft += intOffsetX;
            elm.style.left = String(elm.escapeLeft) + "px";
        }
    }

    const doEscapeCore = (intTimes) => {
        if(!intTimes) {
            cancelEscape(); return;
        }
        if(!window.strDirection) {
            bEscaping = true;
            let intDirection = Math.floor(Math.random() * 4);
            window.strDirection = window.strDirectionArray[intDirection];
        }
        
    }

    }
})();

