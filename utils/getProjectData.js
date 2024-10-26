import { client } from '../utils/fetchWrapper';
// import { objectMerge } from '../utils/utilityFunctions';

export async function getCurrentProjectData() {
  let defaultProjectData, userProjectData, result;

  await client('data/project-default.json').then((data) => {
    defaultProjectData = data;
  });

  await client('data/project-user.json').then((data) => {
    userProjectData = data;
  });
  return [defaultProjectData, userProjectData];
  // TODO: Get the below working with the above data
  // result = objectMerge(
  //   defaultProjectData, // base
  //   [userProjectData], // objects to merge into base
  //   { deep: true } // options
  // ).then((data) => {
  //   console.log('data', data);
  //   return data;
  // });
}
