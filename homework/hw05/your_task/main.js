const baseURL = 'https://www.apitutor.org/spotify/simple/v1/search';

function search(ev) {
    const term = document.querySelector('#search').value;
    // console.log('search for:', term);
    // issue three Spotify queries at once...

    getTracks(term);
    getAlbums(term);
    getArtist(term);
    if (ev) {
        ev.preventDefault();
    }
}

async function getTracks(term) {
    const tracksEndpoint = baseURL + "?q=" + term + "&type=track";
    console.log(tracksEndpoint);
    
    //asking to pull data to spotify 

    const data = await fetch(tracksEndpoint).then(response => response.json());
    console.log(data);
    console.log(data[0]);
    console.log(data[0].name);
    console.log(data[0].artist.name);
    console.log(data[0].album.image_url);

    //clears out old search before running a new one

    document.querySelector('#tracks').innerHTML = "";

    for (let i=0; i<5; i++) {
        const template = `
        <section class="track-item preview" onclick="playSong('${data[i].id}')">
                            <img src="${data[i].album.image_url}">
                            <i class="fas play-track fa-play" aria-hidden="true"></i>
                            <div class="label">
                                <h2>${data[i].name}</h2>
                                <p>
                                ${data[i].artist.name}
                                </p>
                            </div>
                        </section>
        `;
        document.querySelector('#tracks').insertAdjacentHTML('beforeend', template);
    }
}

//job of playSong function, creates an iframe & replaces artist panel content

function playSong(id){
    const template = `
    <iframe style="border-radius:12px" 
        src="https://open.spotify.com/embed/track/${id}?utm_source=generator&theme=0" 
        width="100%" 
        height="352" 
        frameBorder="0" 
        allowfullscreen="" 
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
        loading="lazy"></iframe>
    `;
    document.querySelector('#artist').innerHTML = template;
}

async function getAlbums(term) {
    const albumsEndpoint = baseURL + "?q=" + term + "&type=album";

    // console.log(albumsEndpoint);
    //asking to pull data to spotify 

    const data = await fetch(albumsEndpoint).then(response => response.json());

    // console.log(data);
}

async function getArtist(term) {

    /*
    The Plan:
    0. Create the URL Endpoint based on the term.
    1. Ask for artist info matching the search term (e.g. Drake). Do this by using fetch API.
    2. Wait for Spotify to respond to us.
    3. After data response, print to console.
    4. Figure out how to display artist tastefully.
    */

    const artistEndpoint = baseURL + "?q=" + term + "&type=artist";

    // console.log(artistEndpoint);

    //asking to pull data to spotify 

    const data = await fetch(artistEndpoint).then(response => response.json());

    //if else there is at least 1 element

    if (data.length === 0) {
        document.querySelector('#artist').innerHTML = "No result found.";
        return;
    }

    // console.log(data);
    // console.log(data[0].name);
    // console.log(data[0].img_url);

    //style and target artist results

    const template = `
   <section>
    <img src="${data[0].image_url}" />
    <h2>${data[0].image_url}</h2>
    <p>Popularity: ${data[0]}</p>
    </section>
    `;

    const template1 = `
    <section class="artist-card" id="3Nrfpe0tUJi4K4DXYWgMUX">
                            <div>
                                <img src="${data[0].image_url}">
                                <h2>${data[0].name}</h2>
                                <div class="footer">
                                    <a href="${data[0].spotify_url}" target="_blank">
                                        view on spotify
                                    </a>
                                </div>
                            </div>
                        </section>
                    </section>
                    `;

    document.querySelector('#artist').innerHTML = template1;

    //Print to console
    //The first artist's name
    //The first artist's image_url
    //Update the artist card with an image of the first artist
};


document.querySelector('#search').onkeyup = function (ev) {

    // Number 13 is the "Enter" key on the keyboard
    // console.log(ev.keyCode);

    if (ev.keyCode === 13) {
        ev.preventDefault();
        search();
    }
}