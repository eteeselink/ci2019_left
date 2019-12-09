import {makeAsciiArt} from "./art.js";

export class Poll {
    /**
     * @param {HTMLElement} element 
     */
    constructor(element) {
        this.element = element;
    }

    render(name) {
        this.element.innerHTML = `
            This is a question<br>
            <input type="radio" name="pizza" value="Yes" id="radio1">
            <label for="radio1">Yes</label><br>

            <input type="radio" name="pizza" value="No" id="radio2">
            <label for="radio2">No</label><br>

            <button id="btn">Vote!</button>
        `;

        this.element.querySelector("#btn").addEventListener("click", ev => {
            // always add `preventDefault` in an event handler. otherwise, the browser
            // will do some default action which usually means submitting the data to the server, 
            // which causes the entire page to reload.
            // since we have no server, we don't want that :-)
            ev.preventDefault();

            const answer = this.element.querySelector("input[name=pizza]:checked").value;
            this.element.innerHTML = `<p>The answer that was picked was ${answer}.</p><div id="pizza"></div>`;
            
            //makeAsciiArt(this.element.querySelector("#pizza"));
            renderResultChart([value]);
        })
    }
}