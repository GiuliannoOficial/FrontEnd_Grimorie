import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface Campaign {
  id: number;
  name: string;
  description: string;
}

@Component({
  selector: 'app-campaign-list',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './campaign-list.html',
  styleUrl: './campaign-list.css'
})
export class CampaignList {

  campaigns = signal<Campaign[]>([]);

  campaignName = signal('');
  campaignDescription = signal('');

  constructor(private router: Router) {}

  createCampaign() {

    const newCampaign: Campaign = {
      id: Date.now(),
      name: this.campaignName(),
      description: this.campaignDescription()
    };

    this.campaigns.update(list => [...list, newCampaign]);

    this.campaignName.set('');
    this.campaignDescription.set('');
  }

  openCampaign(id: number) {
    this.router.navigate(['/campaign', id]);
  }
}
