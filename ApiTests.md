```ts
import { Pinsel, circle, rectangle } from 'pinsel';

const p = new Pinsel();

// rectangle(x, y, width, height)
const rectangle1 = rectangle(15, 50, 300, 150);





const rectangle2 = rectangle(
  15,
  rectangle1.bottomAnchor({ constant: 20 }),
  rectangle1.widthAnchor({ multiplier: 0.5 }),
  150
);

const rectangle3 = rectangle(
  scene.topAnchor(),
  rectangle1.bottomAnchor({ constant: 20 }),
  rectangle1.widthAnchor(),
  150
);

const rectangle4 = rectangle(
  scene.topAnchor({ constant: 4 }),
  rectangle1.bottomAnchor({ constant: -20 }),
  scene.widthAnchor(),
  autoHeightAnchor()
);




// Core
[]

getClassic()

submitChanges({}) 
-> representation + Bereich der rerendert werden muss + hasChanges: boolean


// Runner
requestanimationFrame

runner.draw = () => {


}


onButtonClick = () =>{
    runner.addAnimation(flame, fireAnimation)
}



runner.addAnimation(rectangle, 
  animation({
    duration: 4000,
    property: 'UNKNOWN'
    draw: (body, progress, timingcurveValue) => {
      body.width = calculationFunction(progress);
      body.height = otherCalculationFunction(progress);
    },
    completion: () => {
      console.log('Animation done');
    },
    afterCompletion: 'REVERSE',
    timingCurve: 'ease-in',
  })
);


rectangle4.addAnimation(
  animation({
    duration: 4000,
    property: 'width'
    value: (progress) => calculationFunction(progress);
    completion: () => {
      console.log('Animation done');
    },
    afterCompletion: 'REVERSE',
    timingCurve: 'ease-in',
  })
);

p.add(rectangle4)



AdptiveCanvasRenderer
FluidCanvasRenderer
SVGRenderer


// Aufruf im Runner
renderer.renderChanges(changes)


```
