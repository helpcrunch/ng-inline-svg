import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo',
  templateUrl: './demo.template.html',
})
export class DemoComponent implements OnInit {
  private _showOther: boolean = false;
  private _attrs = {
    'width': '50',
    'height': '50'
  };
  private _changeAttrs = {
    'width': '50',
    'height': '50'
  };

  ngOnInit() {
    setTimeout(() => {
      this._showOther = true;
    }, 100);
  }

  handleSVG(svg: SVGElement, parent: Element | null): SVGElement {
    console.log('Loaded SVG: ', svg, parent);
    svg.setAttribute('width', '100');
    return svg;
  }

  updateSize(value: number): void {
    this._changeAttrs = {
      'width': (parseInt(this._changeAttrs['width'], 10) + value).toString(),
      'height': (parseInt(this._changeAttrs['height'], 10) + value).toString(),
    };
  }
}
