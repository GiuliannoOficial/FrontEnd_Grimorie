import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Character {
  id: number;
  name: string;
  class: string;
  level: number;
}

@Component({
  selector: 'app-campaign-details',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './campaign-details.html',
  styleUrl: './campaign-details.css'
})
export class CampaignDetails {

  characters = signal<Character[]>([]);

  name = signal('');
  characterClass = signal('');
  level = signal(1);

  createCharacter() {

    const character: Character = {
      id: Date.now(),
      name: this.name(),
      class: this.characterClass(),
      level: this.level()
    };

    this.characters.update(list => [...list, character]);

    this.name.set('');
    this.characterClass.set('');
    this.level.set(1);
  }

  deleteCharacter(id: number) {

    const confirmed = confirm('Deseja excluir?');

    if (!confirmed) return;

    this.characters.update(list =>
      list.filter(c => c.id !== id)
    );
  }
}
