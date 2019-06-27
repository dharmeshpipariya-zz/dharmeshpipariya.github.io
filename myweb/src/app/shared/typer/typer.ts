import { Directive, NgModule, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[typer]'
})
export class Typer {

  constructor(private element: ElementRef) { }

  @Input('typer')
  get list(): string[] { return this._list; }
  set list(value: string[]) {
    this._list = value;
    if (this._list) {
      this.type();
    }
  }
  private _list: string[];

  @Input('data-period')
  get period(): number { return this._period; }
  set period(value: number) {
    this._period = parseInt(value + '', 10) || 2e3;
  }
  private _period: number;

  count: number = 0;
  txt: string = '';
  isBackspace: boolean = false;
  type() {
    let t = this.count % this.list.length;
    let e = this.list[t];
    this.txt = this.isBackspace ? e.substring(0, this.txt.length - 1) : e.substring(0, this.txt.length + 1);
    this.element.nativeElement.innerHTML = '<span class="wrap">' + this.txt + "</span>";
    let i = 300 - 100 * Math.random();
    this.isBackspace && (i /= 2);
    this.isBackspace || this.txt !== e
      ? this.isBackspace && '' === this.txt &&
      (this.isBackspace = !1, this.count++ , i = 500) :
      (i = this.period, this.isBackspace = !0);
    setTimeout(() => {
      this.type()
    }, i);
  }
}

@NgModule({
  exports: [Typer],
  declarations: [Typer],
})
export class TyperModule { }
