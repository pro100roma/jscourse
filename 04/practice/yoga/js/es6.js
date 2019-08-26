window.addEventListener('DOMContentLoaded', function() {

    class Options {
        constructor(height, width, bg, fontSize, textAlign, content) {
            this.height = height;
            this.width = width;
            this.bg = bg;
            this.fontSize = fontSize;
            this.textAlign = textAlign;
            this.content = content;
        }
        createDiv() {
            let div = document.createElement('div');
                div.className = 'customCreated';
                div.innerHTML = this.content;
                div.style.height = `${this.height}px`;
                div.style.width = `${this.width}px`;
                div.style.background = this.bg;
                div.style.fontSize = `${this.fontSize}px`;
                div.style.textAlign = this.textAlign;
            
            document.body.append(div);
        }
    }

    let smallBox = new Options(100, 200, 'red', 18, 'center', 'Text form small box'),
        bigBox = new Options(200, 400, 'green', 24, 'right', 'Big box text');

    console.log(smallBox);
    console.log(bigBox);

    smallBox.createDiv();
    bigBox.createDiv();

});