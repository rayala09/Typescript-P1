import { Component, OnInit } from '@angular/core';

class Point {
  static x: number;
  x: number;
  y: number;

  constructor(x: number, y: number){
    this.x = x;
    this.y = y;
    // console.log(this.x, this.y);

  }
  add(newPoint: Point) {
    return newPoint = new Point(newPoint.x + this.x, newPoint.y + this.y);
  }
}

class Point3D extends Point {
  z: number;

  constructor(x: number, y: number, z: number) {
    super(x, y);
    this.z = z;

    // console.log(x, y, z);

  }

  add(new3DPoint: Point3D) {
    return new3DPoint = new Point3D(new3DPoint.x + this.x, new3DPoint.y + this.y, new3DPoint.z + this.z);
  }
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';


  ngOnInit() {
    this.testingXY();
    this.testingXYZ();

  }

  testingXY() {
    const p1 = new Point(2, 3);
    const p2 = new Point(4, 5);
    const p3 = p1.add(p2);
    console.log(p3);


  }
  testingXYZ(){
    const p3D1 = new Point3D(1, 2, 3);
    const p3D2 = new Point3D(3, 4, 5);
    const p3D3 = p3D2.add(p3D1);
    console.log(p3D3);
  }

}
