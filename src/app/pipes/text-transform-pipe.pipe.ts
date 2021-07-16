import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textTransformPipe'
})
export class TextTransformPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    console.log(args);

    const div = document.createElement('div');
    div.innerHTML = value.trim();
    const images = div.getElementsByTagName("img");
    for (let i = 0; i < images.length; i++) {
      const image = images[i];
      const imageSrc = image.getAttribute("src");
      image.src = "http://ws.grupoermofe.com" + imageSrc;
    }

    if (args.length) {
      if (args[0]) {
        const block = div.querySelector('blockquote');
        let description = block.querySelector('p').textContent;
        description = description.substr(0, 150);
        block.innerHTML = `<p>${description}...</p>`;
      }
    }

    return div.outerHTML;
  }

}
