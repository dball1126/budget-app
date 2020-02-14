import { Component, OnInit } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item-model';
import { UpdateEvent } from '../budget-item-list/budget-item-list.component';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  budgetItems: BudgetItem[] = new Array<BudgetItem>();
  totalBudget: number = 0;

  constructor() { }

  ngOnInit() {
  }

  addItem(newItem: BudgetItem){
    this.budgetItems.push(newItem);
    this.totalBudget += Number(newItem.amount);
  }

  deleteItem(item: BudgetItem) {
    let index = this.budgetItems.indexOf(item);
    this.budgetItems.splice(index, 1);

    this.totalBudget -= Number(item.amount);
  }

  updateItem(updateEvent: UpdateEvent) {
        // result is the update budget item
        // replace the item with the updated/submitted item from the form
        this.totalBudget -= Number(updateEvent.old.amount);
        this.totalBudget += Number(updateEvent.new.amount);
        this.budgetItems[this.budgetItems.indexOf(updateEvent.old)] = updateEvent.new;
        
  }
}
