import {makeAsciiArt} from "./art.js";


export class Poll {
    /**
     * @param {HTMLElement} element 
     */
    constructor(element, plotlib) {
        this.element = element;
        this.plotlib = plotlib;
    }
    renderQuestion(question){

        var obj=JSON.parse(question);
        console.log(obj);
        var text = obj.question


        for(var i=0;i<obj.options.length;i++)
   {
   
         text=text+'   <br><input type="radio" name="pizza" value='+obj.options[i]+' id="radio1"><label for="radio1">'+obj.options[i]+'</label><br>'
   }   
 //       <button id="btn">Vote!</button>
    
 this.element.innerHTML=text+'<br><button id="nextuser">Next User</button><button id="showresults">Show Results</button>';

 this.element.querySelector("#nextuser").addEventListener("click", ev => {
     })

    this.element.querySelector("#showresults").addEventListener("click", ev => {
    
    // always add `preventDefault` in an event handler. otherwise, the browser
        // will do some default action which usually means submitting the data to the server, 
        // which causes the entire page to reload.
        // since we have no server, we don't want that :-)
        ev.preventDefault();

        const answer = this.element.querySelector("input[name=pizza]:checked").value;
        this.element.innerHTML = `<p>The answer that was picked was ${answer}.</p><div id="pizza"></div>`;
        
        //makeAsciiArt(this.element.querySelector("#pizza"));
        this.renderResultChart([1], [answer]);
   
    
    })



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
            this.renderResultChart([1], [answer]);
        })


    }

    renderResultChart(data, labels) {
        let layout = {
            height: 400,
            width: 500
        };

        let plotdef = [{
            values: data || [19, 26, 55],
            labels: labels || ['Residential', 'Non-Residential', 'Utility'],
            type: 'pie'
        }];

        this.plotlib.newPlot("drawing", plotdef, layout);
    }
}