const container = document.getElementById('container');

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const box = document.createElement('div');
        container.appendChild(box);
        box.style.width = `${800 / 16}px`;
        box.style.height = `${800 / 16}px`;
        box.addEventListener('mouseenter', () => {
            const red = Math.floor(Math.random() * 255);
            const blue = Math.floor(Math.random() * 255);
            const green = Math.floor(Math.random() * 255);

            box.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        });
    }
}

const btn = document.getElementById('editButton');

btn.addEventListener('click', () => {
    let userInput = prompt("Enter how big You want the grid to be: example 10 = 10x10 grid", "16");

    if(Number(userInput) > 100) {
        userInput = prompt("Number too big, must be less than 100 Try again.");
    }

    while(container.hasChildNodes()) {
        container.removeChild(container.firstElementChild); // erases previous grid before setting up new one.
    }

    for(let i = 0; i < Number(userInput); i++) {
        for(let j = 0; j < Number(userInput); j++) {
            const box = document.createElement('div');
            container.appendChild(box);
            box.style.width = `${800 / userInput}px`;
            box.style.height = `${800 / userInput}px`;
            let darkness = 0;

            box.addEventListener('mouseenter', () => {
                const red = Math.floor(Math.random() * 255);
                const blue = Math.floor(Math.random() * 255);
                const green = Math.floor(Math.random() * 255);
                darkness += 0.1;

                box.style.backgroundColor = `rgba(${red}, ${green}, ${blue}, ${darkness})`;
            });
        }
    }
});
