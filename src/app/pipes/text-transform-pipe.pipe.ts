import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textTransformPipe'
})
export class TextTransformPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const div = document.createElement('div');
    div.innerHTML = value.trim();
    const images = div.getElementsByTagName("img");
    for (let i = 0; i < images.length; i++) {
        const image = images[i];
        const imageSrc = image.getAttribute("src");
        image.src = "http://ws.grupoermofe.com" + imageSrc;
    }
    return div.outerHTML;
  }

}
