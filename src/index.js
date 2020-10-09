
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result =[];
  let row_counter=0;
  
  if (matrix==undefined || matrix[0]==undefined) {
    return result;
  }

  console.log('matrix[i].length: '+matrix[0].length);
  if (matrix.length>0) {
    for (let i=0; i<matrix.length; i++) {
      if (row_counter==0){
        for (let j=0; j<matrix[i].length; j++) {
          result.push(matrix[i][j]);
        }
        row_counter=1;
        continue;
      }  else {
        for (let j=matrix[i].length-1; j>=0; j--) {
          result.push(matrix[i][j]);
        }
        row_counter=0;
        continue;
      }
    }
    return result;
  } else return result;
  
}
