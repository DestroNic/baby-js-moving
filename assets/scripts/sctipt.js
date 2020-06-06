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
            formBody.innerHTML = ""
        }
        else if (selection === "moving") {
            formBody.innerHTML = `
            <div class="additional-info">
                <div class="form-item">
                    <label for="addfrom">Address From</label>
                    <input name="addfrom" type="text">
                </div>
                <div class="form-item">
                    <label for="addto">Address To</label>
                    <input name="addto" type="text">
                </div>
            </div>
            <div class="moving-form">
                <div class="form-item">
                    <label for="date">Date</label>
                    <input name="date" type="date">
                </div>
                <div class="form-item">   
                    <label for="stairs">Stairs?</label>
                    <select name="stairs" id="stairs">
                        <option value="no">No</option>
                        <option value="yes">Yes</option>
                    </select>
                </div>
                <div class="form-item">
                    <label for="number-movers">Number of Movers</label>
                    <input name="number-movers type="number">
                </div>
            </div>
            `
        } else if (selection === "wood-refinish") {
            formBody.innerHTML = `
            <div class="wood-refinish">
                <p>Please add a photo of the item you are inquiring about</p>    
                <input type="file" name="file" id="file" accept="image/*" />
                <label for="file"><i class="material-icons">add_photo_alternate</i>Choose a photo</label>
            </div>
            `
        } else if (selection === "labor-only") {
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
                </div>
            `
        } else if (selection === "tv-wall-mount") {
            formBody.innerHTML = `
                <div class="tv-wall-mount">
                    <div class="form-item">
                        <label for="type-wall">Type of Wall</label>
                        <input name="type-wall" type="text">
                    </div>
                    <div class="form-item">
                        <label for="tv-size">Size of TV</label>
                        <input name="tv-size" type="text">
                    </div>
                    <div class="form-item">   
                    <label for="hid-cords">Hidden Cords?</label>
                        <select name="hid-cords" id="hid-cords">
                            <option value="no">No</option>
                            <option value="yes">Yes</option>
                        </select>
                    </div>
                    <div class="form-item">
                        <label for="tv-quant">How many TV's?</label>
                        <input name="tv-quant" type="text">
                    </div>
                </div>
            `
        } else if (selection === "delivery") {
            formBody.innerHTML = `
                <div class="delivery">
                    <p>For delivery inquiry just submit your contact information and we will reach out back to you.
                </div>
            `
        } else if (selection === "furniture-assembly"){
            formBody.innerHTML = `
                <div class="furniture-assembly">
                    <div class="form-item">
                    <label for="furniture-assmbl">Need to assembly or disassembly?</label>
                        <select name="furniture-assmbl" id="furniture-assmbl">
                            <option value="assembly">Assembly</option>
                            <option value="disassembly">Disassembly</option>
                        </select>
                    </div>
                    <div class="form-item">
                        <label for="notes-fur-assm">Please add type, brand name or serial number of the item</label>
                        <input name="notes-fur-assm" type="text">
                    </div>
                    

                </div>
                <div class="wood-refinish">
                <p>Please add a picture of the item you are inquiring about</p>    
                <input type="file" name="file" id="file" accept="image/*" />
                <label for="file"><i class="material-icons">add_photo_alternate</i>Choose a photo</label>
            </div>
            `
        } else if (selection === "packing"){
            formBody.innerHTML = `
                <div class="packing">
                    <div class="form-item">
                        <label for="pk-material">Do you have packing material?</label>
                        <select name="pk-material" id="pk-material">
                            <option value="no">No</option>
                            <option value="yes">Yes</option>
                        </select>
                    </div>
                    <div class="form-item">
                        <label for="rooms">How many rooms?</label>
                        <input name="rooms" type="number">
                    </div>
                </div>
            `
        }

    }

    
    

    
