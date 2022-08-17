import { Component, OnInit } from '@angular/core';
import {MyScriptService} from '../../services/my-script.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( private _MyScriptService:MyScriptService) {
    _MyScriptService.Carga(["script"]);
  }

  ngOnInit(): void {

  }

}
