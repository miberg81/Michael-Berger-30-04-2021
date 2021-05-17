import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { City } from '../home/city-detail/city.model';

@Component({
  selector: 'app-search-history',
  templateUrl: './search-history.component.html',
  styleUrls: ['./search-history.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
    ])
  ]
})
export class SearchHistoryComponent implements OnInit {
  @Input() searchHistory: Array<City>;

  columnsToDisplay: string[];
  expandedElement: City | null;

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.searchHistory = this.dataService.getSearchHistory();
    console.log('searchHistory from table ', this.searchHistory);
    this.columnsToDisplay = ['name', 'country', 'temp'];
  }
}
