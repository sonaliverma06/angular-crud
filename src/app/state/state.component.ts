import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { FormControl } from '@angular/forms';
import { MyGraphqlService } from '../my-graphql.service';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss'],
})
export class StateComponent {
  countries: any[] = [];
  selectedDropdown1Value: any;
  secondrop: any;
  thirdrop: any;
  thirddDropdownControl = new FormControl();
  secondDropdownControl = new FormControl();
  firstDropdownControl = new FormControl();
  country = '';
  state = '';
  city = '';

  constructor(
    private appService: AppService,
    private mygraph: MyGraphqlService
  ) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.appService.getcountries().subscribe({
      next: (res) => {
        this.countries = res.map((item: any) => item.name.common);
      },
      error: (err) => {
        console.log(err);
      },
    });

    this.mygraph.getSomeData().subscribe({
      next: (res) => {
        console.log('ressssssssssssss',res);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  onDropdown1Change(event: any) {
    console.log('event', event);
    this.country = event;
    this.appService.getstate(event).subscribe({
      next: (res) => {
        this.secondrop = res.data.states.map((item: any) => item.name);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  onDropdown2Change(event: any) {
    this.state = event;
    // console.log('event2', event);
    this.appService.getcitystate(this.country, event).subscribe({
      next: (res) => {
        this.thirdrop = res.data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  onDropdown3Change(event: any) {
    this.city = event;
    // console.log('ssssss', event);
  }
}
