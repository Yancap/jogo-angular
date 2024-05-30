import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'jogo-angular';

  public modal = false;


  ngOnInit(): void {
    window.addEventListener('keydown', (event: KeyboardEvent) => {
      console.log(event);
      if(event.key === 'Escape') {
        this.modal = false;
      }

    })
  }
  public openModal() {
    this.modal = true;
  };
  public closeModal(event?: MouseEvent) {
    const bgModal = document.querySelector('.modal-bg')
    console.log(event?.currentTarget);

    if(event?.currentTarget === bgModal) {
      this.modal = false;
    }
  };
}
