const originalURL = document.getElementById('url');
const btn = document.querySelector('button');
const content = document.getElementById('main-content');

async function temp_p() {
    const temp_data = await fetch('https://url-shortening-service-3bfx.onrender.com/B9E5u/')
    const data = await temp_data.json();
    console.log(data);
}

// temp_p();

btn.addEventListener('click', async (e) => {
    e.preventDefault();
    const url = originalURL.value;

    try {
        const response = await fetch(`https://url-shortening-service-3bfx.onrender.com/shorten`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ url })
        });

        const data = await response.json();
        const shortenedUrl = data.shortenedUrl;
        console.log(shortenedUrl);

        // const div = document.createElement('div');
        // div.className = 'shortened-url';
        // div.innerHTML = `Here is your shortened URL: <a href="${shortenedUrl}">${shortenedUrl}</a>`;

        // content.appendChild(div);
    } catch (error) {
        alert('Error: ' + error.message);
    }
})