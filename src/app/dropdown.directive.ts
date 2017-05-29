import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  /**
   * [HostBinding description]
   * @param {[type]} ) get opened( [description]
   *
   * Linkar, um certo atributo vindo de elemento host, que no caso será
   * qualquer elemento que pegar essa direcitve.
   */
  @HostBinding('class.open') get opened() {

    /* Todo o estilo vindo da classe open já vem por default do bootstrap, aqui apenas
    estamos especificando quando esta propriedade deve ser executada */
   
    return this.isOpen;
  }

  @HostListener('click') open(){
    this.isOpen = true;
  }

  @HostListener('mouseleave') close(){
    this.isOpen = false;
  }
  
  private isOpen = false;
}