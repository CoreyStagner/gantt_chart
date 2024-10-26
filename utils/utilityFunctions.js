// export function iterateObject(obj) {
//   for (const key in obj) {
//     console.log(key, obj[key]);
//     debugger;
//     if (typeof obj[key] === 'object') {
//       iterateObject(obj[key]);
//     }
//   }
// }

// export async function objectMerge(base, objects, options = { deep: false }) {
//   // assign base to result if base is not null, else assign empty object

//   const merge = (...objects) => {
//     const deepCopyObjects = objects.map((object) =>
//       JSON.parse(JSON.stringify(object))
//     );
//     debugger;
//     return deepCopyObjects.reduce((a, b) => ({ ...a, ...b }), {});
//   };

//   const test = await merge(base, objects);
//   console.log(test);
//   debugger;
//   const result = base || {};
//   // Check to see if this is a deep merge
//   const { deep } = options;
//   // Loop through the objects
//   for (const obj in objects) {
//     // This is the instance of the object that we are going to merge into base
//     const iter = objects[obj];
//     // Here we will keep track of the location that we are targetting in the base object
//     let objectSteps = [];
//     // loop through the keys of the object
//     for (const [key, value] of Object.entries(iter)) {
//       if (typeof value === 'object') {
//         objectSteps.push(key);
//       }
//       debugger;
//     }
//     // for (const key in iter) {
//     //   console.log('key', key);
//     //   debugger;
//     //   if (deep && typeof iter[key] === 'object') {
//     //     result[key] = objectMerge([result[key], iter[key]], options);
//     //   } else {
//     //     result[key] = iter[key];
//     //   }
//     // }
//   }
//   return result;
// }

// /*
// set base
// loop through objects
//   if value is object
//     set key to objectSteps

// */
