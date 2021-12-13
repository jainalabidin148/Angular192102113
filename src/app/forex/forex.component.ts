import { formatCurrency } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, Renderer2 } from '@angular/core';

declare const $ : any;

@Component({
  selector: 'app-forex',
  templateUrl: './forex.component.html',
  styleUrls: ['./forex.component.css']
})
export class ForexComponent implements OnInit {
  private _table1 : any;

  constructor(private renderer : Renderer2, private http : HttpClient) { }

  ngAfterViewInit(): void {
    this.renderer.removeClass(document.body, "sidebar-open");
    this.renderer.addClass(document.body, "sidebar-closed");

    this._table1 = $("#table1").DataTable
    (
      {
        "columnDefs" :
        [
          {
            "targets" : 2,
            "className" : "text-right"
          }
        ]
      }
    );
      this.getData();
  }
  ngOnInit(): void {
  }

  getData(): void{
    console.log("getData()");

    var url = "https://openexchangerates.org/api/latest.json?app_id=81d2fe8858804f83b35a1ba83961382d";

    this.http.get(url)
    .subscribe((data : any) => {
      console.log(data);

      var rates = data.rates;
      console.log(rates);

      var idr = rates.IDR;
      var idr2 = formatCurrency(idr, "en-US", "", "USD");
      console.log("USD: " + idr2);
      var row = [1, "USD" , idr2];
      this._table1.row.add(row);

      var sgd = rates.IDR / rates.SGD;
      var sgd2 = formatCurrency(sgd, "en-US", "", "SGD");
      console.log("SGD: " + sgd2);
      var row = [2, "SGD", sgd2];
      this._table1.row.add(row);

      var bnd = rates.IDR / rates.BND;
      var bnd2 = formatCurrency(bnd, "en-US", "", "BND");
      console.log("BND: " + bnd2);
      var row = [3, "BND", bnd2];
      this._table1.row.add(row);

      var hkd = rates.IDR / rates.HKD;
      var hkd2 = formatCurrency(hkd, "en-US", "", "HKD");
      console.log("HKD: " + hkd2);
      var row = [4, "HKD", hkd2];
      this._table1.row.add(row);

      var btc = rates.IDR / rates.BTC;
      var btc2 = formatCurrency(btc, "en-US", "", "BTC");
      console.log("BTC: " + btc2);
      var row = [5, "BTC", btc2];
      this._table1.row.add(row);

      var amd = rates.IDR / rates.AMD;
      var amd2 = formatCurrency(amd, "en-US", "", "AMD");
      console.log("AMD: " + amd2);
      var row = [6, "AMD", amd2];
      this._table1.row.add(row);

      var bob = rates.IDR / rates.BOB;
      var bob2 = formatCurrency(bob, "en-US", "", "BOB");
      console.log("BOB: " + bob2);
      var row = [7, "BOB", bob2];
      this._table1.row.add(row);

      var mur = rates.IDR / rates.MUR;
      var mur2 = formatCurrency(mur, "en-US", "", "MUR");
      console.log("MUR: " + mur2);
      var row = [8, "MUR", mur2];
      this._table1.row.add(row);

      var kes = rates.IDR / rates.KES;
      var kes2 = formatCurrency(kes, "en-US", "", "KES");
      console.log("KES: " + kes2);
      var row = [9, "KES", kes2];
      this._table1.row.add(row);

      var pen = rates.IDR / rates.PEN;
      var pen2 = formatCurrency(pen, "en-US", "", "PEN");
      console.log("PEN: " + pen2);
      var row = [10, "PEN", pen2];
      this._table1.row.add(row);

      this._table1.draw(false);
    });
  }
}
