module.exports = function solveSudoku(matrix) {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if(matrix[row][col] === 0){
  			let sectionRow = Math.floor(row / 3) *3;
  			let sectionCol = Math.floor(col / 3) *3;
  			const allPossibleSuggestions = [];
  			for (let i = sectionRow; i < (sectionRow + 3); i++) {
  				for (let j = sectionCol; j < (sectionCol + 3); j++) {
  					allPossibleSuggestions.push(matrix[i][j]);
  				}
  			}
        for (let i = 0; i < matrix.length; i++) {
         allPossibleSuggestions.push(matrix[row][i]);
         allPossibleSuggestions.push(matrix[i][col]);
        }
        let mostPossibleSuggestions = [1,2,3,4,5,6,7,8,9].filter(item => !allPossibleSuggestions.includes(item));
        let updatedMatrix ;
        for (let i = 0; i < mostPossibleSuggestions.length; i++) {
          matrix[row][col] = mostPossibleSuggestions[i];
          updatedMatrix = solveSudoku(matrix);
          if(updatedMatrix != false){
            return updatedMatrix;
          }
        }
          matrix[row][col] = 0;
          return false;

     }
   }
  }
  return matrix;
}
