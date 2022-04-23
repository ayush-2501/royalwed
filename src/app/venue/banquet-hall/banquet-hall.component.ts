import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'

@Component({
  selector: 'app-banquet-hall',
  templateUrl: './banquet-hall.component.html',
  styleUrls: ['./banquet-hall.component.css']
})
export class BanquetHallComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).on(function(element, name) {
        var i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for (i = 0; i < arr2.length; i++) {
          while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);     
          }
        }
        element.className = arr1.join(" ");    
  });
  }

}
