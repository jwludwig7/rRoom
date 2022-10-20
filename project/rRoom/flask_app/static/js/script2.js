let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 40.848099, lng: -74.547032 },
        zoom: 10,
    });
    // let marker = new google.maps.Marker({
    //     position: { lat: 40.81397876775059, lng: -74.38103027997886 },
    //     map: map
    // });
    // let infoWindow = new google.maps.InfoWindow({
    //     content: '<h2>Target East Hanover</h2>'
    // });
    // marker.addListener('click', function(){
    //     infoWindow.open(map, marker);
    // });

    let markers = [
        {
            coords: { lat: 40.81397876775059, lng: -74.38103027997886 },
            content: `<h3>Target East Hanover</h3> <p>Leave a Review!</p> 
            <form action="/reviews/create" method="post" class="form-control flex-column d-flex">
            <label for="restroom_id" class="form-label">Where:</label>
            <select name="restroom_id" id="restroom_id">
                <option value="5">Target E Hanover</option>
            </select>
            <label for="date" class="form-label">Date:</label>
            <input type="date" name="date" id="date" class="form-control">
            <label for="cleanliness">Clean</label>
            <select name="cleanliness" id="cleanliness">
                <option value="1">Yes</option>
                <option value="0">No</option>
            </select>
            <label for="privacy">Private</label>
            <select name="privacy" id="privacy">
                <option value="1">Yes</option>
                <option value="0">No</option>
            </select>
            <label for="comment">Comment</label>
            <textarea name="comment" id="comment" cols="30" rows="10"></textarea>
            <label for="rating">Rating</label>
            <select name="rating" id="rating">
                <option value="1">1 Star</option>
                <option value="2">2 Stars</option>
                <option value="3">3 Stars</option>
                <option value="4">4 Stars</option>
                <option value="5">5 Stars</option>
            </select>
            <button class="btn btn-primary">Submit</button>                       
        </form>
            `
        },
        {
            coords: { lat: 40.83948115829083, lng: -74.43764809028005 },
            content: `<h3>Wegmans Parsippany</h3> <p>Leave a Review!</p>
            <form action="/reviews/create" method="post" class="form-control flex-column d-flex">
            <label for="restroom_id" class="form-label">Where:</label>
            <select name="restroom_id" id="restroom_id">
                <option value="6">Wegmans Parsippany</option>
            </select>
            <label for="date" class="form-label">Date:</label>
            <input type="date" name="date" id="date" class="form-control">
            <label for="cleanliness">Clean</label>
            <select name="cleanliness" id="cleanliness">
                <option value="1">Yes</option>
                <option value="0">No</option>
            </select>
            <label for="privacy">Private</label>
            <select name="privacy" id="privacy">
                <option value="1">Yes</option>
                <option value="0">No</option>
            </select>
            <label for="comment">Comment</label>
            <textarea name="comment" id="comment" cols="30" rows="10"></textarea>
            <label for="rating">Rating</label>
            <select name="rating" id="rating">
                <option value="1">1 Star</option>
                <option value="2">2 Stars</option>
                <option value="3">3 Stars</option>
                <option value="4">4 Stars</option>
                <option value="5">5 Stars</option>
            </select>
            <button class="btn btn-primary">Submit</button>                       
        </form>
            `
        },
        {
            coords: { lat: 40.80958814950053, lng: -74.45723045513198 },
            content: `<h3>Walmart Cedar Knolls</h3> <p>Leave a Review!</p>
            <form action="/reviews/create" method="post" class="form-control flex-column d-flex">
            <label for="restroom_id" class="form-label">Where:</label>
            <select name="restroom_id" id="restroom_id">
                <option value="11">Walmart Cedar Knolls</option>
            </select>
            <label for="date" class="form-label">Date:</label>
            <input type="date" name="date" id="date" class="form-control">
            <label for="cleanliness">Clean</label>
            <select name="cleanliness" id="cleanliness">
                <option value="1">Yes</option>
                <option value="0">No</option>
            </select>
            <label for="privacy">Private</label>
            <select name="privacy" id="privacy">
                <option value="1">Yes</option>
                <option value="0">No</option>
            </select>
            <label for="comment">Comment</label>
            <textarea name="comment" id="comment" cols="30" rows="10"></textarea>
            <label for="rating">Rating</label>
            <select name="rating" id="rating">
                <option value="1">1 Star</option>
                <option value="2">2 Stars</option>
                <option value="3">3 Stars</option>
                <option value="4">4 Stars</option>
                <option value="5">5 Stars</option>
            </select>
            <button class="btn btn-primary">Submit</button>                       
        </form>
            `
        },
        {
            coords: { lat: 	40.808283247958165, lng: -74.46246192215064 },
            content: `<h3>Quick Check Morristown</h3><p>Leave a Review!</p>
            <form action="/reviews/create" method="post" class="form-control flex-column d-flex">
            <label for="restroom_id" class="form-label">Where:</label>
            <select name="restroom_id" id="restroom_id">
                <option value="12">Quick Check Morristown</option>
            </select>
            <label for="date" class="form-label">Date:</label>
            <input type="date" name="date" id="date" class="form-control">
            <label for="cleanliness">Clean</label>
            <select name="cleanliness" id="cleanliness">
                <option value="1">Yes</option>
                <option value="0">No</option>
            </select>
            <label for="privacy">Private</label>
            <select name="privacy" id="privacy">
                <option value="1">Yes</option>
                <option value="0">No</option>
            </select>
            <label for="comment">Comment</label>
            <textarea name="comment" id="comment" cols="30" rows="10"></textarea>
            <label for="rating">Rating</label>
            <select name="rating" id="rating">
                <option value="1">1 Star</option>
                <option value="2">2 Stars</option>
                <option value="3">3 Stars</option>
                <option value="4">4 Stars</option>
                <option value="5">5 Stars</option>
            </select>
            <button class="btn btn-primary">Submit</button>                       
        </form>
            `
        },
        {
            coords: { lat: 	40.81401618773795, lng: -74.46907088462655 },
            content: `<h3>ShopRite Morristown</h3><p>Leave a Review!</p>
            <form action="/reviews/create" method="post" class="form-control flex-column d-flex">
            <label for="restroom_id" class="form-label">Where:</label>
            <select name="restroom_id" id="restroom_id">
                <option value="13">ShopRite Morristown</option>
            </select>
            <label for="date" class="form-label">Date:</label>
            <input type="date" name="date" id="date" class="form-control">
            <label for="cleanliness">Clean</label>
            <select name="cleanliness" id="cleanliness">
                <option value="1">Yes</option>
                <option value="0">No</option>
            </select>
            <label for="privacy">Private</label>
            <select name="privacy" id="privacy">
                <option value="1">Yes</option>
                <option value="0">No</option>
            </select>
            <label for="comment">Comment</label>
            <textarea name="comment" id="comment" cols="30" rows="10"></textarea>
            <label for="rating">Rating</label>
            <select name="rating" id="rating">
                <option value="1">1 Star</option>
                <option value="2">2 Stars</option>
                <option value="3">3 Stars</option>
                <option value="4">4 Stars</option>
                <option value="5">5 Stars</option>
            </select>
            <button class="btn btn-primary">Submit</button>                       
        </form>
            `
        },
        {
            coords: { lat: 40.81683739267323, lng: -74.47193901661696 },
            content: `<h3>Lowes Morristown</h3><p>Leave a Review!</p>
            <form action="/reviews/create" method="post" class="form-control flex-column d-flex">
            <label for="restroom_id" class="form-label">Where:</label>
            <select name="restroom_id" id="restroom_id">
                <option value="14">Lowes Morristown</option>
            </select>
            <label for="date" class="form-label">Date:</label>
            <input type="date" name="date" id="date" class="form-control">
            <label for="cleanliness">Clean</label>
            <select name="cleanliness" id="cleanliness">
                <option value="1">Yes</option>
                <option value="0">No</option>
            </select>
            <label for="privacy">Private</label>
            <select name="privacy" id="privacy">
                <option value="1">Yes</option>
                <option value="0">No</option>
            </select>
            <label for="comment">Comment</label>
            <textarea name="comment" id="comment" cols="30" rows="10"></textarea>
            <label for="rating">Rating</label>
            <select name="rating" id="rating">
                <option value="1">1 Star</option>
                <option value="2">2 Stars</option>
                <option value="3">3 Stars</option>
                <option value="4">4 Stars</option>
                <option value="5">5 Stars</option>
            </select>
            <button class="btn btn-primary">Submit</button>                       
        </form>
            `
        },
        {
            coords: { lat: 40.86186267103901, lng: -74.38826912659881 },
            content: `<h3>Target Parsippany</h3><p>Leave a Review!</p>
            <form action="/reviews/create" method="post" class="form-control flex-column d-flex">
            <label for="restroom_id" class="form-label">Where:</label>
            <select name="restroom_id" id="restroom_id">
                <option value="15">Target Parsippany</option>
            </select>
            <label for="date" class="form-label">Date:</label>
            <input type="date" name="date" id="date" class="form-control">
            <label for="cleanliness">Clean</label>
            <select name="cleanliness" id="cleanliness">
                <option value="1">Yes</option>
                <option value="0">No</option>
            </select>
            <label for="privacy">Private</label>
            <select name="privacy" id="privacy">
                <option value="1">Yes</option>
                <option value="0">No</option>
            </select>
            <label for="comment">Comment</label>
            <textarea name="comment" id="comment" cols="30" rows="10"></textarea>
            <label for="rating">Rating</label>
            <select name="rating" id="rating">
                <option value="1">1 Star</option>
                <option value="2">2 Stars</option>
                <option value="3">3 Stars</option>
                <option value="4">4 Stars</option>
                <option value="5">5 Stars</option>
            </select>
            <button class="btn btn-primary">Submit</button>                       
        </form>
            `
        },
        {
            coords: { lat: 40.86546982647993, lng: -74.37563154983198 },
            content: `<h3>ShopRite Parsippany</h3><p>Leave a Review!</p>
            <form action="/reviews/create" method="post" class="form-control flex-column d-flex">
            <label for="restroom_id" class="form-label">Where:</label>
            <select name="restroom_id" id="restroom_id">
                <option value="16">ShopRite Parsippany</option>
            </select>
            <label for="date" class="form-label">Date:</label>
            <input type="date" name="date" id="date" class="form-control">
            <label for="cleanliness">Clean</label>
            <select name="cleanliness" id="cleanliness">
                <option value="1">Yes</option>
                <option value="0">No</option>
            </select>
            <label for="privacy">Private</label>
            <select name="privacy" id="privacy">
                <option value="1">Yes</option>
                <option value="0">No</option>
            </select>
            <label for="comment">Comment</label>
            <textarea name="comment" id="comment" cols="30" rows="10"></textarea>
            <label for="rating">Rating</label>
            <select name="rating" id="rating">
                <option value="1">1 Star</option>
                <option value="2">2 Stars</option>
                <option value="3">3 Stars</option>
                <option value="4">4 Stars</option>
                <option value="5">5 Stars</option>
            </select>
            <button class="btn btn-primary">Submit</button>                       
        </form>
            `
        },
        {
            coords: { lat: 	40.865583417619874, lng: -74.37250945879221 },
            content: `<h3>Home Depot Parsippany</h3><p>Leave a Review!</p>
            <form action="/reviews/create" method="post" class="form-control flex-column d-flex">
            <label for="restroom_id" class="form-label">Where:</label>
            <select name="restroom_id" id="restroom_id">
                <option value="17">Home Depot Parsippany</option>
            </select>
            <label for="date" class="form-label">Date:</label>
            <input type="date" name="date" id="date" class="form-control">
            <label for="cleanliness">Clean</label>
            <select name="cleanliness" id="cleanliness">
                <option value="1">Yes</option>
                <option value="0">No</option>
            </select>
            <label for="privacy">Private</label>
            <select name="privacy" id="privacy">
                <option value="1">Yes</option>
                <option value="0">No</option>
            </select>
            <label for="comment">Comment</label>
            <textarea name="comment" id="comment" cols="30" rows="10"></textarea>
            <label for="rating">Rating</label>
            <select name="rating" id="rating">
                <option value="1">1 Star</option>
                <option value="2">2 Stars</option>
                <option value="3">3 Stars</option>
                <option value="4">4 Stars</option>
                <option value="5">5 Stars</option>
            </select>
            <button class="btn btn-primary">Submit</button>                       
        </form>
            `
        },
        {
            coords: { lat: 	40.79070967116302, lng: -74.47499430895768 },
            content: `<h3>Kings SuperMKT Morristown</h3><p>Leave a Review!</p>
            <form action="/reviews/create" method="post" class="form-control flex-column d-flex">
            <label for="restroom_id" class="form-label">Where:</label>
            <select name="restroom_id" id="restroom_id">
                <option value="18">Kings SuperMKT Morristown</option>
            </select>
            <label for="date" class="form-label">Date:</label>
            <input type="date" name="date" id="date" class="form-control">
            <label for="cleanliness">Clean</label>
            <select name="cleanliness" id="cleanliness">
                <option value="1">Yes</option>
                <option value="0">No</option>
            </select>
            <label for="privacy">Private</label>
            <select name="privacy" id="privacy">
                <option value="1">Yes</option>
                <option value="0">No</option>
            </select>
            <label for="comment">Comment</label>
            <textarea name="comment" id="comment" cols="30" rows="10"></textarea>
            <label for="rating">Rating</label>
            <select name="rating" id="rating">
                <option value="1">1 Star</option>
                <option value="2">2 Stars</option>
                <option value="3">3 Stars</option>
                <option value="4">4 Stars</option>
                <option value="5">5 Stars</option>
            </select>
            <button class="btn btn-primary">Submit</button>                       
        </form>
            `
        },


    ];

    for (let i = 0; i < markers.length; i++) {
        addMarker(markers[i]);
    }

    // addMarker({
    //     coords: { lat: 40.81397876775059, lng: -74.38103027997886 },
    //     content: '<h3>Target East Hanover</h3>'
    // });

    function addMarker(props) {
        let marker = new google.maps.Marker({
            position: props.coords,
            map: map,
        });

        if (props.content) {
            let infoWindow = new google.maps.InfoWindow({
                content: props.content
            });
            marker.addListener('click', function () {
                infoWindow.open(map, marker);
            });

        }
    }
    infoWindow = new google.maps.InfoWindow();

    const locationButton = document.createElement("button");

    locationButton.textContent = "Current Location";
    locationButton.classList.add("custom-map-control-button");
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
    locationButton.addEventListener("click", () => {
        // Try HTML5 geolocation.
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const pos = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    };

                    infoWindow.setPosition(pos);
                    infoWindow.setContent("You are Here");
                    infoWindow.open(map);
                    map.setCenter(pos);
                },
                () => {
                    handleLocationError(true, infoWindow, map.getCenter());
                }
            );
        } else {
            // Browser doesn't support Geolocation
            handleLocationError(false, infoWindow, map.getCenter());
        }
    });
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(
        browserHasGeolocation
            ? "Error: The Geolocation service failed."
            : "Error: Your browser doesn't support geolocation."
    );
    infoWindow.open(map);
}
window.initMap = initMap;