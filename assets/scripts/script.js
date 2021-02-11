const responsiveMenu = () => {
    let nav = document.getElementById('nav-responsive');
    if (nav.className === "right-nav") {
        nav.className += " responsive";
    } else {
        nav.className = "right-nav";
    }
    }

    

    const serviceSelect = () => {
        const dynamicForm = document.getElementById('services');
        let selection = dynamicForm.options[dynamicForm.selectedIndex].value;
        let formBody = document.getElementById('dynamic-form');
        if (selection === "null") {
            formBody.innerHTML = "";
            document.getElementById("submit-button").setAttribute("name","");
        }
        else if (selection === "moving") {
            formBody.innerHTML = `
            <div class="additional-info">
                <div class="form-item">
                    <label for="addfrom">Address From</label>
                    <input name="addfrom" type="text" id="search_input" required>
                </div>
                <div class="form-item">
                    <label for="addto">Address To</label>
                    <input name="addto" type="text" id="search_input" required>
                </div>
                <div class="form-item">
                    <label for="ready-to-move">Are items ready to be moved?</label>
                    <input name="ready-to-move" type="text" required>
                </div>
                <div class="form-item">
                    <label for="where-to-park">Where should we park?</label>
                    <input name="where-to-park" type="text" required>
                </div>
            </div>
            
            <div class="moving-form">
                <div class="form-item">
                    <label for="date">Date</label>
                    <input name="date" type="date" required>
                </div>
                <div class="form-item">   
                    <label for="stairs">Stairs?</label>
                    <select name="stairs" id="stairs">
                        <option value="no">No</option>
                        <option value="yes">Yes</option>
                    </select>
                </div>
                <div class="form-item">
                    <label for="flights">How many flights?</label>
                    <input name="flights" type="text">
                </div>
                <div class="form-item">
                    <label for="number-movers">Number of Movers</label>
                    <input name="number-movers" type="text">
                </div>
            </div>
            `;
            document.getElementById("submit-button").setAttribute("name","moving");

        } 
        // else if (selection === "wood-refinish") {
        //     formBody.innerHTML = `
        //     <div class="wood-refinish">
        //         <p>Please add a photo of the item you are inquiring about</p>    
        //         <input type="file" name="file[]" id="file" accept="image/*" multiple/>
        //         <label for="file"><i class="material-icons">add_photo_alternate</i>Choose a photo</label>
        //     </div>
        //     `;
        //     document.getElementById("submit-button").setAttribute("name","wood-refinish");
        // } 
        else if (selection === "labor-only") {
            formBody.innerHTML = `
                <div class="labor-only">
                    <div class="form-item">
                        <label for="truck-size">Size of Truck</label>
                        <input name="truck-size" type="text">
                    </div>
                    <div class="form-item">
                        <label for="trailer-size">Size of Trailer</label>
                        <input name="trailer-size" type="text">
                    </div>
                    <div class="form-item">
                    <label for="date">Date</label>
                    <input name="date" type="date" required>
                </div>
                

                </div>
                <div class="labor-upload">
                <p>Please add a photo of the item you are inquiring about</p>    
                <input type="file" name="file[]" id="file" accept="image/*" multiple/>
                <label for="file" id="file-text"><i class="material-icons">add_photo_alternate</i>Choose a photo</label>
                </div>
            `;
            document.getElementById("submit-button").setAttribute("name","labor-only");
        } 
        // else if (selection === "tv-wall-mount") {
        //     formBody.innerHTML = `
        //         <div class="tv-wall-mount">
        //             <div class="form-item">
        //                 <label for="type-wall">Type of Wall</label>
        //                 <input name="type-wall" type="text" required>
        //             </div>
        //             <div class="form-item">
        //                 <label for="tv-size">Size of TV</label>
        //                 <input name="tv-size" type="text" required>
        //             </div>
        //             <div class="form-item">   
        //             <label for="hid-cords">Hidden Cords?</label>
        //                 <select name="hid-cords" id="hid-cords">
        //                     <option value="no">No</option>
        //                     <option value="yes">Yes</option>
        //                 </select>
        //             </div>
        //             <div class="form-item">
        //                 <label for="tv-quant">How many TV's?</label>
        //                 <input name="tv-quant" type="text">
        //             </div>
        //             <div class="form-item">
        //                 <label for="have-wall-mount">Do you have a wall mount?</label>
        //                 <input name="have-wall-mount" type="text" required>
        //             </div>
        //             <div class="form-item">
        //             <label for="date">Date</label>
        //             <input name="date" type="date" required>
        //         </div>
        //         </div>
        //     `;
        //     document.getElementById("submit-button").setAttribute("name","tv-wall-mount");
        // } 
        else if (selection === "delivery") {
            formBody.innerHTML = `
                <div class="delivery">
                    <div class="form-item">
                        <label for="addfrom">Address From</label>
                        <input name="addfrom" type="text" id="search_input" required>
                    </div>
                    <div class="form-item">
                        <label for="addto">Address To</label>
                        <input name="addto" type="text" id="search_input" required>
                    </div>
                    
                </div>
                <div class="three-column">
                    <div class="form-item">
                        <label for="where-to-park">Where should we park?</label>
                        <input name="where-to-park" type="text">
                    </div>
                    <div class="form-item">
                        <label for="date">Date</label>
                        <input name="date" type="date" required>
                    </div>
                    <div class="form-item">   
                        <label for="item-seller">Item seller?</label>
                        <select name="item-seller" id="item-seller">
                            <option value="null">Choose one</option>
                            <option value="private">Private seller</option>
                            <option value="store">Store</option>
                        </select>
                    </div>
                    
                    </div>
                    <h3 style="text-align:center">Please use the comment box to provide a brief description of the item and the quantity</h3>                  
            `;
            document.getElementById("submit-button").setAttribute("name","delivery");
        } 
        // else if (selection === "furniture-assembly"){
        //     formBody.innerHTML = `
        //         <div class="furniture-assembly">
        //             <div class="form-item">
        //             <label for="furniture-assmbl">Need to assembly or disassembly?</label>
        //                 <select name="furniture-assmbl" id="furniture-assmbl" required>
        //                     <option value="assembly">Assembly</option>
        //                     <option value="disassembly">Disassembly</option>
        //                 </select>
        //             </div>
        //             <div class="form-item">
        //                 <label for="notes-fur-assm">Please add type, brand name or serial number of the item</label>
        //                 <input name="notes-fur-assm" type="text">
        //             </div>
                    

        //         </div>
        //         <div class="wood-refinish">
        //         <p>Please add a picture of the item you are inquiring about</p>    
        //         <input type="file" name="file[]" id="file" accept="image/*" multiple/>
        //         <label for="file"><i class="material-icons">add_photo_alternate</i>Choose a photo</label>
        //     </div>
        //     `;
        //     document.getElementById("submit-button").setAttribute("name","furniture-assembly");
        // } 
        // else if (selection === "packing"){
        //     formBody.innerHTML = `
        //         <div class="packing">
        //             <div class="form-item">
        //                 <label for="pk-material">Do you have packing material?</label>
        //                 <select name="pk-material" id="pk-material">
        //                     <option value="no">No</option>
        //                     <option value="yes">Yes</option>
        //                 </select>
        //             </div>
        //             <div class="form-item">
        //                 <label for="rooms">How many rooms?</label>
        //                 <input name="rooms" type="number" required>
        //             </div>
        //         </div>
        //     `;
        //     document.getElementById("packing").setAttribute("name","packing");
        // }

    }

    const preferredTimeValidation = () =>{

        let preferredTime1 = document.getElementById('first-choice');
        let preferredTime2 = document.getElementById('second-choice');
        let preferredTime3 = document.getElementById('third-choice');
        
        let firstChoice = preferredTime1.options[preferredTime1.selectedIndex].value;
        let secondChoice = preferredTime2.options[preferredTime2.selectedIndex].value;
        let thirdChoice = preferredTime2.options[preferredTime3.selectedIndex].value;
        
        if (firstChoice === secondChoice || secondChoice === thirdChoice || firstChoice === thirdChoice){
          document.getElementById("time-choice-error").innerHTML = "Please choose a different time for each choice";        
        }
        else if (firstChoice !== secondChoice && secondChoice !== thirdChoice){
          document.getElementById("time-choice-error").innerHTML = "";
        } 
      }

let searchInput = 'search_input';

const addressAutocomplete = () => {
    autocomplete= new google.maps.places.Autocomplete((document.getElementById(searchInput)), {
        types: ['geocode']
    
    });

    google.maps.event.addListener(autocomplete, 'place_changed', function() {
        let near_place = autocomplete.getPlace();
    });
}





    
    

    
