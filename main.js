import input from 'input';

function pyramid(char,maxHeight) {
    for(let height = 1; height <= maxHeight; height += 1) {
        let output = '';
        for (let len =  0; lem < height; len += 1) {
            output += char;

        }
        console.log(output);
        }
    }
    async function main() {
        const char = await input.text('What character would you like to use?');
        const height = await input.text('What is the height?');
        pyramid(char, height);

    }

    main();


